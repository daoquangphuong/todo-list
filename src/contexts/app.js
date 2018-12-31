import React from "react";
import constants from "../constants";
import immutable from "immutable";

const DEFAULT_STATE = immutable.fromJS({
  form: {
    todo: { text: "" }
  },
  filterBy: constants.ALL,
  todoMap: {},
  todoIdList: []
});

const AppContext = React.createContext();

export const AppConsumer = AppContext.Consumer;

export class AppProvider extends React.PureComponent {
  state = {
    app: DEFAULT_STATE,
    updateFormValues: (formName, field, value) => {
      const { app } = this.state;
      const newAppState = app.setIn(["form", formName, field], value);
      this.setState({ app: newAppState });
    },
    add: () => {
      const { app } = this.state;
      const todoText = app.getIn(["form", "todo", "text"], "");
      const newTodo = {
        id: `${Date.now()}-${Math.random()}`,
        text: todoText,
        status: constants.ACTIVE,
        createdAt: Date.now()
      };
      if (!todoText) {
        return;
      }
      let newAppState = app
        .update("todoMap", todoMap =>
          todoMap.set(newTodo.id, immutable.fromJS(newTodo))
        )
        .setIn(["form", "todo", "text"], "");
      newAppState = this.updateTodoIdList(newAppState);
      this.setState({ app: newAppState });
    },
    toggle: item => {
      const { app } = this.state;
      let newAppState = app.setIn(
        ["todoMap", item.get("id"), "status"],
        item.get("status") === constants.ACTIVE
          ? constants.DONE
          : constants.ACTIVE
      );
      newAppState = this.updateTodoIdList(newAppState);
      this.setState({ app: newAppState });
    },
    del: item => {
      const { app } = this.state;
      let newAppState = app.update("todoMap", todoMap =>
        todoMap.delete(item.get("id"))
      );
      newAppState = this.updateTodoIdList(newAppState);
      this.setState({ app: newAppState });
    },
    toggleAll: () => {
      const { app } = this.state;
      const todoIdList = app.get("todoIdList").toJS();
      let todoMap = app.get("todoMap");
      todoIdList.forEach(id => {
        todoMap = todoMap.setIn(
          [id, "status"],
          todoMap.getIn([id, "status"]) === constants.ACTIVE
            ? constants.DONE
            : constants.ACTIVE
        );
      });
      let newAppState = app.set("todoMap", todoMap);
      newAppState = this.updateTodoIdList(newAppState);
      this.setState({ app: newAppState });
    },
    filter: value => () => {
      const { app } = this.state;
      let newAppState = app.set("filterBy", value);
      newAppState = this.updateTodoIdList(newAppState);
      this.setState({ app: newAppState });
    }
  };

  updateTodoIdList = app => {
    const filterBy = app.get("filterBy");
    let todoMap = app.get("todoMap");
    if (filterBy !== constants.ALL) {
      todoMap = todoMap.filter(i => i.get("status") === filterBy);
    }
    return app.update("todoIdList", todoIdList =>
      immutable.fromJS(
        todoMap
          .keySeq()
          .sortBy(id => todoMap.getIn([id, "createdAt"]), (a, b) => b - a)
          .toList()
      )
    );
  };

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

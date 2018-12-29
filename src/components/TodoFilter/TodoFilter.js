import React from "react";

import MyButton from "../MyButton/MyButton";

import constants from "../../constants";
import "./styles.css";

const filterList = [
  { id: constants.ALL, text: "All" },
  { id: constants.DONE, text: "Done" },
  { id: constants.ACTIVE, text: "Active" }
];

export default class TodoFilter extends React.PureComponent {
  render() {
    const { filterBy, onChange } = this.props;
    return (
      <div>
        <span>Filter</span>
        {filterList.map(item => (
          <MyButton
            key={item.id}
            onClick={onChange(item.id)}
            color={filterBy === item.id ? "green" : "default"}
          >
            {item.text}
          </MyButton>
        ))}
      </div>
    );
  }
}

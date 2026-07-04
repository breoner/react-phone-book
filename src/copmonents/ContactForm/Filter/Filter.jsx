import { Component } from "react";
import style from "./Filter.module.css";

class Filter extends Component {
  render() {
    const { value, onChange } = this.props;

    return (
      <label className={style.label}>
        Find contact by name
        <br />
        <input
          className={style.input}
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
      </label>
    );
  }
}

export default Filter;
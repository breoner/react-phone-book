import { Component } from "react";
import style from "./Filter.module.css"

class Filter extends Component {
  render() {
    return (
      <>
        <label className={style.label}>  
          Find contact by name
          <br />
          <input className={style.input} value={this.props.filter} type="text" name="filter" onChange={this.props.onChange} />
        </label>
      </>
    );
  }
}

export default Filter;

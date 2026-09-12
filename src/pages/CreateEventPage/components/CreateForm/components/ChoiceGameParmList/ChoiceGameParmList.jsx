import { Component } from "react";
import style from "./ChoiceGameParmList.module.scss";

export class ChoiceGameParmList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    };
  }

  handleSelect = (index) => {
    this.setState({ selectedIndex: index });
    if (this.props.onSelect) {
      this.props.onSelect(this.props.arr[index]);
    }
  };

  render() {
    const { arr } = this.props;
    const { selectedIndex } = this.state;

    return (
      <ul className={style.createFormList}>
        {arr.map((num, index) => (
          <li
            key={`gameParm-${num}`}
            className={`${style.createFormItem} ${
              index === selectedIndex ? style.activeItem : ""
            }`}
            onClick={() => this.handleSelect(index)}
          >
            {num}
          </li>
        ))}
      </ul>
    );
  }
}
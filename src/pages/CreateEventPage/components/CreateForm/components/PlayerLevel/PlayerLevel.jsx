import { Component } from "react";
import style from "./PlayerLevel.module.scss";

export class PlayerLevel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStrict: false,
      minLevel: "1.5",
      maxLevel: "4.0",
    };
  }

  handleToggleStrict = (e) => {
    this.setState({ isStrict: e.target.checked });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { isStrict, minLevel, maxLevel } = this.state;

    return (
      <div className={style.level}>
        <div className={style.levelHeader}>
          <h2 className={style.levelTitle}>Рівень гравців</h2>
          <label className={style.levelSwitch}>
            <span className={style.levelSpan}>Строгий рівень</span>
            <input
              type="checkbox"
              checked={isStrict}
              onChange={this.handleToggleStrict}
            />
            <span className={style.levelSlider}></span>
          </label>
        </div>
        <div className={style.levelInputDiv}>
          <div className={style.levelInputFlexDiv}>
            <label className={style.levelLabel} htmlFor="eventMinLev">
              Мінімальний рівень
            </label>
            <input
              className={style.levelInput}
              placeholder="1.5"
              type="text"
              name="minLevel"
              id="eventMinLev"
              value={minLevel}
              onChange={this.handleInputChange}
            />
          </div>
          <div className={style.levelInputFlexDiv}>
            <label className={style.levelLabel} htmlFor="eventMaxLev">
              Максимальний рівень
            </label>
            <input
              className={style.levelInput}
              placeholder="4.0"
              type="text"
              name="maxLevel"
              id="eventMaxLev"
              value={maxLevel}
              onChange={this.handleInputChange}
            />
          </div>
        </div>
      </div>
    );
  }
}
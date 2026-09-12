import { Component } from "react";
import { PadelIcon, TennisIcon } from "../../../../../../components/Icons/Icons.jsx";
import style from "./ChooseSport.module.scss";

export class ChooseSport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSport: "padel",
    };
  }

  handleSelectSport = (sport) => {
    this.setState({ activeSport: sport });
    if (this.props.onSportChange) {
      this.props.onSportChange(sport);
    }
  };

  render() {
    const { activeSport } = this.state;

    return (
      <ul className={style.chooseSport}>
        <li
          className={`${style.chooseSportItem} ${
            activeSport === "padel" ? style.activeSportItem : ""
          }`}
        >
          <button
            className={style.chooseSportButton}
            type="button"
            onClick={() => this.handleSelectSport("padel")}
          >
            <PadelIcon className={style.chooseSportIcon} />
            Падель
          </button>
        </li>
        <li
          className={`${style.chooseSportItem} ${
            activeSport === "tennis" ? style.activeSportItem : ""
          }`}
        >
          <button
            className={style.chooseSportButton}
            type="button"
            onClick={() => this.handleSelectSport("tennis")}
          >
            <TennisIcon className={style.chooseSportIcon} />
            Теніс
          </button>
        </li>
      </ul>
    );
  }
}
import React from "react";
import ContestBox from "./ContestBox";
export default class ContestInfo extends React.Component {
  showCards = (data) => {
    Object.entries(data).map((el) => {
      return <ContestBox key={el[1]["name"]} data={el} />;
    });
  };
  render() {
    return <div className="cholder">{this.showCards(this.props.data)}</div>;
  }
}

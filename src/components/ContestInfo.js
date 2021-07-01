import React from "react";
import ContestBox from "./ContestBox";
export default class ContestInfo extends React.Component {
  showCards = (data) => {};
  render() {
    return (
      <div className="cholder">
        {Object.entries(this.props.data).map((el,ind) => {
          return <ContestBox key={ind} data={el} />;
        })}
      </div>
    );
  }
}

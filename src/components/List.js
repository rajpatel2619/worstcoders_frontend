import React from "react";

import AtCoder from "../images/atcoder.png";
import Codechef from "../images/codechef.png";
import Codeforces from "../images/codeforces.png";
// import CS_Academy from "../images/csacademy.png";
import HackerRank from "../images/hackerrank.png";
import HackerEarth from "../images/hackerearth.png";
import Leetcode from "../images/leetcode.png";
import TopCoder from "../images/topcoder.png";
import KickStart from "../images/kickstart.png";
import all from "../images/worstcoders_logo.png";
// 
import ReactRoundedImage from "react-rounded-image";
export default class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        all:[all,"All Contests","all"],
        at_coder: [AtCoder, "AtCoder","AtCoder"],
        code_chef: [Codechef, "Codechef","CodeChef"],
        codeforces: [Codeforces, "Codeforces","CodeForces"],
        // cs_academy: [CS_Academy, "CS_Academy"],
        hacker_rank: [HackerRank, "HackerRank","HackerRank"],
        hacker_earth: [HackerEarth, "HackerEarth","HackerEarth"],
        kick_start: [KickStart, "KickStart","Kick Start"],
        leet_code: [Leetcode, "Leetcode","LeetCode"],
        top_coder: [TopCoder, "TopCoder","TopCoder"],
      },
    };
  }

  returnTick=(name)=>{
    if(name !== "all"){

      if(this.props.selectedPlatforms.includes(name)){
        return <span style={{color:"green"}}>☑</span>;
      }else{
        return <span>☐</span>;
      }
    }else{
      if(this.props.selectedPlatforms.length===0){
        return <span>✅</span>;
      }
    }
  }

  render() {
    return (
      <div>
        {Object.entries(this.state.data).map((el, i) => {
          
          return (
            <div key={i} className="listitem">
              <ReactRoundedImage
                image={el[1][0]}
                roundedColor="skyblue"
                imageWidth="20"
                imageHeight="20"
                roundedSize="1"
                borderRadius="100"
              />

              <h2
                className="clicka"
                onClick={() => this.props.changeContest(el[1][2])}
              >
                {" "}
                &nbsp;&nbsp;{el[1][1]} &nbsp;
                {this.returnTick(el[1][2])}
                
              </h2>
            </div>
          );
        })}
      </div>
    );
  }
}

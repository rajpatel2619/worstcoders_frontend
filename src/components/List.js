import React from 'react'

import AtCoder from "../images/atcoder.png"
import Codechef from "../images/codechef.png"
import Codeforces from "../images/codeforces.png"
import CS_Academy from "../images/csacademy.png"
import HackerRank from "../images/hackerrank.png"
import HackerEarth from "../images/hackerearth.png"
import Leetcode from "../images/leetcode.png"
import TopCoder from "../images/topcoder.png"
import KickStart from "../images/kickstart.png"



import ReactRoundedImage from "react-rounded-image";
export default class List extends React.Component{
	constructor(props) {
		super(props);
		this.state ={
			data :{
				"at_coder":[AtCoder,"AtCoder"],
				"code_chef":[Codechef,"Codechef"],
				"codeforces":[Codeforces,"Codeforces"],
				"cs_academy":[CS_Academy,"CS_Academy"],
				"hacker_rank":[HackerRank,"HackerRank"],
				"hacker_earth":[HackerEarth,"HackerEarth"],
				"kick_start":[KickStart,"KickStart"],
				"leet_code":[Leetcode,"Leetcode"],
				"top_coder":[TopCoder,"TopCoder"]
			}
		}
		
	      }

	render(){
		return(
			<div>
				{
				
		Object.entries(this.state.data).map((el,i) => {
			
			return <div key={i} className="listitem">
			      <ReactRoundedImage	
				image={el[1][0]}
				roundedColor="skyblue"
				imageWidth="20"
				imageHeight="20"
				roundedSize="1"
				borderRadius="100"
				/> 
				
				      <h2 className="clicka" onClick={()=>this.props.changeContest(el[0],el[1][1])}> &nbsp;{el[1][1]}</h2>
			</div>;
		})	
				}
			</div>
		);
	}
}
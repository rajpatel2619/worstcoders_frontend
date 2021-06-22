import React from 'react'

import atcoder from "../images/atcoder.png"
import codechef from "../images/codechef.png"
import codeforces from "../images/codeforces.png"
import csacademy from "../images/csacademy.png"
import hackerrank from "../images/hackerrank.png"
import hackerearth from "../images/hackerearth.png"
import leetcode from "../images/leetcode.png"
import topcoder from "../images/topcoder.png"
import kickstart from "../images/kickstart.png"



import ReactRoundedImage from "react-rounded-image";
export default class List extends React.Component{
	constructor(props) {
		super(props);
		this.state ={
			data :{
				"at_coder":atcoder,
				"code_chef":codechef,
				"codeforces":codeforces,
				"cs_academy":csacademy,
				"hacker_rank":hackerrank,
				"hacker_earth":hackerearth,
				"kick_start":kickstart,
				"leet_code":leetcode,
				"top_coder":topcoder
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
				image={el[1]}
				roundedColor="skyblue"
				imageWidth="20"
				imageHeight="20"
				roundedSize="1"
				borderRadius="100"
				/> 
				
				      <h2 className="clicka" onClick={()=>this.props.changeContest(el[0])}> &nbsp;{el[0]}</h2>
			</div>;
		})	
				}
			</div>
		);
	}
}
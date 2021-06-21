import React from 'react'
import ContestBox from './ContestBox';
export default class ContestInfo extends React.Component{

	showCards=(data)=>{
		
	}
	render(){
		return(
			<div className="cholder">
			
			{
			Object.entries(this.props.data).map(el=>{
			{/* console.log(el); */}
			return <ContestBox key={el[1]['name']} data={el} />;
		})
			}
		
			</div>
		);
	}
}
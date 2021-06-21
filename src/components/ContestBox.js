import React from 'react'
export default class ContestBox extends React.Component{
	render(){
		var data = this.props.data[1]
		var status = (data['status']==="CODING") ?  "running": "not started"
		var start_time = new Date(data['start_time']);
		start_time = start_time.toString().slice(0,28)
		var end_time = new Date(data['end_time']);
		end_time = end_time.toString().slice(0,28)
		var duration = data['duration']/3600
		
		return(
			<div className="cards" >
				<a href={this.props.data[1]['url']} target="blank">
				<div>
				<p className="cname">


				{
					data['name']
				}
				</p>
				<p className="ctime">
				start-time:<span> {start_time}</span> 
				</p>
				<p className="ctime">
				end-time:<span>&nbsp; {end_time}</span> 
				</p>

				<p className="cstatus">
				status: <span> 
				 {status}
				</span>
				 &nbsp;&nbsp;| duration:<span> {duration.toFixed(2)} hours</span>
				</p>
				</div>
				</a>
			</div>
		);
	}
}
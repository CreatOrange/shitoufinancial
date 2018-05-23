import React, { Component } from 'react';
import './indexnav.css';
import axios from 'axios'
class Indexnav extends Component {
	constructor(){
		super()
		this.state = {
			list : []
		}
	}
  	render() {
	    return (
	     	<ul id="shi_nav">
	     		{
	     			this.state.list.map((item,index)=>{
	     				return (
	     					<li key={index}>
	     						<div>
	     							<img src={item.source} alt="" />
	     						</div>
	     						<p>
	     							<span>{item.title}</span><br />
	     							<span>{item.name}</span>
	     						</p>
	     					</li>
	     				)
	     				
	     			})
	     		}
				
			</ul>
	    );
  	}
  	componentDidMount(){
	  	axios.get('api-proxy/wxapi/v4/index/advert.do').then((res)=>{ 

	  		console.log(res.data.data.advert)
	  		var list = res.data.data.advert
	  		this.setState({
	  			list : list
	  		})
	  		
	  	})	
  	}
}

export default Indexnav;

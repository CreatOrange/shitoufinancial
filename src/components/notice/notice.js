import React, { Component } from 'react';
import './notice.css';
import axios from 'axios'
class Notice extends Component {
	constructor(){
		super()
		this.state = {
			items : {}
		}
	}
  	render() {
	    return (

	     	<div id="shi_notice">
				<div><a href="/public-notice-detail#?id=11242" className="title ng-binding">{this.state.items.title}</a></div>
				<div>更多></div>
			</div>
	    );
  	}
	componentDidMount(){
	  	axios.get('api-proxy/wxapi/v4/notice/list.do?page=1&rows=1').then((res)=>{ 

	  		
	  		
	  		console.log(res.data.data.items[0])
	  		this.setState({
	  			items : res.data.data.items[0]
	  		})
	  	})	
	  
	}
}

export default Notice;

import React, { Component } from 'react';
import './banner.css';
import axios from 'axios'
class Banner extends Component {
	constructor(){
		super()
		this.state = {
			pic : []
		}
	}
  	render() {
	    return (
	     	<div className="swiper-container" id="shi_banner">
			    <div className="swiper-wrapper">

			    	{
			    		this.state.pic.map((item)=>{
			    			return <div className="swiper-slide" key={item.id}><img src={item.source} alt="" /></div>
			    		})
			    	}
			    </div>
		    
		    	<div className="swiper-pagination"></div>
			</div>
	    );
  	}
  	componentDidMount(){
	  	axios.get('api-proxy/wxapi/v4/index/banner.do').then((res)=>{ 

	  		console.log(res)
	  		var pic = res.data.data.banner
	  		console.log(pic)
	  		this.setState({
	  			pic : pic
	  		},function(){
	  			var $shi_banner = window.$('.swiper-container')
	  			new window.Swiper($shi_banner, {
	  				autoplay: true,//可选选项，自动滑动
	  				pagination: {
	  				  el: '.swiper-pagination',
	  				},
	  			})
	  		})	
	  	})	
  		
  		// 	var status = res.data.status;
  		// 	if(status === 0){
  		// 		var billboards = res.data.data.billboards;
  		// 		this.setState({
  		// 			billboards : billboards
  		// 		},function(){
  		// 			var $mz_banner = window.$('#mz_banner');
  		// 			new window.Swiper($mz_banner,{
  		// 				loop : true
  		// 			});
  		// 		});
  		// 	}
  		// });
  	}
}

export default Banner;

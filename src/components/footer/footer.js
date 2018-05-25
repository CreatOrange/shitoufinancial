import React, { Component } from 'react';
import { NavLink ,Switch, Redirect,Route  } from 'react-router-dom'
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div id="footer">
          <NavLink to="/index" activeClassName="blue" >
		<div>
			<span className="iconfont icon-home icon" ></span>
			<br /><span>首页</span>
		</div>
          </NavLink>
          <NavLink to="/toubiao" activeClassName="blue">
			  <div>
				<span className="iconfont icon-icon-bid-online icon"></span>
				<br /><span>投标</span>
			</div>
          </NavLink>
          <NavLink to="/my" activeClassName="blue" >
		<div>
			<span className="iconfont icon-wode icon"></span>
			<br /><span>我的账户</span>
		</div>
          </NavLink>
          <NavLink to="/more" activeClassName="blue" >
		<div>
			<span className="iconfont icon-gengduo icon"></span>
			<br /><span>更多</span>
		</div>
          </NavLink>
		
	</div>
    );
  }
}

export default Footer;

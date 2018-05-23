import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
  render() {
    return (
      <div id="footer">
		<div>
			<span className="iconfont icon-home"></span>
			<br /><span>首页</span>
		</div>
		<div>
			<span className="iconfont icon-icon-bid-online"></span>
			<br /><span>投标</span>
		</div>
		<div>
			<span className="iconfont icon-wode"></span>
			<br /><span>我的账户</span>
		</div>
		<div>
			<span className="iconfont icon-gengduo"></span>
			<br /><span>更多</span>
		</div>
		
	</div>
    );
  }
}

export default Footer;

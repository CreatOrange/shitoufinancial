import React, { Component } from 'react';
import './novice.css';

class Novice extends Component {
  render() {
    return (
     	<div id="shi_novice">
			<div className="novice_nav">
				<div><span></span>新手专区</div>
				<div>专区详情 ></div>
			</div>
			<div className="novice_banner">
				<img src="./imgs/7.png" alt="" />
			</div>

			<div className="novice_detail">
				<div>
					新手标一个月<br />先息后本
				</div>
				<div>
					7.0%+3.0%<br />约定年化利率
				</div>
				<div>
					<div>立即投标</div>
				</div>
			</div>
		</div>
    );
  }
}

export default Novice;

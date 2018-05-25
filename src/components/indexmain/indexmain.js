import React, { Component } from 'react';
import './indexmain.css';
import Banner from '../banner/banner.js'
import Notice from '../notice/notice.js'
import Indexnav from '../indexnav/indexnav.js'
import Novice from '../novice/novice.js'
import QUickentry from '../quickentry/quickentry.js'

class Indexmain extends Component {
  render() {
    return (
     	<div id="main">
			<Banner></Banner>
			<Notice></Notice>
			<Indexnav></Indexnav>
			<Novice></Novice>
         	 <QUickentry></QUickentry>


		</div>
    );
  }
}

export default Indexmain;

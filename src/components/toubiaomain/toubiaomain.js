import React, { Component } from 'react';
import './toubiaomain.css';
import Toubiaonav from '../toubiaonav/toubiaonav.js'
import Toubiaonovice from '../toubiaonovice/toubiaonovice.js'
import Toubiaoquick from '../toubiaoquick/toubiaoquick.js'


class Toubiaomain extends Component{

    render(){
        return(

            <div id="main" >
                 <Toubiaonav />
                <Toubiaonovice />
                <Toubiaoquick />


            </div>






        )






    }
}





export default  Toubiaomain;
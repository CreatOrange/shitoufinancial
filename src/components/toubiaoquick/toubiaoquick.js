import React, { Component } from 'react';
import './toubiaoquick.css';
import axios from 'axios';


class Toubiaoquick extends Component{
    constructor(){

        super();
        this.state = {
            quick: []
        }

    }

    render(){
        return(

            <div id="tender_quick">
                <div><span>快速投标</span>30天可债转</div>

                {

                    this.state.quick.map((item,index)=>{

                        return (


                            <div className="quick_detail" key={index}>
                                <div>{item.title}</div>
                                <div>
                                    <div><span>{item.aprFormat}</span><br />约定化年利率</div>
                                    <div><span>{item.term}</span>个月<br />先息后本</div>
                                    <div><span> </span>{item.remainAmountFormat}<br />剩余可投</div>
                                </div>
                            </div>





                        )






                    })







                }


                <div className="quick_detail">
                    <div>一个月 先息后本项目精选</div>
                    <div>
                        <div><span>8.0</span>%+3.8%<br />约定化年利率</div>
                        <div><span>3</span>个月<br />先息后本</div>
                        <div><span> </span>6.20万元<br />可投金额</div>
                    </div>
                </div>
                <div className="quick_detail">
                    <div>新手专享标-4654654-5646</div>
                    <div>
                        <div><span>8.0</span>%+3.8%<br />约定化年利率</div>
                        <div><span>3</span>个月<br />先息后本</div>
                        <div><span> </span>6.20万元<br />可投金额</div>
                    </div>
                </div>
                <div className="quick_detail">
                    <div>新手专享标-4654654-5646</div>
                    <div>
                        <div><span>8.0</span>%+3.8%<br />约定化年利率</div>
                        <div><span>3</span>个月<br />先息后本</div>
                        <div><span> </span>6.20万元<br />可投金额</div>
                    </div>
                </div>
            </div>


        )



    }
    componentDidMount(){
        axios.get('api-proxy/wxapi/v4/loan/hotOneKeyBuyList.do?page=1&rows=10').then((res)=>{

            console.log(res)
            console.log(res.data.data.pageOneKeyBuyProductList.items)

            var quick = res.data.data.pageOneKeyBuyProductList.items
            this.setState({
                quick : quick
            })

        })
    }
}





export default  Toubiaoquick;
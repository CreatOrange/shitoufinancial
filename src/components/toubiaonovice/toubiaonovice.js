import React, { Component } from 'react';
import axios from 'axios';
import './toubiaonovice.css';


class Toubiaonovice extends Component{
    constructor(){

        super();
        this.state = {
            novice: []
        }

    }

    render(){
        return(

            <div id="tender_novice">
                <div><span>新手专区</span>100元起投</div>

                {
                    this.state.novice.map((item, index) => {

                    return (

                        <div className="novice_detail" key={item.tenderId}>
                            <div>{item.title}</div>
                            <div>
                                <div><span>{item.apr}</span>%{item.activitydescription2}<br />约定化年利率</div>
                                <div><span>{item.term}</span>个月<br />先息后本</div>
                                <div><span> </span>{item.remainAmountFormat}<br />可投金额</div>
                            </div>
                            <div><div><div><div></div></div></div><div>{item.percent}%</div></div>
                        </div>


                    )


                })

                }



               {/* <div className="novice_detail">
                    <div>新手专享标-4654654-5646</div>
                    <div>
                        <div><span>8.0</span>%+3.8%<br />约定化年利率</div>
                        <div><span>3</span>个月<br />先息后本</div>
                        <div><span> </span>6.20万元<br />可投金额</div>
                    </div>
                    <div><div><div><div></div></div></div><div>29%</div></div>
                </div>*/}



            </div>



        )


    }
    componentDidMount(){
        axios.get('api-proxy/wxapi/v4/loan/hotOneKeyBuyList.do?page=1&rows=10').then((res)=>{


            console.log(res.data.data.newsLoanList.items)

            var novice = res.data.data.newsLoanList.items
            this.setState({
                novice : novice
            })

        })
    }
}





export default  Toubiaonovice;
import React, { Component } from 'react';
import search_icon from "../../assets/img/home/search-icon.png"
import item_icon from "../../assets/img/home/flypig-ticketicon.png"
import "./search.styl"

class Search extends Component {
    state = {
        sf_info: {
            tickets: [
                {
                    src:"",
                    text: "火车票",
                    bgcolor: "rgb(247, 247, 247)"
                },
                {
                    src:"",
                    text: "机票",
                    bgcolor: "rgb(247, 247, 247)"
                },
                {
                    src:"",
                    text: "汽车票",
                    bgcolor: "rgb(247, 247, 247)"
                }],
            hotels: [
                {
                    src:"",
                    text: "酒店",
                    bgcolor: "rgb(247, 247, 247)"
                }
            ],
            travelitems: [
                {
                    src:"",
                    text: "马来西亚签证",
                    bgcolor: "rgb(247, 247, 247)"
                },
                {
                    src:"",
                    text: "云南旅游",
                    bgcolor: "rgb(255, 247, 212)"
                },
                {
                    src:"",
                    text: "北京故宫博物院门票",
                    bgcolor: "rgb(247, 247, 247)"
                },
                {
                    src:"",
                    text: "广州长隆水上乐园门票",
                    bgcolor: "rgb(255, 247, 212)"
                }
            ]
        }
    }
    onSubmit = () => {
        console.log(this.refs.input.value)
    }
    render() {
        const { sf_info } = this.state
        return (
            <div>
                <div className="search-head">
                    <div className="search-box">
                        <img src={search_icon} alt="" className="icon" />
                        <input type="text" className="input" placeholder={"上海迪士尼乐园门票"} ref="input" />
                    </div>
                    <div className="btn-box">
                        <div className="btn" onClick={this.onSubmit}>搜索</div>
                    </div>
                </div>
                <div className="searchfind">
                    <div className="title-box">
                        <div className="title">
                            <span className="text">搜索·发现</span>
                        </div>
                    </div>

                    <div className="searchline ticket">
                        <div className="icon">
                            <img src={item_icon} alt="" />
                        </div>
                        <div className="connect">
                            {
                                sf_info.tickets.map((ticket, index) => {
                                    return (
                                        <div className="itembox" style={{ background: ticket.bgcolor }} key={index}>
                                            <div className="text">
                                                {ticket.text}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="searchline hotel">
                        <div className="icon">
                            <img src={item_icon} alt="" />
                        </div>
                        <div className="connect">
                            {
                                sf_info.hotels.map((hotel, index) => {
                                    return (
                                        <div className="itembox" style={{ background: hotel.bgcolor }}>
                                            <div className="text">
                                                {hotel.text}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="searchline travel">
                        <div className="icon">
                            <img src={item_icon} alt="" />
                        </div>
                        <div className="connect">
                            {
                                sf_info.travelitems.map((travelitem, index) => {
                                    return (
                                        <div className="itembox" style={{ background: travelitem.bgcolor }}>
                                            <div className="text">
                                                {travelitem.text}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
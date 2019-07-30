import React, { Component } from 'react';
import { Icon } from 'antd-mobile';
import {choose,change_icon} from "../img"
import "./toandback.styl"

class ToAndBack extends Component {
    render() {
        const { trip, setformate, getWeek, exChange, active = 1, changeDate,
            changeNextDate, child, baby, chooseinner } = this.props
        return (
            <div>
                <div className="ticketbox">
                    <div className="addressline">
                        <div className="comeaddress">
                            <div className="text">{trip.come ? trip.come : (<span style={{ color: "#ccc" }}>出发</span>)}</div>
                        </div>
                        <div className="changeimg">
                            <img onClick={exChange} src={change_icon} alt="" className="pic" />
                        </div>
                        <div className="toaddress">
                            <div className="text">{trip.to ? trip.to : (<span style={{ color: "#ccc" }}>到达</span>)}</div>
                        </div>
                    </div>
                    <div className="dateline">
                        <div className="line" onClick={active === "1" ? changeDate : null} >
                            <div className="goto" onClick={active === "2" ? changeDate : null} >
                                <div className="date">{setformate(trip.date)}</div>
                                <div className="week">{getWeek(trip.date)}</div>
                            </div>
                            <div className="comeback">
                                {
                                    active === "1" ? (<Icon type="right" size="sm" 
                                    style={{ position: "absolute", right: 0, top: "35%", display: "inline-block" }} />)
                                        : (<div onClick={changeNextDate} className="infobox">
                                            <div className="date">{setformate(trip.nextdate)}</div>
                                            <div className="week">{getWeek(trip.nextdate)}</div>
                                        </div>)
                                }
                            </div>
                        </div>
                    </div>
                    <div className="bringchild">
                        <div className="child item">
                            <div className="check-inner">
                                <div className="choosebox" onClick={chooseinner} data-state="child">
                                {child ? (<img src={choose} className="img" data-state="child" alt=""/>)  : ""}
                                </div>
                                <div className="text">携带儿童</div>
                                <div className="prompt">2-12岁</div>
                            </div>
                        </div>
                        <div className="space"></div>
                        <div className="baby item">
                            <div className="check-inner">
                                <div className="choosebox" onClick={chooseinner} data-state="baby">{baby ? (<img src={choose} className="img" data-state="baby" alt=""/>)  : ""}</div>
                                <div className="text">携带婴儿</div>
                                <div className="prompt">14天-2岁</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ToAndBack;
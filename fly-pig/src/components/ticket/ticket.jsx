import React, { Component } from 'react';
// import {
//     BrowserRouter as Router, Route, Switch,
//     Redirect, NavLink
// } from 'react-router-dom';
import { Calendar, Modal, Carousel, Icon } from 'antd-mobile';

import "./ticket.styl"


import Anyway from "./ticket_more/anyway"
import ToAndBack from './ticket_two/toandback';


import discount_icon from "../../assets/img/ticket/flypig-discount.png"
import logo from "../../assets/img/ticket/flypig-ticketlogo.png"

const extra = {
    '2019/07/15': { info: 'Disable', disable: true },
};

const now = new Date();
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 8)] = { info: 'Disable', disable: true };


const discounts = [
    {
        come: "北京",
        to: "深圳",
        like: "单程",
        price: 720
    },
    {
        come: "香港",
        to: "北京",
        like: "往返直飞",
        price: 1268
    },
    {
        come: "北京",
        to: "长沙",
        like: "单程",
        price: 570
    }
]


Object.keys(extra).forEach((key) => {
    const info = extra[key];
    const date = new Date(key);
    if (!Number.isNaN(+date) && !extra[+date]) {
        extra[+date] = info;
    }
});


class Ticket extends Component {
    clickactive = (event) => {
        this.setState({
            active: event.target.getAttribute("data-index")
        })
    }
    getNotice = () => { }
    state = {
        active: "1",
        notice: "800元机票券限时兑，查看更多出游福利",
        trips: [
            {
                come: "哈尔滨",
                to: "杭州",
                tank: "",
                date: now,
                nextdate: now,
            },
            {
                come: "杭州",
                to: "",
                tank: "",
                date: now,
                nextdate: "",
            },
        ],
        tripstank: "不限舱位",
        tripslike: {
            adult: 1,
            children: 0,
            baby: 0
        },
        show: false,
        changeindex: 0,
        changeattr: "date",
        child: false,
        baby: false,
        modal: false
    }
    // 日期格式化
    setformate(date) {
        // ${this.setformate(trips[0].date.getMonth()+1)}月${this.setformate(trips[0].date.getDate())}日
        if (!(date instanceof Date)) return "";
        let month = (date.getMonth() + 1).toString();
        if (month.length < 2)
            month = 0 + month
        let day = date.getDate().toString();
        if (day.length < 2)
            day = 0 + day
        return `${month}月${day}日`
    }
    // 交换目的地和
    exChange = (event) => {
        console.log(event.target.getAttribute("data-index") || 0)
        let index = event.target.getAttribute("data-index") || 0;
        let trips = this.state.trips.slice(0)
        // console.log(trips)
        // [trips[index].come,trips[index].to] = [trips[index].to,trips[index].come]
        let temp = trips[index].come
        trips[index].come = trips[index].to
        trips[index].to = temp
        this.setState({
            trips
        })
    }
    // 显示星期
    getWeek = (date) => {
        if (!date instanceof Date) return "";
        let weekcheck = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
        let date_tody = new Date(`${date.getYear() + 1900}/${date.getMonth() + 1}/${date.getDate() + 1}`)
        let diffday = Math.floor((date_tody - now) / (3600 * 1000 * 24))
        if (diffday < 1) return "今天"
        else if (diffday < 2) return "明天";
        else if (diffday < 3) return "后天";
        else return weekcheck[date.getDay() - 1]
    }
    // 显示日历
    changeDate = () => {
        this.setState({
            changeindex: 0,
            changeattr: "date",
            show: true
        })
    }
    // 改变返程日期
    changeNextDate = () => {
        this.setState({
            changeindex: 0,
            changeattr: "nextdate",
            show: true
        })
    }
    // 改变多票的日期
    changemoreDate = (event) => {
        let index = event.target.getAttribute("data-index")
        console.log(index)
        let show = index !== "-1" ? true : false
        this.setState({
            changeindex: index,
            changeattr: "date",
            show
        })
    }
    // 关闭日历
    onCancel = () => {
        this.setState({
            show: false
        })
    }
    // 确认日期
    onConfirm = (event) => {
        let trips = this.state.trips.slice(0)
        let { changeindex, changeattr } = this.state
        trips[changeindex || 0][changeattr] = event
        this.setState({
            show: false,
            trips
        })
        console.log(event)
    }
    onSubmit = () => {
        const { Push_Ticket } = this.props
        console.log(Push_Ticket)
        const { trips, active } = this.state
        let alertInstance
        switch (active) {
            case "1": Push_Ticket([trips[0]]); break;
            case "2": Push_Ticket([trips[0]]); break;
            case "3": Push_Ticket([...trips]); break;
            default: return alertInstance = Modal.alert("系统信息出错", "数据出错", [{ text: "确认", style: { color: "#f40", }, onPress: () => { alertInstance.close() } }])
        }
        // this.props.history.push(`${this.props.history.location.pathname}/ticket_info`)
        // this.props.history.push(`/ticket_info`)
    }
    // 选择是否携带儿童或婴儿
    chooseinner = (event) => {
        this.setState({
            [event.target.getAttribute("data-state")]: !this.state[event.target.getAttribute("data-state")]
        })
    }
    // 关闭日历
    onClose = () => {
        this.setState({
            modal: false
        })
    }
    // 显示日历
    onShow = () => {
        this.setState({
            modal: true
        })
    }
    // 删除日程
    deletetrip = () => {
        let trips = this.state.trips.slice(0)
        trips.splice(2, 1)
        this.setState({
            trips
        })
    }
    // 添加日程
    addtrip = () => {
        let trips = this.state.trips.slice(0)
        trips.push({
            come: trips[1].to,
            to: "",
            tank: "",
            date: now,
            nextdate: "",
        })
        this.setState({
            trips
        })
    }
    // 设置机票仓位
    settank = (value) => {
        console.log(value)
        this.setState({
            tripstank: value[0]
        })
    }
    // 设置机票成员
    setmembers = (value) => {
        console.log(value)
        this.setState({
            tripslike: {
                adult: value[0],
                children: value[1],
                baby: value[2]
            }
        })
    }
    render() {
        const { active, notice, trips, child, baby } = this.state
        return (
            <div className="maxbox">
                <div className="tickettab">
                    <ul className="tabbox" >
                        <li className={active === "1" ? "active tab flex_1 goto" : "tab flex_1 goto"}
                            onClick={this.clickactive} data-index="1">单程</li>
                        <li className={active === "2" ? "active tab flex_1 toandback" : "tab flex_1 toandback"}
                            onClick={this.clickactive} data-index="2">往返</li>
                        <li className={active === "3" ? "active tab flex_1 anyway" : "tab flex_1 anyway"}
                            onClick={this.clickactive} data-index="3">多程</li>
                    </ul>
                </div>
                <div className="showticket">
                    <div className="noticebar">
                        <div className="text">{notice}</div>
                        <div className="more" onClick={this.getNotice}>详情</div>
                    </div>
                    {
                        active !== "3" ? (
                            <ToAndBack trip={trips[0]}
                                setformate={this.setformate}
                                exChange={this.exChange}
                                getWeek={this.getWeek}
                                active={active}
                                changeDate={this.changeDate}
                                changeNextDate={this.changeNextDate}
                                child={this.state.child}
                                baby={this.state.baby}
                                chooseinner={this.chooseinner}
                            />
                        ) : (
                                <Anyway trips={trips}
                                    showCalendar={this.showCalendar}
                                    setformate={this.setformate}
                                    exChange={this.exChange}
                                    getWeek={this.getWeek}
                                    changemoreDate={this.changemoreDate}
                                    deletetrip={this.deletetrip}
                                    addtrip={this.addtrip}
                                    tripstank={this.state.tripstank}
                                    tripslike={this.state.tripslike}
                                    settank={this.settank}
                                    setmembers={this.setmembers}
                                />
                            )
                    }
                    <div className="instructions">
                        {
                            child || baby || active === "3" ?
                                <span className="instruct_text" onClick={this.onShow}>儿童婴儿预定说明</span> : ""
                        }
                    </div>
                    <div className="buttonbox">
                        <div className="button">
                            <button className="submit" onClick={this.onSubmit}>搜索</button>
                        </div>
                    </div>
                    <div className="infotextbox">
                        <div className="left">
                            <div className="text">{`${trips[0].come}-${trips[0].to} 
                            ${this.setformate(trips[0].date)}-${this.setformate(trips[0].nextdate)}`}</div>
                        </div>
                        <div className="right">
                            <div className="text">{`${trips[0].to}-${trips[0].come} 
                            ${this.setformate(trips[0].nextdate)}`}</div>
                        </div>
                    </div>
                    <div className="discountbox">
                        <div className="discount">
                            <div className="lefttitle">
                                <span className="title"
                                    style={{ background: `url(${discount_icon}) 0 no-repeat/16px 18px` }}>特价机票</span>
                            </div>
                            <div className="rightconnect">
                                <Carousel className="my-carousel"
                                    vertical
                                    dots={false}
                                    dragging={false}
                                    swiping={false}
                                    autoplay
                                    infinite
                                >
                                    {
                                        discounts.map((item, index) => {
                                            return (
                                                <div className="v-item" key={index}>
                                                    <span className="city">{item.come}-{item.to}</span>
                                                    <span className="like">{item.like}</span>
                                                    <span className="price">￥{item.price}</span><span>起</span>
                                                    <div className="iconbox">
                                                        <Icon type="right" size="sm"
                                                            style={{ display: "inline-block", position: "absolute", right: 0, top: "35%" }} />
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                    {/* <div className="v-item">carousel 1</div>
                                    <div className="v-item">carousel 2</div>
                                    <div className="v-item">carousel 3</div> */}
                                </Carousel></div>
                        </div>
                    </div>
                    <div className="logobox">
                        <img src={logo} alt="" className="logo" />
                    </div>
                </div>
                <Calendar
                    type='one'
                    enterDirection="horizontal"
                    visible={this.state.show}
                    onCancel={this.onCancel}
                    onConfirm={this.onConfirm}
                    onSelectHasDisableDate={this.onSelectHasDisableDate}
                    getDateExtra={this.getDateExtra}
                    defaultDate={now}
                    minDate={new Date(+now)}
                    maxDate={new Date(+now + 31536000000)}
                />
                <Modal
                    visible={this.state.modal}
                    className="modal"
                    transparent
                    renderHeader="选择日期"
                    maskClosable="true"
                    onClose={this.onClose}
                    wrapProps={{ onTouchStart: this.onWrapTouchStart }}
                >
                    <div className="instruct_info_box" style={{ height: 360, overflow: 'scroll' }}>
                        <div className="tickettitle">
                            <div className="text">儿童票婴儿票预订说明</div>
                        </div>
                        <div className="babyticket">
                            <div className="babytitle">婴儿票(14天-2岁)</div>
                            <div className="attention atten_1">1. 使用婴儿票的乘客：登机当天应满14天但未满2周岁。</div>
                            <div className="attention atten_2">2. 婴儿购票可用证件包括身份证、护照、户口薄、出生证明等。</div>
                            <div className="attention atten_3">3. 婴儿票价格按照成人标准价（全价）的10%，不收机建及燃油费，无座位。</div>
                        </div>
                        <div className="childticket">
                            <div className="childtitle">儿童票(2岁-12岁)</div>
                            <div className="attention atten_1">1. 使用儿童票的乘客：登机当天应满2周岁但未满12周岁。</div>
                            <div className="attention atten_2">2. 儿童可凭户口本登机，订票时应准确填写户口本上登记的身份证号。</div>
                            <div className="attention atten_3">3. 目前暂不支持儿童单独订票，无人陪伴儿童请与航空公司联系购票。</div>
                            <div className="attention atten_4">4. 儿童购买成人票，登机时可能存在风险，请先和代理商咨询确认。</div>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Ticket;
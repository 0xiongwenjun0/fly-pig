import React, { Component } from 'react';
import Scroll from "../../common/scroll/scroll"
import { Calendar } from "antd-mobile"
import "./ticket_info.styl"

const extra = {
    '2019/07/15': { info: 'Disable', disable: true },
};
let weekcheck = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
const now = new Date();
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7)] = { info: 'Disable', disable: true };
extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 8)] = { info: 'Disable', disable: true };

class Ticket_Info extends Component {
    state = {
        date: new Date(),
        show: false,
        lastminprice: null,
        todayminprice: null,
        nextminprice: null
    }
    componentDidMount() {
        console.log(this.props.ticket)
    }
    // 格式化日期
    dataformate(date) {
        if (!date instanceof Date)
            return "时间显示错误"
        let week = this.getWeek(date)
        let month = (date.getMonth() + 1).toString()
        let year = date.getYear() + 1900
        let day =date.getDate().toString()
        if(month.length<2)month = "0" + month
        if(day.length<2)day = "0" + day
        return `${year}-${month}-${day}  ${week}`
    }

    // 获取星期
    getWeek(date) {
        if (!date instanceof Date)
            return ""
        return weekcheck[date.getDay() - 1]
    }

    // 显示日历
    changeDate = () => {
        this.setState({
            changeindex: 0,
            changeattr: "date",
            show: true
        })
    }

    render() {
        let { date,
            lastminprice,
            todayminprice,
            nextminprice, } = this.state
        return (
            <div className="maxbox">
                <div className="head-box">
                    <div className="head">
                        <div className="lastDay-box">
                            <div className="lastDay">
                                <div className="text">
                                    前一天
                            </div>
                                <div className="minprice">￥{lastminprice ? lastminprice : "-"}</div>
                            </div>
                        </div>
                        <div className="today-box">
                            <div className="today">
                                <div className="left_info">
                                    <div className="date">{this.dataformate(date)}</div>
                                    <div className="minprice">￥{todayminprice ? todayminprice : "-"}</div>
                                </div>
                                <div className="right_icon">
                                    <img src="" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="nextDay-box">
                            <div className="nextDay">
                                <div className="text">
                                    后一天
                            </div>
                                <div className="minprice">￥{nextminprice ? nextminprice : "-"}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <Scroll>
                    <div></div>
                </Scroll>
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
            </div>
        );
    }
}

export default Ticket_Info;
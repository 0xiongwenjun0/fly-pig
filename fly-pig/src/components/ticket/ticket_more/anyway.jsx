import React, { Component } from 'react';
import { Icon, Picker } from 'antd-mobile';
import { change_icon } from "../img"
import "./anyway.styl"


const level = [
    {
        label: "不限舱位",
        value: "不限舱位"
    },
    {
        label: "经济舱",
        value: "经济舱"
    },
    {
        label: "超级经济舱",
        value: "超级经济舱"
    },
    {
        label: "公务/头等舱",
        value: "公务/头等舱"
    },
]

const members = [
    {
        label: 1,
        value: 1,
        children: [{
            label: 0,
            value: 0,
            children: [
                {
                    label: 0,
                    value: 0,
                },
                {
                    label: 1,
                    value: 1,
                }
            ]
        },
        {
            label: 1,
            value: 1,
            children: [
                {
                    label: 0,
                    value: 0,
                },
                {
                    label: 1,
                    value: 1,
                }
            ]
        },
        {
            label: 2,
            value: 2,
            children: [
                {
                    label: 0,
                    value: 0,
                },
                {
                    label: 1,
                    value: 1,
                }
            ]
        }]
    },
    {
        label: 2,
        value: 2,
        children: [{
            label: 0,
            value: 0,
            children: [
                {
                    label: 0,
                    value: 0,
                },
                {
                    label: 1,
                    value: 1,
                }
            ]
        },
        {
            label: 1,
            value: 1,
            children: [
                {
                    label: 0,
                    value: 0,
                },
                {
                    label: 1,
                    value: 1,
                },
                {
                    label: 2,
                    value: 2,
                }
            ]
        },
        {
            label: 2,
            value: 2,
            children: [
                {
                    label: 0,
                    value: 0,
                },
                {
                    label: 1,
                    value: 1,
                },
                {
                    label: 2,
                    value: 2,
                }
            ]
        },
        {
            label: 3,
            value: 3,
            children: [
                {
                    label: 0,
                    value: 0,
                },
                {
                    label: 1,
                    value: 1,
                },
                {
                    label: 2,
                    value: 2,
                }
            ]
        }]
    },
    {
        label: 3,
        value: 3,
        children: [{
            label: 0,
            value: 0,
            children: [
                {
                    label: 0,
                    value: 0,
                },
                {
                    label: 1,
                    value: 1,
                },
                {
                    label: 2,
                    value: 2,
                },
                {
                    label: 4,
                    value: 4,
                }
            ]
        },
        {
            label: 1,
            value: 1,
            children: [
                {
                    label: 0,
                    value: 0,
                },
                {
                    label: 1,
                    value: 1,
                },
                {
                    label: 2,
                    value: 2,
                },
                {
                    label: 4,
                    value: 4,
                }
            ]
        },
        {
            label: 2,
            value: 2,
            children: [
                {
                    label: 0,
                    value: 0,
                },
                {
                    label: 1,
                    value: 1,
                },
                {
                    label: 2,
                    value: 2,
                },
                {
                    label: 4,
                    value: 4,
                }
            ]
        },
        {
            label: 3,
            value: 3,
            children: [
                {
                    label: 0,
                    value: 0,
                },
                {
                    label: 1,
                    value: 1,
                },
                {
                    label: 2,
                    value: 2,
                },
                {
                    label: 4,
                    value: 4,
                }
            ]
        }]
    },
    {
        label: 4,
        value: 4,
        children: [{
            label: 0,
            value: 0,
            children: [
                {
                    label: 0,
                    value: 0,
                },
                {
                    label: 1,
                    value: 1,
                },
                {
                    label: 2,
                    value: 2,
                },
                {
                    label: 3,
                    value: 3,
                }
            ]
        },
        {
            label: 1,
            value: 1,
            children: [
                {
                    label: 0,
                    value: 0,
                },
                {
                    label: 1,
                    value: 1,
                },
                {
                    label: 2,
                    value: 2,
                },
                {
                    label: 3,
                    value: 3,
                }
            ]
        },
        {
            label: 2,
            value: 2,
            children: [
                {
                    label: 0,
                    value: 0,
                },
                {
                    label: 1,
                    value: 1,
                },
                {
                    label: 2,
                    value: 2,
                },
                {
                    label: 3,
                    value: 3,
                }
            ]
        },
        {
            label: 4,
            value: 4,
            children: [
                {
                    label: 0,
                    value: 0,
                },
                {
                    label: 1,
                    value: 1,
                },
                {
                    label: 2,
                    value: 2,
                },
                {
                    label: 3,
                    value: 3,
                }
            ]
        },
        {
            label: 5,
            value: 5,
            children: [
                {
                    label: 0,
                    value: 0,
                },
                {
                    label: 1,
                    value: 1,
                },
                {
                    label: 2,
                    value: 2,
                },
                {
                    label: 3,
                    value: 3,
                }
            ]
        }]
    }
]


class Anyway extends Component {
    state = {
        show: false
    }
    prompt = (event) => {
        console.log(event.target.getAttribute("data-show"))
        let show = event.target.getAttribute("data-show")
        this.setState({
            show: show === "true" && this.state.show === false ? true : false
        })
    }
    render() {
        const { trips, tripstank, tripslike, //数据
            setformate, getWeek, exChange, changemoreDate, deletetrip, addtrip, settank, setmembers //方法
        } = this.props
        return (
            <div className="ticketbox" onClick={this.prompt}>
                {
                    // 循环出飞机票
                    trips.map((trip, index) => {
                        return (
                            <div className="tripbox" key={index}>
                                <div className="index"><span>{index + 1}</span></div>
                                <div className="trip">
                                    <div className="addressline">
                                        <div className="comeaddress">
                                            <div className="text">
                                                {trip.come ? trip.come : (<span style={{ color: "#ccc" }}>出发</span>)}
                                            </div>
                                        </div>
                                        <div className="changeimg">
                                            <img data-index={index} onClick={exChange} src={change_icon} alt="" className="pic" />
                                        </div>
                                        <div className="toaddress">
                                            <div className="text">
                                                {trip.to ? trip.to : (<span style={{ color: "#ccc" }}>到达</span>)}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dateline">
                                        <div className="line" onClick={changemoreDate} data-index={`${index}`} data-attr="date" data-index={index}>
                                            <div className="date" data-index={index}>{setformate(trip.date)}</div>
                                            <div className="week" data-index={index}>{getWeek(trip.date)}</div>
                                            {
                                                index === 2 ?
                                                    (<Icon type="cross-circle" onClick={deletetrip} size="sm"
                                                        style={{
                                                            position: "absolute", right: 0, top: "35%",
                                                            display: "inline-block"
                                                        }}
                                                        data-index="-1" />)
                                                    : (
                                                        <Icon type="right" size="sm"
                                                            style={{
                                                                position: "absolute", right: 0, top: "35%",
                                                                display: "inline-block"
                                                            }} data-index={index} />
                                                    )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                {
                    trips.length < 3 ?
                        (
                            <div className="addtrip-box">
                                <div className="addbtn" onClick={addtrip}>
                                    <span className="add">再加一程</span>
                                </div>
                                <div className="space"></div>
                                <div className="promptbox">
                                    <span className="prompt" data-show="true">请至少选择一个国际城市/港澳台</span>
                                    <div className="promptconnect" >
                                        <ul style={{ display: this.state.show ? "block" : "none" }}>
                                            <li>举个例子：</li>
                                            <li>去程：北京-曼谷</li>
                                            <li>返程：普吉岛-北京</li>
                                            <li>用国际城市/港澳台多程搜索更便宜！</li>
                                            <li>还可以搜索多段旅程：</li>
                                            <li>北京-曼谷</li>
                                            <li>曼谷-普吉岛</li>
                                            <li>普吉岛-北京</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ) : ""
                }
                <div className="memberchoose">
                    <div className="memberbox">
                        <Picker data={level} cols={1} onChange={settank} className="forss">
                            <div className="selecttank"><span className="text">{tripstank}</span></div>
                        </Picker>
                        <div className="space"></div>
                        <Picker data={members} cols={3} onChange={setmembers} className="forss">
                            <div className="selecttype">
                                <span className="number">{tripslike.adult}</span>
                                <span className="">成人</span>
                                <span className="number">{tripslike.children}</span>
                                <span className="">儿童</span>
                                <span className="number">{tripslike.baby}</span>
                                <span className="">婴儿</span>
                            </div>
                        </Picker>
                    </div>
                </div>
            </div>
        );
    }
}

export default Anyway;
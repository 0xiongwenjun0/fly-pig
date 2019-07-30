import React, { Component } from 'react';
import LazyLoad from "react-lazyload"
import {
    live_icon,
    travel_live,
    travel_theme,
    newfind,
    planeicon,
    rightb,
    rightt,
    supersell,
    left_img,
    redpack,
    coupons,
    box,
    flypig,
    logo,
    search_icon,
    swiper_1,
    swiper_2,
    swiper_3,
    fly_pig_boat,
    fly_pig_hotel,
    fly_pig_bus,
    fly_pig_train,
    fly_pig_ticket,
    welfare,
    sign,
} from "./pic"

import rightto from "../../assets/img/home/rightto.png"
import chengdu from "../../assets/img/home/flypig-address.jpg"
import usericon from "../../assets/img/home/user-icon.png"
import itempic from "../../assets/img/home/flypig-item.jpg"



import { CSSTransition } from 'react-transition-group';
import { Carousel } from "antd"
import {
    NavLink
} from 'react-router-dom';
import Itemlist from "../../common/itemlist/itemlist"
import Scroll from "../../common/scroll/scroll"
import { Popover } from "antd-mobile"
// import Search from "../search/search"
import "./home.css"

const Item = Popover.Item;

const Item_src = ["", "", "", "", "", "", ""]

class Home extends Component {
    state = {
        updownloadapp: "https://h5.m.taobao.com/trip/router/alitrip.html?page=https%3A%2F%2Fh5.m.taobao.com%2Ftrip%2Fhome%2Findex.html&evokeType=1&apk=https%3A%2F%2Fdownload.alicdn.com%2Fnbdev-client%2Fclient4trip%2Fchannel%2Ftrip_10005683%40travel_android.apk&onlydown=true&spm=181.7474825.rights.d1&scm=",
        picUrl: [
            swiper_1,
            swiper_2,
            swiper_3
        ],
        channelarr: [
            {
                src: "/ticket",
                img: fly_pig_boat,
                text: "机票"
            },
            {
                src: "",
                img: fly_pig_hotel,
                text: "酒店"
            },
            {
                src: "",
                img: fly_pig_train,
                text: "火车票"
            },
            {
                src: "",
                img: fly_pig_bus,
                text: "汽车票"
            },
            {
                src: "",
                img: fly_pig_ticket,
                text: "门票"
            }
        ],
        all_func: [
            {
                src: "",
                maintext: "出境游",
                connect: "走遍全球"
            },
            {
                src: "",
                maintext: "境内游",
                connect: "精选路线"
            },
            {
                src: "",
                maintext: "周边游",
                connect: "乐享周末"
            },
            {
                src: "",
                maintext: "飞猪购",
                connect: "免税预购"
            },
            {
                src: "",
                maintext: "签证/签注",
                connect: "在线办理"
            },
            {
                src: "",
                maintext: "境外上网",
                connect: "信用免押"
            },
            {
                src: "",
                maintext: "用车",
                connect: "接送9折"
            },
            {
                src: "",
                maintext: "全部",
                connect: "更多推荐"
            }
        ],
        welfarearr: [
            {
                title: "手机流量",
                text_1: "500M流量",
                text_2: "APP新用户立刻领",
                img: redpack,
                src: ""
            },
            {
                title: "新人专享",
                text_1: "100元起",
                text_2: "旅行红包天天领",
                img: coupons,
                src: ""
            },
            {
                title: "福利中心",
                text_1: "游玩出行",
                text_2: "好卷优惠天天送",
                img: box,
                src: ""
            }
        ],
        travel_left: {
            img: "http://localhost:8080/img/home/travel_left_img.jpg",
            icon: newfind,
            connect: "懒猫旅行 清迈丛林飞跃一日游 飞跃天际\nskyline   泰国清迈清莱旅游",
            likes: 10100
        },
        travel_right: {
            top: {
                img: rightt,
                icon_1: supersell,
                from: "上海",
                icon_2: planeicon,
                to: "北京",
                text: "单程",
                minprice: 449,
                discount: 3.0
            },
            bottom: {
                img: rightb,
                address: "北京福地凤凰酒店",
                minprice: 701,
                introduce: "精选"
            }
        },
        destinations: [
            {
                src: "",
                img: chengdu,
                address: "成都"
            },
            {
                src: "",
                img: chengdu,
                address: "香港"
            },
            {
                src: "",
                img: chengdu,
                address: "曼谷"
            },
            {
                src: "",
                img: chengdu,
                address: "惠州"
            },
            {
                src: "",
                img: chengdu,
                address: "丽江"
            }
        ],
        itemlist: [
            {
                img: itempic,
                address: "秦皇岛.自由行",
                introduce: "北京/天津-北戴河双动3天2晚自由行 游玩攻略24小时免费在线咨询",
                price: 429,
                buy: 204
            },
            {
                img: itempic,
                address: "秦皇岛.自由行",
                introduce: "北京/天津-北戴河双动3天2晚自由行 游玩攻略24小时免费在线咨询",
                price: 429,
                buy: 204
            },
            {
                img: itempic,
                address: "秦皇岛.自由行",
                introduce: "北京/天津-北戴河双动3天2晚自由行 游玩攻略24小时免费在线咨询",
                price: 429,
                buy: 204
            },
            {
                img: itempic,
                address: "秦皇岛.自由行",
                introduce: "北京/天津-北戴河双动3天2晚自由行 游玩攻略24小时免费在线咨询",
                price: 429,
                buy: 204
            }
        ],
        theme_list: [
            {
                src: "",
                img: "http://localhost:8080/img/home/flypig-theme.jpg",
                title: "带娃游乐园",
                connect: "欢乐亲子时光"
            },
            {
                src: "",
                img: "http://localhost:8080/img/home/flypig-theme.jpg",
                title: "主题乐园控",
                connect: "刷遍全国乐园"
            },
            {
                src: "",
                img: "http://localhost:8080/img/home/flypig-theme.jpg",
                title: "江浙沪包邮",
                connect: "江南水乡荡悠悠"
            },
            {
                src: "",
                img: "http://localhost:8080/img/home/flypig-theme.jpg",
                title: "情侣最爱去",
                connect: "想和你一起浪"
            },
            {
                src: "",
                img: "http://localhost:8080/img/home/flypig-theme.jpg",
                title: "亲子酒店排行榜",
                connect: "带娃快乐入眠"
            }
        ],
        travel_lives: [
            {
                src: "",
                img: "http://localhost:8080/img/home/flypig-live.jpg",
                icon: live_icon,
                number: 447,
                title: "七八月游玩指南"
            },
            {
                src: "",
                img: "http://localhost:8080/img/home/flypig-live.jpg",
                icon: live_icon,
                number: 447,
                title: "七八月游玩指南"
            }
        ]
    }
    onSelect = (event) => {
        if (!this.props.sign.sign) {
            this.props.history.push("/sign")
        }
        else {
            this.props.history.push(`/${Item_src[event.key]}`)
        }
    }
    render() {
        const { picUrl,
            channelarr,
            all_func,
            updownloadapp,
            welfarearr,
            travel_left,
            travel_right,
            destinations,
            itemlist,
            theme_list,
            travel_lives } = this.state
        const mounth = ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."]
        return (
            <>
                <CSSTransition timeout={300}>
                    <Scroll onScroll={() => { }} refresh={() => { }}>
                        <div className="box">
                            {/* 头部 */}
                            <div className="title-box">
                                <div className="cell">
                                    <img src={logo} alt="" />
                                </div>
                                <div className="user">
                                    <Popover mask
                                        overlayClassName="fortest"
                                        overlayStyle={{ color: 'currentColor' }}
                                        // visible={this.state.visible}
                                        vsible="true"
                                        overlay={[
                                            (<Item key="1" value="">我的订单</Item>),
                                            (<Item key="2" value="">我的行程</Item>),
                                            (<Item key="3" value="">我的收藏</Item>),
                                            (<Item key="4" value="">我的红包</Item>),
                                            (<Item key="5" value="">会员中心</Item>),
                                            (<Item key="6" value="">购物车</Item>),
                                            (<Item key="7" value="">联系飞猪</Item>),
                                        ]}
                                        align={{
                                            overflow: { adjustY: 0, adjustX: 0 },
                                            offset: [-10, 0],
                                        }}
                                        onVisibleChange={this.handleVisibleChange}
                                        onSelect={this.onSelect}
                                    >
                                        <div style={{
                                            height: '100%',
                                            padding: '0 15px',
                                            marginRight: '-15px',
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                        >
                                            <LazyLoad>
                                                <img src={usericon} alt="" />
                                            </LazyLoad>
                                        </div>
                                    </Popover>
                                </div>
                            </div>
                            {/* 搜索栏 */}
                            <NavLink to="/search">
                                <div className="search">
                                    <LazyLoad>
                                        <img src={search_icon} alt="" />
                                    </LazyLoad>
                                    <span>日本签证</span>
                                </div>
                            </NavLink>
                            {/* 热搜 */}
                            <div className="hots">
                                <div className="hot-connect">
                                    <span>热搜</span>
                                    <NavLink to="" className="hot-info"><span>泰国签证</span></NavLink>
                                    <NavLink to="" className="hot-info"><span>云南旅游</span></NavLink>
                                </div>
                            </div>
                            {/* 滑动展示框 */}
                            <Carousel
                                autoplay="true"
                                infinite
                                // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                                // afterChange={index => console.log('slide to', index)}
                                easeInOutQuad
                            >
                                {
                                    picUrl.map((pic, index) => (
                                        <NavLink to="" key={index}>
                                            <div key={index} style={{ display: 'inline-block' }}>
                                                <img src={pic} alt="" className="swiper-pic" />
                                            </div>
                                        </NavLink>
                                    ))
                                }
                            </Carousel>
                            {/* 各种票 */}
                            <div className="entry">
                                <div className="channel-line-box">
                                    {
                                        channelarr.map((channel, index) => {
                                            return (
                                                <NavLink to={channel.src} key={index} >
                                                    <div className="channel-box" >
                                                        <LazyLoad>
                                                            <img src={channel.img} alt="" />
                                                        </LazyLoad>
                                                        <span>
                                                            {channel.text}
                                                        </span>
                                                    </div>
                                                </NavLink>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            {/* 项目功能 */}
                            <div className="all-func">
                                <div className="all-func-box">
                                    {
                                        all_func.map((func, index) => {
                                            return (
                                                <NavLink to={func.src} className={`bdra_${index} func-box`} key={index}>
                                                    <div key={index}>
                                                        <div className="maintext">{func.maintext}</div>
                                                        <div className="connect">{func.connect}</div>
                                                    </div>
                                                </NavLink>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            {/* 里程，签到 */}
                            <div className="welfareandsign-box">
                                <div className="welfareandsign">
                                    <a className="welfare">
                                        <LazyLoad>
                                            <img src={welfare} alt="" className="pic" />
                                        </LazyLoad>
                                        <span className="text">专属福利天天领</span>
                                    </a>
                                    <a className="sign">
                                        <LazyLoad>
                                            <img src={sign} alt="" className="pic" />
                                        </LazyLoad>
                                        <span className="text">马上签到</span>
                                    </a>
                                </div>
                            </div>
                            {/* 飞猪app下载 */}
                            <a href={updownloadapp}>
                                <div className="downloadapp">
                                    <LazyLoad>
                                        <img src={flypig} className="pic" />
                                    </LazyLoad>
                                    <div className="text">
                                        <span className="maintext">去飞猪APP</span>
                                        <span className="connect">享以下专享权限与优惠</span>
                                    </div>
                                    <span className="btn">去下载</span>
                                </div >
                            </a>
                            {/* app福利 */}
                            <div className="welfaremore">
                                <div className="welfare-box">
                                    {
                                        welfarearr.map((welfare, index) => {
                                            return (
                                                <NavLink to={welfare.src} key={index}>
                                                    <div className="welfare">
                                                        <div className="title">{welfare.title}</div>
                                                        <div className="text_1">{welfare.text_1}</div>
                                                        <div className="text_2">{welfare.text_2}</div>
                                                        <LazyLoad>
                                                            <img src={welfare.img} alt="" className="pic" />
                                                        </LazyLoad>
                                                    </div>
                                                </NavLink>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            {/* 旅游热点 */}
                            <div className="traveller-hots">
                                <div className="traveller-box">
                                    <div className="left" style={{ background: `url(${travel_left.img}) center center no-repeat /cover` }}>
                                        <div className="shadow">
                                            <div className="title">
                                                <LazyLoad>
                                                    <img src={travel_left.icon} className="newfind" alt="" />
                                                </LazyLoad>
                                                <div className="space"></div>
                                                <div className="date">
                                                    <div className="day" style={{ fontWeight: 600 }}>{new Date().getDate()}</div>
                                                    <div className="month">{mounth[new Date().getMonth()]}</div>
                                                </div>
                                            </div>
                                            <div className="connect">
                                                {travel_left.connect}
                                            </div>
                                            <div className="btn-box">
                                                <div className="btn">
                                                    <span className="number">{travel_left.likes}</span>
                                                    <span className="next">人说好</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="top" style={{ background: `url(${travel_right.top.img})` }}>
                                            <LazyLoad>
                                                <img src={travel_right.top.icon_1} className="supersell" alt="" />
                                            </LazyLoad>
                                            <div className="ticket">
                                                <span>{travel_right.top.from}</span>
                                                <LazyLoad>
                                                    <img className="planeicon" src={travel_right.top.icon_2} alt="" />
                                                </LazyLoad>
                                                <span >{travel_right.top.to}</span>
                                                <span className="text">{travel_right.top.text}</span>
                                            </div>
                                            <div className="btn-box">
                                                ￥
                                                <span className="number">{travel_right.top.minprice}起</span>
                                                <span className="discount">{travel_right.top.discount}折</span>
                                            </div>
                                        </div>
                                        <div className="bottom" style={{ background: `url(${travel_right.bottom.img})` }}>
                                            <div className="address">
                                                {travel_right.bottom.address}
                                            </div>
                                            <div className="btn-box">
                                                ￥
                                                <span className="number">{travel_right.bottom.minprice}起</span>
                                                <span className="discount">{travel_right.bottom.introduce}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 当季旅游地  */}
                            <div className="travel-title-box">
                                <div className="title">
                                    <div className="text">旅行主题</div>
                                    <div className="space"></div>
                                    <NavLink to="">
                                        <div className="more">
                                            <span>探索更多目的地</span>
                                            <LazyLoad>
                                                <img src={rightto} alt="" />
                                            </LazyLoad>
                                        </div>
                                    </NavLink>
                                </div>
                            </div>
                            <div className="destination-box">
                                <div className="destination-line">
                                    {
                                        destinations.map((destination, index) => {
                                            return (
                                                <NavLink to={destination.src} key={index}>
                                                    <div className="destination" style={{ backgroundImage: `url(${destination.img})` }}>
                                                        <div className="destination-shadow">
                                                            <div className="text">
                                                                {destination.address}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </NavLink>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            {/* 旅行主题 */}
                            <div className="traveltheme">
                                <div className="title-x">
                                    <span className="main">旅行主题</span>
                                    <span className="space"></span>
                                    <span className="andmore">最适合你的旅行方式</span>
                                </div>
                            </div>
                            <div className="themebox">
                                <div className="oneline">
                                    <NavLink to={theme_list[0].src}>
                                        <div className="twopart" style={{ background: `url(${theme_list[0].img}) center center no-repeat/cover` }}>
                                            <div className="shadow">
                                                <div className="connectbox">
                                                    <div className="title">{theme_list[0].title}</div>
                                                    <div className="connect">{theme_list[0].connect}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                    <NavLink to={theme_list[1].src}>
                                        <div className="onepart" style={{ background: `url(${theme_list[1].img})center center no-repeat/cover` }}>
                                            <div className="shadow">
                                                <div className="connectbox">
                                                    <div className="title">{theme_list[1].title}</div>
                                                    <div className="connect">{theme_list[1].connect}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </NavLink>
                                </div>
                                <div className="twoline">
                                    {theme_list.map((theme, index) => {
                                        if (index < 2) return;
                                        return (
                                            <NavLink to={theme.src} key={index}>
                                                <div className="onepart" src={theme.src} style={{ background: `url(${theme.img}) center center no-repeat/cover` }}>
                                                    <div className="shadow">
                                                        <div className="connectbox">
                                                            <div className="title">{theme.title}</div>
                                                            <div className="connect">{theme.connect}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        )
                                    })}
                                </div>
                            </div>
                            {/* 旅行直播 */}
                            <div className="travellive">
                                <div className="title-x">
                                    <span className="main">旅行直播</span>
                                    <span className="space"></span>
                                    <span className="andmore">达人带你看世界</span>
                                </div>
                            </div>
                            <div className="live-box">
                                {
                                    travel_lives.map((live, index) => {
                                        return (
                                            <NavLink to={live.src} key={index}>
                                                <div className="live" style={{ background: `url(${live.img})center center no-repeat/cover` }}>
                                                    <div className="shadow">
                                                        <div className="connect-box">
                                                            <div className="title">{live.title}</div>
                                                            <div className="connect">
                                                                <LazyLoad>
                                                                    <img src={live.icon} alt="" className="pic" />
                                                                </LazyLoad>
                                                                <div className="number">{live.number}观看</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        )
                                    })
                                }
                            </div>
                            {/* 猜你喜欢 */}
                            <div className="itemtitle">
                                <div className="title-x">
                                    <span className="main">猜你喜欢</span>
                                    <span className="space"></span>
                                    <span className="andmore">你想要的旅行好货</span>
                                </div>
                            </div>
                            <Itemlist itemlist={itemlist} ></Itemlist>
                        </div>
                    </Scroll>
                </CSSTransition>
            </>
        );
    }
}



export default Home
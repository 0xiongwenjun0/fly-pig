import React, { Component } from 'react';
import { NavLink } from "react-router-dom"
import { Modal } from "antd-mobile"
import { Sign_In } from "../../api/index"

import "./sign.styl"
import taobao_icon from "../../assets/img/taobao.png"

const alert = Modal.alert
let localStore = window.localStorage

function validation({ username, password }) {
    var rexgexp = new RegExp("[0-9a-zA-Z]{6-16}")
    let name = rexgexp.test(username)
    let pw = rexgexp.test(password)
    let error = null
    if(!(name && pw)){
        error = "数据格式不对"
    }
    return {
        validation: name && pw,
        error
    }
}
class Sign extends Component {
    onSubmit = (event) => {
        event.preventDefault()
        if (event.type != "submit") return
        let alertInstance;
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        if (username == "") {
            alertInstance = alert("", "请输入会员名", [{ text: "确认", style: { color: "#f40", }, onPress: () => { alertInstance.close() } }])
            return;
        }
        if (password == "") {
            alertInstance = alert("", "请输入密码", [{ text: "确认", style: { color: "#f40", }, onPress: () => { alertInstance.close() } }])
            return;
        }
        if(validation({username, password}).error){
            alertInstance = alert("", "数据格式不正确", [{ text: "确认", style: { color: "#f40", }, onPress: () => { alertInstance.close() } }])
            return;
        }
        // 判断登录成功与否
        Sign_In({ username, password }).then(res => {
            console.log(res)
            // 判断是否存在账号,是否允许登录
            if (res.login || !res.error) {
                this.props.sign_in(username)
                localStore.setItem("user", username)
                this.props.history.push("/main")
            }else if(res.error){
                alertInstance = alert("", res.error, [{ text: "确认", style: { color: "#f40", }, onPress: () => { alertInstance.close() } }])
            }
        })
    }
    componentDidMount() {
        let user = localStore.getItem("user")
        if (user) {
            this.props.sign_in(user)
            this.props.history.push("/main")
        }
    }
    render() {
        return (
            <div className="signbox">
                <div className="logo">
                    <img src={taobao_icon} alt="" />
                </div>
                <div className="formbox">
                    <form action="" onSubmit={this.onSubmit}>
                        <div className="username input">
                            <input type="text" name="username" ref="username" placeholder="手机号/邮箱/会员名" id="" />
                        </div>
                        <div className="password input">
                            <input type="password" name="password" ref="password" placeholder="请输入密码" />
                        </div>
                        <div className="field">
                            <div className="smssign"><NavLink to="/sms"><span>短信验证码登录</span></NavLink></div>
                            <div className="registered"><NavLink to="/register"><span>免费注册</span></NavLink></div>
                        </div>
                        <div className="btnbox">
                            <button className="btn" type="submit">登  录</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Sign;
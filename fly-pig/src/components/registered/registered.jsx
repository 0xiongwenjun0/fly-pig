import React, { Component } from 'react';
import { Register } from "../../api/index"
import { Modal } from "antd-mobile"
import "./registered.styl"

const alert = Modal.alert
let alertInstance
const localStorage = window.localStorage ? window.localStorage : undefined

function validation({ username, password }) {
    var rexgexp = new RegExp("[0-9a-zA-Z]{6,16}")
    let name = rexgexp.test(username)
    let pw = rexgexp.test(password)
    let error = null
    if (!(name && pw)) {
        error = "数据格式不对"
    }
    return {
        validation: name && pw,
        error
    }
}
class Registered extends Component {
    onSubmit = (event) => {
        event.preventDefault()
        let username = this.refs.username.value
        let password = this.refs.password.value
        let valisdate = validation({ username, password })
        if (valisdate.validation) {
            Register({ username, password }).then(res => {
                if (res.res) {
                    localStorage.setItem("user", username)
                    alertInstance = alert("注册成功", "", [{ text: "确认", style: { color: "#f40", }, onPress: () => { alertInstance.close() } }])
                    // this.props.history.push("/")
                } else if (res.error) {
                    alertInstance = alert("注册失败", res.error, [{ text: "确认", style: { color: "#f40", }, onPress: () => { alertInstance.close() } }])
                }
            })
        } else {
            alertInstance = alert("", valisdate.error, [{ text: "确认", style: { color: "#f40", }, onPress: () => { alertInstance.close() } }])
        }
    }
    render() {
        return (
            <div className="maxbox">
                <div className="formbox">
                    <h1>注册</h1>
                    <form action="" onSubmit={this.onSubmit}>
                        <div className="username">
                            <div className="title">账号</div>
                            <div className="inputbox">
                                <input type="text" name="usernmae" ref="username" id="" />
                            </div>
                        </div>
                        <div className="password">
                            <div className="title">密码</div>
                            <div className="inputbox">
                                <input type="password" ref="password" name="password" id="" />
                            </div>
                        </div>
                        <div className="submitbox">
                            <button className="submit" type="submit">提交</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Registered;
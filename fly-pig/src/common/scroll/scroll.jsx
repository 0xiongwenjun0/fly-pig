import React, { Component } from 'react';
import BScroll from "better-scroll"
import "./scroll.css"

class Scroll extends Component {
    state = {}
    componentDidMount = () => {
        if (!this.scroll) {
            this.scroll = new BScroll(this.refs.scrollView, {
                probeType: 1,
                click: () => { },
                eventPassthrough: "vertical"
            })
            this.scroll.on("scroll", (event) => {
                this.props.onScroll(event)
            })
        }
    }
    componentWillUnmount = () => {
        this.scroll = null
    }
    componentDidUpdate = () => {
        if (this.scroll && this.props.refresh) {
            this.scroll.refresh()
        }
    }
    render() {
        return (
            <div ref="scrollView" className="scroll">
                {this.props.children}
            </div>
        );
    }
}

export default Scroll;
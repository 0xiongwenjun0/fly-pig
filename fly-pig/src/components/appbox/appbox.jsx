import React, { Component } from 'react';
// import { Calendar } from 'antd-mobile';

// const extra = {
//     '2019/07/15': { info: 'Disable', disable: true },
// };
// const now = new Date();
// extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 5)] = { info: 'Disable', disable: true };
// extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6)] = { info: 'Disable', disable: true };
// extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7)] = { info: 'Disable', disable: true };
// extra[+new Date(now.getFullYear(), now.getMonth(), now.getDate() + 8)] = { info: 'Disable', disable: true };

class Appbox extends Component {
    // onConfirm = (date) => {
    //     this.props.Push_Date(date)
    // }
    render() {
        // let { show } = this.props
        return (
            <div>
                {
                    this.props.children
                }
                {/* <Calendar
                    type='one'
                    enterDirection="horizontal"
                    visible={show}
                    onCancel={this.onCancel}
                    onConfirm={this.onConfirm}
                    onSelectHasDisableDate={this.onSelectHasDisableDate}
                    getDateExtra={this.getDateExtra}
                    defaultDate={now}
                    minDate={new Date(+now)}
                    maxDate={new Date(+now + 31536000000)}
                /> */}
            </div>
        );
    }
}

export default Appbox;
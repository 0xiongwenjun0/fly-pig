import React, { Component } from 'react';
import Item from "../item/item"
import "./itemlist.css"

class Itemlist extends Component {
    render() {
        let { itemlist } = this.props;
        return (
            <div>
                <div className="itemlist">
                    {
                        itemlist.map((item, index) => {
                            if (index % 2 !== 0 || itemlist[index + 1] === undefined) return;
                            else {
                                return (
                                    <div className="bothitem-box" style={{paddingTop:index>1?"2.4vw":0}} key={index}>
                                        <div className="left">
                                            <Item item={itemlist[index]} />
                                        </div>
                                        <div className="right">
                                            <Item item={itemlist[index + 1]} />
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }

                </div>
            </div>
        );
    }
}

export default Itemlist;
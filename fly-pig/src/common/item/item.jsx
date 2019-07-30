import React, { Component } from 'react';
import "./item.css"

class Item extends Component {
    render() {
        const { item, like } = this.props;
        const moreicon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAIBAMAAAAYZIIqAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAVUExURc7OzszMzNDQ0N/f3////0dwTMzMzNch8N8AAAAGdFJOUy/iOQgCAHtOoNwAAABGSURBVAjXYwh1YAkNhRBGyqEMAWKJrKFgIkgsUZXBMS1NJBRMGKalCTOwpaUlhIIJtbS0JAY4C8KFq4MohpsCMQpuB5gAABdzHmvIUZBpAAAAAElFTkSuQmCC";
        return (
            <div>
                <div className="item-box">
                    <div className="top" style={{ background: `url(${item.img}) center center no-repeat/cover` }}></div>
                    <div className="bottom">
                        <div className="title">
                            <span className="address" style={{ color: item.add_color || "#55555" }}>{item.address}</span>
                        </div>
                        <div className="introduce"><span>{item.introduce}</span></div>
                        <div className="moreinfo">
                            <div className="info-box">
                                <span className="icon">￥</span>
                                <span className="price">{item.price}</span>
                                <span className="buy">{item.buy}人购买</span>
                            </div>
                            {
                                like?<div className="like-box">
                                    <span>相似</span>
                                </div>:
                                <div className="more"><img src={moreicon} alt="" /></div>
                            }    
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;
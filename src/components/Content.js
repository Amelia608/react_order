import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            domin: "http://a.itying.com/",
            aid: "",
            content: {}
        };
    }
    componentDidMount() {
        console.log(this.props.match.params.aid);
        this.getData();
    }
    getData = () => {
        let api =
            this.state.domin +
            "api/productcontent?id=" +
            this.props.match.params.aid;
        axios.get(api).then(
            res => {
                this.setState({ content: res.data.result[0] });
                console.log(res);
            },
            error => {
                console.log(error);
            }
        );
    };
    render() {
        return (
            <div className="detail">
                <div className="header">
                    <Link className="back" to="/">
                        &lt;&nbsp;返回
                    </Link>
                    {this.state.content.img_url?<img
                        className="p_img_c"
                        src={`${this.state.domin}${this.state.content.img_url}`}
                        alt=""
                    />:''}
                    {/* <img
                        className="p_img_c"
                        src={`${this.state.domin}${this.state.content.img_url}`}
                        alt=""
                    /> */}
                    <div className="btm">
                        <h2>{this.state.content.title}</h2>
                        <span>￥{this.state.content.price}/份</span>
                    </div>
                </div>
                <div className="des">
                  <h3>商品详情</h3>
                  <div dangerouslySetInnerHTML={{__html:this.state.content.content}}></div>
                  <div>{this.state.content.description}</div>
                </div>
            </div>
        );
    }
}

export default Content;

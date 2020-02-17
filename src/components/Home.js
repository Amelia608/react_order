import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Content from "./Content";
import axios from "axios";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            domin: "http://a.itying.com/",
            list: []
        };
    }
    componentDidMount() {
        this.getData();
    }
    getData = () => {
        let api = this.state.domin + "api/productlist";
        axios
            .get(api)
            .then(res => {
                console.log(res);
                this.setState({ list: res.data.result });
            })
            .catch(error => {
                console.log(error);
            });
    };
    render() {
        return (
            <div className="page_home">
                <Link to="/login">去登录</Link>
                {this.state.list.map((value, key) => {
                    return (
                        <div className="item_o" key={key}>
                            <h1 className="item_o_t">{value.title}</h1>
                            <ul className="item_list">
                                {value.list.map((v, k) => {
                                    return (
                                        <li key={k} className="item_list_item">
                                            <div className="content">
                                                <Link to={`/content/${v._id}`}>
                                                    <img
                                                        className="p_img"
                                                        src={`${this.state.domin}${v.img_url}`}
                                                        alt=""
                                                    />
                                                    <h3 className="item_list_t">
                                                        {v.title}
                                                    </h3>
                                                </Link>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Home;

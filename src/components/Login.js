import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    useHistory,
    Redirect
} from "react-router-dom";
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginFlag: false
        };
    }
    login = e => {
        e.preventDefault();
        console.log(this.props)
        let uname = this.refs.uname.value;
        let pwd = this.refs.pwd.value;
        if (uname === "admin" && pwd === "123456") {
            this.setState({ loginFlag: true });
        }
        console.log(uname, pwd);
    };
    render() {
        if (this.state.loginFlag) {
            return <Redirect to={{ pathname: "/" }} />;
        }
        return (
            <div className="login_p">
                <form onSubmit={this.login}>
                    <span>用户名：</span>
                    <input type="text" ref="uname" />
                    <br />
                    <br />
                    <span>密码：</span>
                    <input type="password" ref="pwd" />
                    <br />
                    <br />
                    <input type="submit" value="登录" />  <Link to="/">返回</Link>
                </form>
            </div>
        );
    }
}

export default Login;

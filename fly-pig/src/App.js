import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';

// 静态本地组件
import Search from "./components/search/search"
import Registered from "./components/registered/registered"
// redux 封装过
import Home from "./container/home/home"
import Ticket from "./container/ticket/ticket"
import Sign from "./container/sign/sign"
import Appbox from "./container/appbox/appbox"
import Ticket_Info from "./container/ticket_info/ticket_info"

// import { Sign_API } from "./api/request/index"

import './App.css';
import 'antd/dist/antd.css';
import 'antd-mobile/dist/antd-mobile.css';

function App() {
  return (
    <Appbox>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/search" component={Search} />
          <Route path="/ticket" component={Ticket} />
          <Route path="/ticket_info" component={Ticket_Info} />
          <Route exact path="/sign" component={Sign} />
          <Route exact path="/register" component={Registered} />
        </Switch>
      </Router>
    </Appbox>
  );
}

export default App;

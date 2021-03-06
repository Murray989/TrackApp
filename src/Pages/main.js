import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Menu from '../Components/menu';
import Footer from '../Components/footer';
import Content from '../Components/content';
import Home from './Home';
import Device from './Device';

class Main extends Component {
    render() {
        return (
            <Router>
                <Menu />
                <Content>
                    <Route path="/" exact component={Home} />
                    <Route path="/Device" component={Device} />
                </Content>
                <Footer />
            </Router>
        );
    }
}

export default Main;
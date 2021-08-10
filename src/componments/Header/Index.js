import React,{Component} from 'react';
import {Layout,Affix,Row,Col} from 'antd';
import {Link} from 'react-router-dom';
import NavsComponment from './nav';
import logo from '../../static/image/cnodejs_light.svg';


export default class Header extends Component{
    render(){
        return <Affix offsetTop={0}>
            <Layout.Header  className="header">
                <Row justify="center">
                    <Col span='10'>
                        <Link to="/">
                            <img 
                            src={logo}
                            alt="网站logo" class="logo"/>
                            <input type="text" className="inputSearch"/>
                        </Link>
                    </Col>
                    <Col span='7'>
                        <NavsComponment/>
                    </Col>
                </Row>
            </Layout.Header>
        </Affix>
    }
}
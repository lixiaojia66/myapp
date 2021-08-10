import React, { Component } from 'react';
import { navs } from '../../router/router.config';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

class NavsComponment extends React.Component {
    render() {
        return (<Menu mode='horizontal' theme="dark">
            {
                navs.map((item, index) => {
                return <Menu.Item key={index}>
                    <Link to={item.to}>{item.title}</Link>
                </Menu.Item>
            })}
        </Menu>)
    }
}

export default NavsComponment;

import React from 'react';
import { PageHeader, Menu, Layout, Button } from 'antd';
import './Head.css';
import { Link } from "react-router-dom";

const Head = (props) => {

    return (
        <div className="header">
            <PageHeader
                style={{
                    border: '1px solid rgb(235, 237, 240)',
                }}
                title="巴别塔"
                subTitle="副标题"
                extra={[
                    <Button><Link to="/home">首页</Link></Button>,
                    <Button><Link to="/archive">归档</Link></Button>,
                    <Button><Link to="/about">关于</Link></Button>,
                  ]}
            />
        </div>
    )
}


export default Head;
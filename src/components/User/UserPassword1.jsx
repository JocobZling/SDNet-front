import React from 'react';
import {Form,input, Button } from 'antd';
import '../../css/test.css'

const FormItem=Form.Item;
class UserPassword1 extends React.Component{
    render() {
        return <form className={"container "}>
            <formItem><h1>修改密码</h1></formItem>
            <formItem><br/></formItem>
            <FormItem><label>原始密码：</label><input placeholder={"请输入原始密码"} style={{width:300,height:25,fontSize:12}}/></FormItem>
            <FormItem><label>新的密码：</label><input placeholder={"请输入新的密码"} type={"password"} style={{width:300,height:25,fontSize:12}}/></FormItem>
            <FormItem><label>确认密码：</label><input placeholder={"请再次输入新的密码" } type={"password"} style={{width:300,height:25,fontSize:12}}/></FormItem>
            <FormItem><Button type="primary"style={{backgroundColor:"#999999" ,color:"gray",borderColor:"#999999"}}>修改</Button></FormItem>
        </form>
    }
}

export default UserPassword1
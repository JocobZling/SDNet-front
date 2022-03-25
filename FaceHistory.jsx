import React from 'react';
//import {Typography, Divider, Menu} from 'antd';
import {Typography} from 'antd';
import { Table } from 'antd';
import qs from 'qs';
//import { ReadOutlined, FileSearchOutlined  } from '@ant-design/icons';
import { ReadOutlined } from '@ant-design/icons';
import HomePage from "./HomePage";
import {actions as userActions} from "../ducks/user";
import {actions as historyActions} from '../ducks/history';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";


const {Title} = Typography;

const columns = [
    {
        title: '序号',
        dataIndex: 'name',
        sorter: true,
        render: name => `${name.first} ${name.last}`,
        // 这边应该是number，没改是因为网址里的数据会报错~
        width: '10%',
    },
    {
        title: '分解图1',
        dataIndex: 'pic1',
        // filters: [
        //     { text: 'Male', value: 'male' },
        //     { text: 'Female', value: 'female' },
        // ],
        width: '25%',
        render: (pic1) =>
            //   console.log("record的内容",record)
            <img src={pic1} width="100px" alt=""/> ,
    },
    {
        title: '分解图2',
        dataIndex: 'pic2',
        width: '25%',
        render: (pic2) =>
            //   console.log("record的内容",record)
            <img src={pic2} width="100px" alt=""/> ,

    },
    {
        title: '开始时间',
        dataIndex: 's-time',
        width: '15%',
    },
    {
        title: '结束时间',
        dataIndex: 'e-time',
        width: '15%',
    },
    {
        title: '结果',
        dataIndex: 'result',
    },
];

const getRandomuserParams = params => ({
    results: params.pagination.pageSize,
    page: params.pagination.current,
    ...params,
});

class App extends React.Component {
    state = {
        data: [],
        pagination: {
            current: 1,
            pageSize: 10,
        },
        loading: false,
    };
    componentDidMount() {
        const { pagination } = this.state;
        this.fetch({ pagination });
    }

    handleTableChange = (pagination, filters, sorter) => {
        this.fetch({
            sortField: sorter.field,
            sortOrder: sorter.order,
            pagination,
            ...filters,
        });
    };

    fetch = (params = {}) => {
        this.setState({ loading: true });
        fetch(historyActions.getFaceHistory(1))
            .then(res => res.json())
            .then(data => {
                console.log(data);
                this.setState({
                    loading: false,
                    data: data.results,
                    pagination: {
                        ...params.pagination,
                        total: 200,
                        // 200 is mock data, you should read it from server
                        // total: data.totalCount,
                    },
                });
            });
    };

    render() {
        const { data, pagination, loading } = this.state;
        return (
            <Table
                columns={columns}
                rowKey={record => record.login.uuid}
                dataSource={data}
                pagination={pagination}
                loading={loading}
                onChange={this.handleTableChange}

            />
        );
    }
}
const FaceHistory = () => (
    <Typography>
        <Title  >人脸检测历史记录</Title>
        <App />
        {/*ReactDOM.render(<App />,mountNode);*/}

    </Typography>
)
const mapDispatchToProps = dispatch => ({
    getFaceHistory: (data) => dispatch(historyActions.getFaceHistory(data)),
});
// export default FaceHistory
export default connect(null, mapDispatchToProps)(withRouter(FaceHistory))

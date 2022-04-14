import React from 'react';
import {Typography, Carousel, Divider, Collapse, Image} from 'antd';
import '../css/welcome.css'
import pic1 from './../images/pic1.png'
import pic2 from './../images/pic2.jpg'
import pic3 from './../images/pic3.png'
import welcome from './../images/bj.png'


const {Panel} = Collapse;

const bj1 = `
  随着深度学习的发展，基于生成对抗网络(GAN)[1]的DeepFake技术不断更新，各种换脸工具不断涌现，如FaceApp、FaceSwap、FaceForge、PhotoSpeak、ZAO、DeepFaceLab、DeepNude等。
  这些工具在给大众带来娱乐消遣的同时，也给犯罪分子不法活动带来了契机，个人的隐私权、肖像权以及财产权更易受到侵犯，甚至对社会的和谐稳定造成威胁。
`;
const bj2 = `
  因此，国家对肖像权保护及其重视。在立法层面对深度伪造技术滥用问题进行了前瞻性的回应，其中《中华人民共和国民法典》第一千零一十九条第一款规定：“任何组织或者个人不得以丑化、
  污损，或者利用信息技术手段伪造等方式侵害他人的肖像权。”；国家互联网信息办公室为了规范互联网信息服务深度合成活动专门起草了《互联网信息服务深度合成管理规定（征求意见稿）》。
`
const bj3 = `
  南京信息工程大学数字取证教育部工程研究中心是经教育部批准成立的全国首个数字取证平台。该中心现有研发人员200余人，在多媒体内容取证、新型电子数据取证、
  区块链取证等领域成果显著，获批国家级科研项目100余项，获得100多项国家发明专利，获得省部级及以上科技奖励10余项。
`
const bj4 = `
  依托数字取证平台，我们研发了支持隐私保护的肖像取证系统，开创性地实现了在不泄露用户隐私的前提下对上传图片或视频中的肖像进行专业性、权威性的取证。
`


const login = `用户账号登录：本软件将用户输入的邮箱和密码与数据库中已注册的账号密码比较，若匹配，则开放软件所有功能。`
const res = `用户账号注册：用户需输入用户名、邮箱、密码、确认密码进行注册，当输入内容符合各项要求时，注册成功。`
const facejc = `用户上传单张图片，显示该图片加性分解结果。点击开始检测按钮，
离线阶段第三方诚实服务器生成若干检测时需要的随机数，在线阶段双服务器进行交互完成若干子协议包含Sigmoid、ReLU等，
并在页面上展示完成进度，最后分别输出服务器的计算结果，用户端对计算结果进行相加，即可获得单张图片的检测结果。前后端的交互详情可以点击按钮下载。`
const jm = `用户上传单张图片,软件对该图片进行加性秘密分解，并在界面上展示分解图和三张图的频率直方图，以展现加密人脸分析功能的实现。`
const zhaq = `账号安全管理：本软件支持用户更改密码，用户首先输入原密码，新密码和确认密码。点击修改后，软件首先检查原密码是否正确，其次检查新密码与确认密码是否相匹配，
只有当这两项检查都通过后，才修改数据库中的账号信息。`
const grxx = `个人信息管理：用户可以更改昵称、头像、邮箱。`
const history = `展示当前用户的历史检测记录，包括序号、调用时间、结束时间、计算结果等内容，并能对历史记录进行分页。`
var sectionStyle = {
    width: "100%",
    height: "400px",
    color: 'rgba(0,0,0,.25)',
// makesure here is String确保这里是一个字符串，以下是es6写法
    backgroundImage: `url(${welcome})`
};
const HomePage = () => (

    <Typography>
        <div className={"page"}>
            <div className={"head"} style={sectionStyle}>
                <div className={"title"}>

                    {/*<h1 color={"#e9ece5"}><font color={"#e9ece5"}>欢迎使用本软件</font></h1>*/}
                    {/*<h5><font color={"#e9ece5"}>一款支持隐私保护的轻量级图像检测软件</font></h5>*/}
                    {/*<h1 className={"hh1"}>欢迎使用本软件</h1>*/}
                    {/*<h5>一款支持隐私保护的轻量级图像检测软件</h5>*/}
                </div>
                {/*        <div className={"show"}>*/}
                {/*<Carousel autoplay className={"pic"}>*/}
                {/*    <div>*/}
                {/*        <Image className="picture" src={pic1}/>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <Image className="picture" src={pic2}/>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <Image className="picture" src={pic3}/>*/}
                {/*    </div>*/}
                {/*</Carousel>*/}
                {/*        </div>*/}
            </div>
            <Divider orientation="left" plain><strong>使用须知</strong></Divider>
            <Collapse className={"body"}>
                <Panel header="开发背景" key="1">
                    <p>&nbsp;&nbsp;{bj1}</p>
                    <p>&nbsp;&nbsp;{bj2}</p>
                    <p>&nbsp;&nbsp;{bj3}</p>
                    <p>&nbsp;&nbsp;{bj4}</p>
                </Panel>
                <Panel header="软件功能" key="2">
                    <Collapse defaultActiveKey="1">
                        <Panel header="注册登录" key="4">
                            <p>{login}</p>
                            <p>{res}</p>
                        </Panel>
                    </Collapse>
                    <Collapse defaultActiveKey="1">
                        <Panel header="支持隐私保护的肖像取证" key="5">
                            <p>&nbsp;&nbsp;{facejc}</p>
                        </Panel>
                    </Collapse>
                    <Collapse defaultActiveKey="1">
                        <Panel header="加密算法可视化分析" key="6">
                            <p>&nbsp;&nbsp;{jm}</p>
                        </Panel>
                    </Collapse>
                    <Collapse defaultActiveKey="1">
                        <Panel header="个人账号管理" key="7">
                            <p>{zhaq}</p>
                            <p>{grxx}</p>
                        </Panel>
                    </Collapse>
                    <Collapse defaultActiveKey="1">
                        <Panel header="历史检测记录" key="8">
                            <p>&nbsp;&nbsp;{history}</p>
                        </Panel>
                    </Collapse>
                </Panel>
            </Collapse>
        </div>
    </Typography>

)

export default HomePage

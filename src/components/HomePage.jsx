import React from 'react';
import {Typography, Carousel, Divider, Collapse, Image} from 'antd';
import '../css/welcome.css'
import pic1 from './../images/pic1.png'
import pic2 from './../images/pic2.jpg'
import pic3 from './../images/pic3.png'
import welcome from './../images/welcome.jpg';

const {Panel} = Collapse;

const bj = `
  计算机视觉和图像处理技术的快速发展，使得人们已经能够在各式软件上轻松生成各种各样的伪脸照片。
  伪脸生成技术的发展给一些不法分子提供了诈骗、造假活动的契机,不法分子完全可以在社交网站上使用虚假的个人图片来进行欺骗。
  社会中出现的很多利用虚假人脸进行诈骗的例子足以证明：个人隐私和财产安全受到严重威胁。
  相比于虹膜、指纹等其他生物识别信息，人脸具有无意识和非接触性的特点，
可以远距离发挥作用，且能在长时间、大规模里积累，具有很强的侵入性。当人脸信息和其他隐私信息产生关联时，一旦出现泄露，危害性和危险性不言而喻。
综上所述，开发一个鲁棒的、具有隐私保护特性的伪脸检测系统，不仅有利于打击利用伪脸生成技术进行非法犯罪的不法分子，更有利于保护用户在检测过程中核心隐私安全。
`;
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
// var sectionStyle = {
//     width: "100%",
//     height: "400px",
//     color: 'rgba(0,0,0,.25)',
// // makesure here is String确保这里是一个字符串，以下是es6写法
//     backgroundImage: `url(${welcome})`
// };
const HomePage = () => (

    <Typography >
        <div className={"page"}>
            <div className={"head"}>
        <div className={"title"}>

            {/*<h1 color={"#e9ece5"}><font color={"#e9ece5"}>欢迎使用本软件</font></h1>*/}
            {/*<h5><font color={"#e9ece5"}>一款支持隐私保护的轻量级图像检测软件</font></h5>*/}
            <h1 >欢迎使用本软件</h1>
            <h5>一款支持隐私保护的轻量级图像检测软件</h5>
        </div>
                <div className={"show"}>
        <Carousel autoplay className={"pic"}>
            <div>
                <Image className="picture" src={pic1}/>
            </div>
            <div>
                <Image className="picture" src={pic2}/>
            </div>
            <div>
                <Image className="picture" src={pic3}/>
            </div>
        </Carousel>
                </div>
            </div>
        <Divider orientation="left" plain><strong>使用须知</strong></Divider>
        <Collapse className={"body"}>
            <Panel header="开发背景" key="1" >
                <p>&nbsp;&nbsp;{bj}</p>
            </Panel>
            <Panel header="软件功能" key="2">
                <Collapse defaultActiveKey="1">
                    <Panel header="注册登录" key="4">
                        <p>{login}</p>
                        <p>{res}</p>
                    </Panel>
                </Collapse>
                <Collapse defaultActiveKey="1">
                    <Panel header="支持隐私保护的伪脸检测" key="5">
                        <p>;&nbsp;&nbsp;{facejc}</p>
                    </Panel>
                </Collapse>
                <Collapse defaultActiveKey="1">
                    <Panel header="加密人脸分析" key="6">
                        <p>&nbsp;&nbsp;{jm}</p>
                    </Panel>
                </Collapse>
                <Collapse defaultActiveKey="1">
                    <Panel header="用户信息管理" key="7">
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

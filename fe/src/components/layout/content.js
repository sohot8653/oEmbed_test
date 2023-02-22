import React from 'react';
import { Descriptions } from 'antd';

function checkUrlForm(strUrl) {
    var expUrl = /^http[s]?:\/\//i;
    return expUrl.test(strUrl);
}

function checkImageFrom(strUrl) {
    var expUrl = /\.(jpg|png)/i;
    console.log(strUrl);
    console.log(expUrl.test(strUrl));
    return expUrl.test(strUrl);
}

const Content = (props) => {
    return (
        <div style={{width: '85%', margin: '50px auto'}}>
        {  
            Object.keys(props.data).length === 0 
            ? <p>결과값이 없습니다. URL을 확인해주세요.</p>
            :
            <Descriptions title="결과" bordered>
            {
                Object.entries(props.data).map(([key, value]) => (
                    <Descriptions.Item key={key} label={key} labelStyle={{ width: "20%" }} contentStyle={{ backgroundColor: "#fff" }} span={3}>
                        {
                            checkImageFrom(value) ? <img src={value} alt="img"/> : checkUrlForm(value) ? <a href={value}>{value}</a> : <div dangerouslySetInnerHTML={{__html: value}}></div>
                        }
                    </Descriptions.Item>
                ))
            }
            </Descriptions>
        }
        </div>
    )
}

export default Content;
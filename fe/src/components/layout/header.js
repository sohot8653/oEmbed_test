import React from 'react';
import { Input } from 'antd';
import styled from "styled-components";
import axios from 'axios';

const { Search } = Input;
const ButtonContainer = styled(Search)`
.ant-btn-primary {
    background-color: #ffcd45;
    color: #121211;
    font-weight: bolder;
}

.ant-btn-primary:hover {
    background-color: #ffcd45;
}
`

const Header = (props) => {
    const onSearch = (value) => {
        axios.get(`/api/search?searchUrl=${value}`)
            .then((res) => {
                if(res.data?.resultFlag === 1) {
                    props.setData(res.data.resultData);
                    console.log(res.data.resultData);
                } else {
                    props.setData({});
                }
            })
            .catch((Error)=>{
                console.log(Error);
                props.setData({});
            })
    };
    return (
        <div style={{display:"flex", alignItems: "center", justifyContent: "center", flexDirection: "column", backgroundColor: "#2eaab7"}}>
            <div style={{display:"inherit", alignItems: "center", height: "100px", color: "#fff", fontSize: "45px", fontWeight: "500", }}>
                oEmbed Test
            </div>
            <div style={{height: "100px", width: "50%"}}>
                <ButtonContainer
                    placeholder="url"
                    allowClear
                    enterButton="확인"
                    size="large"
                    onSearch={onSearch}
                />
            </div>
        </div>
    )
}

export default Header;
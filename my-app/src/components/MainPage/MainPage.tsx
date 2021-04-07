import React, {FC} from 'react';
import {TopNav} from '../TopNav/TopNav';
import {LeftMenu} from '../LeftMenu/LeftMenu';
import { BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
 background:#f1f1f1;
 font-family: 'Roboto', sans-serif;
 height:100vh;
`;

const Content = styled.div`
max-width:1200px;
display:flex;
align-items:center;
`;
const MainPage: FC =() => {
    return (
        <Router>
        <Wrapper>
            <TopNav />
            <Content>
                <LeftMenu />
                <div>content</div>
            </Content>
        </Wrapper>
        </Router>
    )
    
}

export default MainPage
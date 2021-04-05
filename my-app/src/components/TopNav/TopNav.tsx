import { render } from '@testing-library/react';
import React, {FC} from 'react';
import styled from 'styled-components';
import {Colors} from '../../styledHelpers/Colors';


const InnerWrapper = styled.div`
width:100%;
background: blue;
`;
export const TopNav:FC=()=>{
    return(
        <div>
            <InnerWrapper>
                <p>styled div</p>
            </InnerWrapper>
        </div>
    );
};

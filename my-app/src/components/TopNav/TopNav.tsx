import React, {FC} from 'react';
import styled from 'styled-components';
import { Wrapper } from'../../styledHelpers/Components'
import useDropdown from 'react-dropdown-hook'


import { Colors } from '../../styledHelpers/Colors'
import {Icons} from '../../styledHelpers/Icons';
import {ExpandMenu} from './ExpandMenu';

const InnerWrapper = styled.div`
//width:1200px;
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
background: ${Colors.white};
`;
const RightIcons = styled.div`
img{
    
    padding:8px;
    margin-right:10px;
    
}
#border{
    background:#EDEDED;
    border-radius: 25px 25px 25px 25px;
    padding:8px;
}
`;
const InputWrapper = styled.div`
input{
    
    width:400px;
}
`;
const ExpandedMenuWrapper = styled.div`
background:white;
img{
    margin-left:5px;
}
`;
const Menu = styled.div`
display:flex;
`;
export const TopNav: FC = () => {
    const [wrapperRef, dropdownOpen, toggleDropdown]=useDropdown();
    return (

    
        
        <Wrapper>
            <InnerWrapper>
                <ExpandedMenuWrapper>
                <img src={Icons.bellIcon} alt="bell icon"/>
                <Menu ref={wrapperRef}>
                <img src={Icons.house2Icon} alt="house icon"/>
                <p>Home</p>
                <img onClick={toggleDropdown} src={Icons.arrowDownIcon} alt="arrow down icon"/>
                {dropdownOpen && 
                    
                   <ExpandMenu/>
                    
                    
                }
                </Menu>

                </ExpandedMenuWrapper>
                <InputWrapper>
                <input type="text" placeholder='Search Legalcluster'/>
                <img src="" alt=""/>
                </InputWrapper>
            
                <RightIcons>
                <img src={Icons.houseIcon} alt="house icon"/>
                <img id="border" src={Icons.commentsIcon} alt="comments icon"/>
                <img id="border"src={Icons.bellIcon} alt="bell icon"/>
                </RightIcons>
            </InnerWrapper>        
        </Wrapper>


    );
}
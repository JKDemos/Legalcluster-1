import React, {FC} from 'react';
import styled from 'styled-components';
import {Icons} from '../../styledHelpers/Icons';
//Card
const Card = styled.div`
-webkit-border-radius: 10px;
-moz-border-radius: 10px;
border-radius: 10px;
background: #FFFFFF;
box-shadow: 0 4px 2px -2px gray;
//width: 250px;
padding: 5px;
text-align: center;
`
const Profile = styled.div`
p{
    margin-top:5px;
    margin-bottom:10px;
}
img{
    margin-top:20px;
}
background:white;
border-bottom: 2px solid gray; 
`
const YNetworkPublication = styled.div`
background:white;
`
const YNetwork = styled.div`
margin-top:10px;
margin-bottom:10px;
background:white;
display:flex;
align-items:center;
justify-content:space-around;
img{
margin-right:8px;
margin-left:8px;
}
`
const YPublication = styled.div`
margin-top:10px;
margin-bottom:10px;
background:white;
display:flex;
justify-content:space-around;
img{
margin-right:8px;
margin-left:8px;
}
`
//Publication/Ecosytem/Entities
const PuEcEn = styled.div`
background:#f1f1f1;
margin-top:10px;
margin-left:20px;
align-items:center;
`
const El = styled.div`
display:flex;
align-items:center;
padding:10px;
margin-top:2px;
img{
    margin-right:5px;
}
`
//Menu
const LefttMenu = styled.div`
margin-left:10px;
margin-top:10px;
`




export const LeftMenu: FC = () => {
    return (
        
        //karta z zdjęciem po lewej
    <LefttMenu>    
        <Card>
            <Profile>
                <img src={Icons.bellIcon} alt="bell icon"/>
                <p >name</p>
                <p id="job">job title</p>

            </Profile>
            <YNetworkPublication>
                <YNetwork>
                    <img src={Icons.networkIcon} alt="network icon"/>
                    <p>Your Network</p>
                    <img src={Icons.networkIcon} alt="network icon"/>
                </YNetwork>
                <YPublication>
                    <img src={Icons.publicationsIcon} alt="publications icon"/>
                    <p>Your Publications</p>
                    <img src={Icons.plusIcon} alt="plus icon"/>
                </YPublication>

            </YNetworkPublication>

        </Card>
        <PuEcEn>
            <El>
                <img src={Icons.publicationsIcon}  alt="publications icon"/>
                <p>Publications</p>
            </El>
            <El>
                <img src={Icons.ecosystemIcon} alt="ecosystem icon"/>
                <p>Ecosystem</p>
            
            </El>
            <El>
                <img src={Icons.entities2Icon} alt="entities icon"/>
                <p>Entities</p>
            </El>
        </PuEcEn>
    </LefttMenu>
    );
}
import styled from 'styled-components';

export const Profile = styled.div`
justify-content:center;
text-align:center;
box-shadow:0px 0px 10px lightgray;
padding-bottom: 20px;
p{
    margin-top:5px;
    margin-bottom:10px;
}
img{
    margin-top:20px;
}
.ListItemText{
    margin-left: 10px;
}
`;
export const PersonalMenu = styled.div`
`;
export const PersonalMenuItem = styled.div`
    margin-top:10px;
    margin-bottom:10px;
    display:flex;
    align-items:center;
    justify-content:space-around;

    img{
        margin-top: 0px;
        margin-right:8px;
        margin-left:8px;
    }
    p{
        font-size: 16px;
    }
`;
//Menu
export const LeftMenu = styled.div`
width:300px;
margin-left:10px;
margin-top:10px;
`;
export const MenuHeader=styled.div`
    justify-content: center;

    img{
        width:70px;
        height:70px;
        border-radius: 50%;
    }
`;
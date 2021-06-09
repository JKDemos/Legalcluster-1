import styled from 'styled-components'

export const TopNav=styled.div`
    width: 100%;
    padding:0px;
    height: 70px;
    margin:0px;
    box-shadow:0px 0px 5px lightgray;
    display: flex;
    justify-content: space-between;
`;
export const LogoContainer=styled.div`
img{
    padding-top: 10px;
    width:50px
}
`;
export const UserMenu=styled.div`
    margin-top: 10px;
    width:320px;
    height: 700px;
    margin-left: 20px;
    margin-top: 75px;
    padding-left:20px ;
    padding-top: 10px;
    position:absolute;
    z-index: 10;
    background: white;
    box-shadow: 1px 1px 1px 1px lightgray;
    border-radius: 5px;
    
`;
export const ScrollArea=styled.div`
    height: 400px;
    width: 100%;
    overflow-y: scroll;
    input{
        width:90%;
    }
    border-bottom: 1px solid lightgray;
    margin-bottom: 5px;
    padding-bottom: 5px;
`;
export const UserMenuItem=styled.div`
    display:flex;
    padding-top:10px;
    padding-bottom:10px;
    p{
        margin:0px;
        padding-left: 10px;
    }
`;
export const LogoutBar=styled.div`
    justify-content: center;
    text-align: center;
`;
export const FilterBox=styled.div`
    background: white;
    height: 30px;
    border-bottom: 1px solid lightgray;
`;
export const LeftSide=styled.div`
    align-self: flex-start;
    display: flex;
    padding-bottom: 10px;
    padding-left: 20px;

    button{
        margin:0px;
        padding-right: 10px;
        p{
            margin:0px;
        }
    }
`;
export const CenterSide=styled.div`
    align-self: center;
    input{
        background: #ddd;
        width:500px
    }
`;
export const RightSide=styled.div`
    align-self: flex-end;
    padding-bottom: 10px;
    padding-right: 20px;
`;
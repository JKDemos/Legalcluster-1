import styled from 'styled-components'

export const WorkPostContainer=styled.div`
    width: 1200px;
`;
export const WorkPostHeader=styled.div`
   h3{
       margin-top:0px;
       margin-bottom:5px;
   } 
`;
export const WorkPostTextArea=styled.div`
    p{
        margin:0px
    }
`;
export const WorkPostFooter=styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    p{
        color:gray;
        margin-bottom: 0px;
        margin-top: 0px;
        margin-right: 10px;
    }
    img{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        margin-right: 5px;
    }
`;
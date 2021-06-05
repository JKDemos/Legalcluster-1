import styled from 'styled-components'

export const ProfileDescrption = styled.div`
width:100%;
display:flex;
flex-direction:row;

h4{
    width:150px;
    margin-bottom:5px;
}
`;
export const ProfilePersonalDetails=styled.div`
    min-width:100%;
    display:flex;
    flex-direction:row;
`;

export const ProfileBox=styled.div`
    width:100px;
    justify-content:center;
    text-align:center;

    p{
        text-align:center;
        padding:2px 0px 5px 0px;
        margin:0px;
    }
`;
export const PersonalDataForm=styled.div`
    padding-top:20px;
    padding-left:50px;
    width:45%;
    justify-content:center;
    text-align:center;

    p{
        text-align:center;
        padding:5px 0px 5px 0px;
        margin:0px;
    }
    input{
        padding:4px 0px 4px 0px;
        margin:0px;
    }
`;
export const SkillForm=styled.div`
    padding-top:20px;
    padding-left:50px;
    width:45%;
    justify-content:center;
    text-align:center;

    p{
        text-align:center;
        padding:5px 0px 5px 0px;
        margin:0px;
        background:lightblue;
        width:250px;
    }
    input{
        width:250px;
        padding:4px 0px 4px 0px;
        margin:0px;
    }
`;
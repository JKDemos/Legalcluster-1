import styled from 'styled-components'

export const ProfileContainer=styled.div`
    width:1400px;
`;
export const ProfileDescrption = styled.div`
width:100%;
display:flex;
flex-direction:row;

h4{
    width:150px;
    margin-bottom:5px;
}
`;
export const ProfileFormContainer=styled.div`
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
export const ProfileSkillContainer=styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
`;
export const TermForm=styled.div`
    padding-top:20px;
    padding-left:50px;
    width:45%;
    justify-content:center;
    text-align:center;

    p{
        text-align:center;
        padding:5px 0px 5px 0px;
        margin:0px;
        width:350px;
    }
    input{
        width:350px;
        padding:4px 0px 4px 0px;
        margin:0px;
    }
`;
export const FileInput=styled.div`
    width:45%;
    padding-left:50px;
    justify-content:center;
    text-align:center;

    p{
        text-align:center;
        padding:5px 0px 5px 0px;
        margin:0px;
        width:350px;
    }
    input{
        width:350px;
        padding:4px 0px 4px 0px;
        margin:0px;
    }
`;
export const SkillFormHeader=styled.div`
    display: flex;
    padding-left: 25px;
    flex-direction: row;
    justify-content: space-between;
    .MuiSvgIcon-root{
        margin-top: 15px;
    }
`;
export const SectionSeparator=styled.div`
    margin-top: 20px;
    width: 100%;
    border-top: 1px solid #ddd;
`;
export const FeeFormWrapper=styled.div`
padding-left: 50px;
    justify-content: left;
`;
export const FileInputWrapper=styled.div`
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    background: lightskyblue;
    .MuiSvgIcon-root{
        margin-top: 2px;
        margin-left: 10px;
    }
    input{
        width: 350px;
    }
`;
export const ContactForm=styled.div`
    width: 500px;
    padding-left: 50px;
    display: flex;
    justify-content: space-between;

    img{
        width:40px;
        height: 40px;
        border-radius:50%;
        margin-right: 10px;
    }
`;
export const ContactData=styled.div`
    display:flex;
    justify-content: space-between;
    width:200px;
    padding-top: 10px;
    padding-bottom: 10px;
    p{
        text-align: left;
        margin-top:10px;
        margin-bottom:0px;
    }
`;
export const ContactButton=styled.div`
    width:100px;
    height: 30px;
    text-align:center;
    margin-top: 15px;

    border: 1px solid gray;
    p{
        margin-top:2px;
        margin-bottom:0px;
        padding:0px;
        color:gray;
    }
`;
export const Table=styled.div`
    padding-left: 50px;
    display: flex;
    flex-direction: row;
`;
export const Collumn=styled.div`
    width:200px;
    display: flex;
    flex-direction: column;
`;
export const BigButton=styled.div`
    padding-left: 25px;
`;
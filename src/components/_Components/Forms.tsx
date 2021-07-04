import styled from 'styled-components'

export const DataSection = styled.div`
border-bottom:1px solid #ddd;
min-width:100%;
`;

export const ShadowForm=styled.form`
    
    input{
        border:none;
        background:#ddd;
        margin-bottom:5px;
        width:200px;
        margin-right:5px;
        font-size:16px;
    }
    input:focus-visible{
        border:none;
    }
    p{
        margin-right:10px;
    }
`;
export const TagsForm=styled.form`
    input{
        margin-bottom:5px;
        width:250px;
        margin-right:5px;
        font-size:16px;
    }
    p{
        margin-right:10px;
    }
`;
export const FeeForm=styled.form`
    input{
        margin-bottom:5px;
        width:250px;
        margin-right:5px;
        font-size:16px;
    }
    p{
        text-align: left;
        margin-right:10px;
    }
`;
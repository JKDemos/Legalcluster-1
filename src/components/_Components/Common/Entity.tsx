import styled from 'styled-components'

export const EntityCard=styled.div`
    display: flex;
    flex-direction: row;
    width:300px;
    height:100px;
    border:1px solid #ddd;
    border-radius: 7px;
    margin:5px;
`;
export const CompanyThumbnail=styled.div`
    width:100px;
    height:100%;
    img{
        padding:5px;
        width:90px;
        height:90px;
    }
`;
export const EntityDescription=styled.div`
    flex-direction: column;
`;
export const EntityName=styled.div`
    margin-top: 10px;
    width: 200px;
`;
export const EntityAdress=styled.div`
    width: 200px;
    margin: 5px;
    p{
        font-size: small;
    }
`;
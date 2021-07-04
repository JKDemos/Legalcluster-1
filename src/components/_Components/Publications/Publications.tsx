import styled from 'styled-components';

export const Publication=styled.div`
    width: 100%;
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const PublicationThumbnail=styled.div`
    img{
        height:70px;
        width:70px;
    }
`;
export const PublicationsAuthor=styled.div`
        display: flex;
        flex-direction: row;
        img{
            height:30px;
            width: 30px;
            border-radius: 50%;
        }
        p{
            margin-top:5px;
            margin-bottom: 0px;
        }
`;
export const PublicationsContent=styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    p{
        margin:5px;
    }
`;
export const PublicationsHeader=styled.div`
    font-size: 16px;
`;
export const PublicationsModule=styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;
    box-shadow:1px 1px 5px #ddd;
`;
export const PublicationsButton=styled.div`
    p{
        padding:0px;
        margin-top:0px;
        margin-bottom: 0px;
        margin-left: 15px;
    }
`;
export const LastPublications=styled.div`
    width:340px;
    min-width: 340px;
    height:340px;
`;
export const LastPublicationText=styled.div`
    padding-top: 160px;
    padding-left:5px;
    padding-right: 5px;
    text-align: justify;
`;
export const LastPublicationsHeader=styled.div`
    h3{
        padding:0px;
        margin-top:0px;
        margin-bottom: 0px;
        margin-left: 15px;
    }
`;
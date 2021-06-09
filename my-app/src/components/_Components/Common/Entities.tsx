import styled from 'styled-components'

export const EntitiesPage=styled.div`
width:1400px;
    .fullscreen{
        width:100%;
        height: 100%;
        position:absolute;
        z-index: 1000;
        background: white;
        left:0;
        top:0;
    }
`;
export const EntitiesContainer=styled.div`
    width:100%;
    .mosaic{
    display: flex;
    flex-wrap: wrap;
    }
    .list{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        height: 2000px;
    }
`;

export const EntitiesControlBar=styled.div`
    width:100%;
    background-color: #ddd;
    padding-left: 30px;
`;
export const EntitiesControlTopBar=styled.div`
    width:100%;
    background-color: #ddd;
`;
export const EntitiesHeader=styled.div`
    width:100%;
    justify-content:space-between ;
    display: flex;
    flex-direction: row;
    h3{
        margin-bottom:0px;
        margin-top: 12px;
    }
`;
export const DisplayControls=styled.div`
    width: 200px;
    height:50px;
    .MuiSvgIcon-root{
        height: 30px;
        width: 30px;
    }
`;
export const EntityListControls=styled.div`
    button{
        height: 30px;
        margin-left: 5px;
        margin-right: 5px;
    }
`;
export const CloseIconContainer=styled.div`
    display: flex;
    .MuiSvgIcon-root{
        padding-top:15px;
    }
`;
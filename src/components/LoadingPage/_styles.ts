import styled from "styled-components";


export const LoadingWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #001C30;
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    img{
        max-width: 60px;
        filter: invert(1) brightness(10);
        padding-bottom: 60px;
    }
`


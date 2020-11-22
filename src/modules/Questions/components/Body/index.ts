import styled, { keyframes } from 'styled-components';
/**
 * Body wrapper block
 */

const blink = keyframes`
    0% { opacity: 0; }
    100% { opacity: 1; }
`;
export const Body = styled.main`
    /* height: 100%; */

    margin-top: 16px;

    display: flex;
    justify-content: center;
    align-items: flex-start;

    width: 100%;

    overflow: scroll;

    opacity: 0.8;

    min-height: 70%;

    
`;

export const Paragraph = styled.p`
    width: 70%;
    font-size: 1.6rem;

    overflow: hidden;
    white-space: normal; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */ 

    &:after{
        content: "|";
        background-color: #4b4b4b;
        border-radius: 20px;
        width: 1px;
        animation: blink .3ms linear infinite alternate;
    }

    @media only screen 
    and (min-device-width : 360px) 
    and (max-device-width : 860px)
    and (-webkit-min-device-pixel-ratio: 2) { 
        width: 100%;
        font-size: 1.4rem;
        max-width: 100%;
    }
    @media only screen
    and (min-device-width : 360px) 
    and (max-device-width : 860px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation : landscape) { 
        width: 100%;
        font-size: 1.4rem;
        max-width: 100%;
    }
    @media only screen 
    and (min-device-width : 360px) 
    and (max-device-width : 860px) 
    and (orientation : portrait) 
    and (-webkit-min-device-pixel-ratio: 2) { 
        width: 100%;
        font-size: 1.4rem;
        max-width: 100%;
    }
`;
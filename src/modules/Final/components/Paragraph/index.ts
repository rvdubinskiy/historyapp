import styled from 'styled-components';

export const Paragraph = styled.p`
    font-size: 1.4rem;
    width: 100%;

    overflow: hidden;
    white-space: normal; /* Keeps the content on a single line */
    margin: 0 auto; /* Gives that scrolling effect as the typing happens */ 


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
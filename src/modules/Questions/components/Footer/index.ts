import styled from 'styled-components';
/**
 * Footer fot saving answer
 */

export const Footer = styled.footer`

    display: flex;
    justify-content: center;
    align-items: center;

    min-height: 20%;
    max-height: 30%;

    margin-top: auto;

    width: 100%;

    background-color: #fff;
`;

export const Textarea = styled.textarea`
    width: 70%;
    height: 100%;

    max-width: 70%;
    max-height: 100%;
    min-height: 30%;
    min-width: 30%;

    padding: 10px;

    font-size: 1.6rem;
    font-family: 'Poiret One', Arial, Helvetica, sans-serif;
    
    border-radius: 10px;
    outline: none;
    border: none;

    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);

    @media only screen 
    and (min-device-width : 360px) 
    and (max-device-width : 860px)
    and (-webkit-min-device-pixel-ratio: 2) { 
        width: 100%;
        font-size: 1.2rem;
        max-width: 100%;
    }
    @media only screen
    and (min-device-width : 360px) 
    and (max-device-width : 860px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation : landscape) { 
        width: 100%;
        font-size: 1.2rem;
        max-width: 100%;
    }
    @media only screen 
    and (min-device-width : 375px) 
    and (max-device-width : 860px) 
    and (orientation : portrait) 
    and (-webkit-min-device-pixel-ratio: 2) { 
        width: 100%;
        font-size: 1.2rem;
        max-width: 100%;
    }
`;

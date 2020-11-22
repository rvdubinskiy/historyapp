import styled from 'styled-components';

export const Header = styled.main`
    display: flex;

    flex-flow: row nowrap;

    justify-content: flex-end;
    align-items: center;
    width: 100%;

    @media only screen 
    and (min-device-width : 360px) 
    and (max-device-width : 860px) 
    and (-webkit-min-device-pixel-ratio: 2) { 
        width: 100%;
        font-size: 1.2rem;
        max-width: 100%;
        justify-content: center;
        align-items: center;
    }
    @media only screen
    and (min-device-width : 360px) 
    and (max-device-width : 860px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation : landscape) { 
        width: 100%;
        font-size: 1.2rem;
        max-width: 100%;
        justify-content: center;
        align-items: center;
    }
    @media only screen 
    and (min-device-width : 360px) 
    and (max-device-width : 860px) 
    and (orientation : portrait) 
    and (-webkit-min-device-pixel-ratio: 2) { 
        width: 100%;
        font-size: 1.2rem;
        justify-content: center;
        align-items: center;
        max-width: 100%;
    }
`;
import styled from 'styled-components';
/**
 * Header wrapper block
 */
export const Header = styled.header`
    display: flex;
    flex-flow: row nowrap;

    align-items: center;
    justify-content: space-between;

    padding: 0px 20px;

    height: 50px;
    width: 100%;

    @media only screen 
    and (min-device-width : 360px) 
    and (max-device-width : 860px)
    and (-webkit-min-device-pixel-ratio: 2) { 
        padding: 0px;
    }
    @media only screen
    and (min-device-width : 360px) 
    and (max-device-width : 860px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation : landscape) { 
        padding: 0px;
    }
    @media only screen 
    and (min-device-width : 360px) 
    and (max-device-width : 860px) 
    and (orientation : portrait) 
    and (-webkit-min-device-pixel-ratio: 2) { 
        padding: 0px;
    }
`;
export const HeaderItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    flex-basis: auto;
`;
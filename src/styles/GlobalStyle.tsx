import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    * ::-webkit-scrollbar-track
    {
        border-radius: 100px;
        margin: 4px;
    }

    * ::-webkit-scrollbar
    {
        width: 8px;
    }

    * ::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        background-color: rgba(255, 255, 255, 0.25);
    }

    html, body {
        color: white;
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 13px;
        font-family: 'Poiret One', Arial, Helvetica, sans-serif;
        /* background: #030918; */
        height: 100%;

        @font-face {
            font-family: 'PoiretOne';
            font-weight: 400;
            src: url('./assets/fonts/PoiretOne.ttf');
        }
    }
    body {
        line-height: 1.5;
        font-family: 'Poiret One', sans-serif;
    }

    p,h1,h2,h3,h4,h5,h6 {
        padding: 0;
        margin: 0;
    }

    #root {
        display: flex;
        flex-direction: column;
        height: 100vh;
        width: 100%;
        padding: 20px;
        background: #030918;

        overflow: hidden;
    }
`;

export default GlobalStyle;

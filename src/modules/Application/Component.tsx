import * as React from 'react';

import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router-dom';

import { ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
// import { overridedMuiTheme } from '@huntbox-design/uing/Themes';
import mainTheme from '../Themes';

import GlobalStyle from '../../styles/GlobalStyle';
import useGlobalStore, { GlobalStoreProvider } from '../../stores/GlobalStore';

import LayoutRoutes from './modules';

const Routes = (): JSX.Element => {
    const { history } = useGlobalStore();
    return (
        <React.Fragment>
            <MuiThemeProvider theme={mainTheme}>
                <GlobalStyle />
                <Router history={history}>
                    <LayoutRoutes />
                </Router>
            </MuiThemeProvider>
        </React.Fragment>
    );
};


export default (): JSX.Element => {
    return (
        <ThemeProvider theme={mainTheme}>
            <GlobalStoreProvider>
                <Routes />
            </GlobalStoreProvider>
        </ThemeProvider>
    );
};
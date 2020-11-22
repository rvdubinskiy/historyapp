// TODO: Перенести в global/hooks
import * as React from 'react';
import UserStore from './UserStore';
import { createBrowserHistory } from 'history';
import mainTheme from '../modules/Themes';

const history = createBrowserHistory();

export const globalStore = {
    user: new UserStore(history),
    history: history,
    theme: mainTheme,
};

const storeContext = React.createContext(null);

export const GlobalStoreProvider = ({children}: {children: JSX.Element}): JSX.Element => {
    const store = React.useState(() => {
        return globalStore;
    });
    return <storeContext.Provider value={store}>{children}</storeContext.Provider>;
};

const useGlobalStore = (flag?: boolean): any | UserStore => {
    const [store] = React.useContext(storeContext);
    if (!store) {
        throw new Error('You have forgot to use StoreProvider, shame on you.');
    }
    if (flag) {
        return store.user;
    }
    return store;
};


export default useGlobalStore;
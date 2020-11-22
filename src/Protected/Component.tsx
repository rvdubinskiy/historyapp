import * as React from 'react';
import { useObserver } from 'mobx-react';

import Body from './modules/Body';

const ProtectedArea: React.FC = () => {

    return useObserver(() => {
        return (
            <Body />
        );
    });
};

export default ProtectedArea;
import * as React from 'react';
import { useObserver } from 'mobx-react';

import { renderRoutes } from '../../utils/renderRoutes';

const Body: React.FC = () => {

    return useObserver(() => {

        return (
            <React.Fragment>
                {renderRoutes()}
            </React.Fragment>
        );
    });
};

export default Body;
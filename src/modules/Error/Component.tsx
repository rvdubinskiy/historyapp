import * as React from 'react';
import {useObserver} from 'mobx-react';

import { Container, Message } from '../../styles/warning';


export default class ErrorBoundary extends React.Component {
    state: {
        hasError: boolean;
    };
    constructor(props: any) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch(error: any, info: any): void {
        this.setState({ hasError: true });
        console.error(error, info);
    }

    render() {
        if (this.state.hasError) {
            return (
                <Container>
                    <Message>{'Oops:( Something went wrong.'}</Message>
                </Container>
            );
        }
        return this.props.children;
    }
}

export const ErrorWrapper = ({ error, children }: {
    error: boolean;
    children: JSX.Element;
}): JSX.Element => {
    React.useState(() => {
        console.warn('Error/ErrorWrapper is deprecated! Please use StatusWrapper/ErrorWrapper');
    });

    return useObserver(() => {
        if (error) {
            return (
                <Container>
                    <Message>{'Oops:( Something went wrong.'}</Message>
                </Container>
            );
        }

        return children;
    });
};
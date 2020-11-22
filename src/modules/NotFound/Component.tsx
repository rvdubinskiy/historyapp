import * as React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 200;
    overflow: hidden;
    position: absolute;
    background: #70809026;
`;

const Message = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: calc(1rem + 2vmin);
    font-weight: 500;
`;

export default class ErrorBoundary extends React.Component {

    render() {
        return (
            <Wrapper>
                <Message>{'Sorry, but this page dosn\'t exist'}</Message>
            </Wrapper>
        );

    }
}
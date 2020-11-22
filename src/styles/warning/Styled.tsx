import styled from 'styled-components';


export const Container = styled.div`
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
    overflow: hidden;
    position: absolute;
    background: #70809026;
    min-height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Message = styled.div`
    top: 50%;
    left: 50%;
    font-size: calc(1rem + 1vmin);
    font-weight: 500;
`;
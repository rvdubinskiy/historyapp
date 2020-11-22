import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
0% {
  transform: rotate(0); }
100% {
  transform: rotate(360deg); }
`;

export const LoaderWrapper = styled.div`
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 200;
    overflow: hidden;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Circle = styled.div`
    height: 19px;
    width: 19px;
    color: #8DCAFE;
    position: relative;
    display: inline-block;
    border: 2px solid;
    border-radius: 50%;
    border-top-color: transparent;
    animation: ${rotate} 1s linear infinite;
`;
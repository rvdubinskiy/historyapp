import * as React from 'react';
import { LoaderWrapper, Circle } from './Elements';

interface ILoader {
    /** Определяет видимость индикатора загрузки */
    loading: boolean;
    transparent?: boolean;
}

const Loader = ({ loading, transparent = false }: ILoader) =>
    loading ?
        <LoaderWrapper style={{backgroundColor: transparent ? 'none' : '#70809026'}}>
            <Circle>
            </Circle>
        </LoaderWrapper>
        :
        null;

export default Loader;

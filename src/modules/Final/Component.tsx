import * as React from 'react';

import { Wrapper } from '../BorderWrapper';

import { Header } from './components/Header';
import { Body } from './components/Body';
import { Paragraph } from './components/Paragraph';

import NotFound from '../NotFound';

import { data } from '../Questions/data/data';
import { Button } from '../Button';

export const Final: React.FC = (): JSX.Element => {

    const [finalChunk] = React.useState(() => data.final);

    return (
        sessionStorage.getItem('points') >= '8'  
        ? 
            <Wrapper style={{
                flexFlow: 'column nowrap',
                justifyContent: 'flex-start',
                alignItems: 'center',
                backgroundColor: '#fff',
                overflow: 'scroll'
            }}>
                <Header style={{
                    marginBottom: '16px'
                }}>
                    <Button onClick={() => window.location.href = '/fullstory'}>
                        {'Посмотреть свою историю'}
                    </Button>
                </Header>
                <Body>
                    <Paragraph style={{
                        marginBottom: '16px'
                    }}>{finalChunk[0]}</Paragraph>


                    <Paragraph>{finalChunk[1]}</Paragraph>


                    <Paragraph style={{
                        alignSelf: 'flex-end',
                        margin: '0 0 16px 0',
                    }}>{finalChunk[2]}</Paragraph>


                    <Paragraph style={{
                        margin: '0 0 16px 0',
                        fontSize: '1rem'
                    }}>{finalChunk[3]}</Paragraph>


                    <Paragraph style={{
                        margin: '24px auto 0 auto',
                        fontSize: '1.6rem',
                        fontWeight: 900
                    }}>{finalChunk[4]}</Paragraph>


                    <Paragraph style={{
                        fontSize: '1.6rem',
                        fontWeight: 900
                    }}>{finalChunk[5]}</Paragraph>

                </Body>
            </Wrapper>
        : <NotFound />
    )
} 
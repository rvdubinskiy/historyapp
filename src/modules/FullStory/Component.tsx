import * as React from 'react';

import { Wrapper } from '../BorderWrapper';

import { Header } from './components/Header';
import { Body } from './components/Body';
import { Button } from '../Button';

import NotFound from '../NotFound';

import { data } from '../Questions/data/data';

import { Paragraph } from '../Final/components/Paragraph';

export const FullStory: React.FC = (): JSX.Element => {
    const [chunks] = React.useState(() => data.pages);

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
                <Header>
                    <Button onClick={() => {
                        window.location.href = '/home'
                    }}>
                        {'На главную'}
                    </Button>
                </Header>
                <Body style={{marginTop: '16px', marginBottom: '16px'}}>
                    <Paragraph>{chunks[0].title}</Paragraph>
                    <Paragraph style={{fontWeight: 900}}>{sessionStorage.getItem('1')}</Paragraph>

                    <Paragraph>{chunks[1].title}</Paragraph>
                    <Paragraph style={{fontWeight: 900}}>{sessionStorage.getItem('2')}</Paragraph>

                    <Paragraph>{chunks[2].title}</Paragraph>
                    <Paragraph style={{fontWeight: 900}}>{sessionStorage.getItem('3')}</Paragraph>

                    <Paragraph>{chunks[3].title}</Paragraph>
                    <Paragraph style={{fontWeight: 900}}>{sessionStorage.getItem('4')}</Paragraph>

                    <Paragraph>{chunks[4].title}</Paragraph>
                    <Paragraph style={{fontWeight: 900}}>{sessionStorage.getItem('5')}</Paragraph>

                    <Paragraph>{chunks[5].title}</Paragraph>
                    <Paragraph style={{fontWeight: 900}}>{sessionStorage.getItem('6')}</Paragraph>

                    <Paragraph>{chunks[6].title}</Paragraph>
                    <Paragraph style={{fontWeight: 900}}>{sessionStorage.getItem('7')}</Paragraph>

                    <Paragraph>{chunks[7].title}</Paragraph>
                    <Paragraph style={{fontWeight: 900}}>{sessionStorage.getItem('8')}</Paragraph>

                </Body>
            </Wrapper>
        : <NotFound />
    )
}
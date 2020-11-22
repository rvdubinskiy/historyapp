import * as React from 'react';
import { useParams } from 'react-router-dom';

// import components for page
import { Body, Paragraph } from './components/Body';
import { Footer, Textarea } from './components/Footer';
import { Header, HeaderItem } from './components/Header'

import { getText } from './tools/Functions';

import { Button } from '../Button';
import NotFound from '../NotFound';
import { Wrapper } from '../BorderWrapper';
import { useObserver } from 'mobx-react';

import { data } from './data/data';

export interface IQuestionProps {
    name?: string;
    text?: string;
    level?: number;
}


export const Question: React.FC = () => {

    const { id } = useParams<any>();

    const [answer, setAnswer] = React.useState('');

    
    
    const points = typeof parseInt(id) === 'number' && parseInt(id) - 1; 
    const [chunk] = React.useState(() => data.pages[points]);

    React.useEffect(() => {
        getText(chunk.title);
    }, []);

    return useObserver(() => (
        typeof points === 'number' && sessionStorage.getItem('points') >= chunk['points-coint']
            ? (
                <Wrapper style={{
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    flexFlow: 'column nowrap',
                    backgroundColor: '#fff'
                }}>
                    <Header>
                        <HeaderItem>
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                height="40" 
                                width="40" 
                                fill="#bba519"
                                viewBox="0 0 100 100"
                            >
                                <path d="M66.5,24.13l3-13.71a1.5,1.5,0,0,0-2.26-1.6S64.13,10.71,58,
                                10.71c-2.78,0-4.47-1.25-6.42-2.7-2.21-1.65-4.72-3.51-9-3.51-8.16,
                                0-10.86,4.67-11,4.87a1.5,1.5,0,0,0-.15,1.05l3,13.71C30.41,29.28,
                                3,64.94,16,81.06,26,93.5,41.19,93.49,50.2,93.5h.92c9.08,0,24-.14,
                                33.9-12.44C98,64.94,70.59,29.28,66.5,24.13Zm16.19,55c-9,11.19-23,
                                11.32-31.58,11.32H50.2c-8.51,0-22.76,0-31.88-11.32C12.07,71.42,17.42,
                                57.37,23,47a154.6,154.6,0,0,1,14.26-21.5,1.5,1.5,0,0,0,
                                .3-1.27l-3-13.75c.76-.88,3.06-2.93,8-2.93,3.28,0,5.19,1.42,7.21,
                                2.92s4.43,3.29,8.21,3.29a26.65,26.65,0,0,0,8-1.12l-2.56,11.6a1.5,
                                1.5,0,0,0,.3,1.27A154.42,154.42,0,0,1,78,46.92C83.57,57.35,88.94,
                                71.41,82.69,79.18Z"/>
                                <path d="M58.5,53.5a1.5,1.5,0,0,0,3,
                                0c0-4.53-3.92-8.27-9-8.9V42.5a1.5,1.5,0,0,0-3,
                                0v2.1c-5.08.63-9,4.37-9,8.9s3.92,8.26,9,8.89v12c-3.42-.56-6-3-6-5.88a1.5,
                                1.5,0,0,0-3,0c0,4.53,3.92,8.28,9,8.9v2.1a1.5,1.5,0,0,0,3,0V77.4c5.08-.63,
                                9-4.38,9-8.9s-3.92-8.27-9-8.89v-12C55.92,48.18,58.5,50.6,58.5,53.5Zm-15,
                                0c0-2.9,2.58-5.32,6-5.88V59.38C46.08,58.82,43.5,56.4,43.5,53.5Zm15,15c0,
                                2.9-2.58,5.33-6,5.88V62.62C55.92,63.18,58.5,65.6,58.5,68.49Z"/>
                                <path d="M41.58,26.44A33.42,33.42,0,0,0,50.5,27.5a33.42,33.42,0,
                                0,0,8.92-1.06,1.5,1.5,0,1,0-.84-2.88,30.84,30.84,0,0,1-8.08.94,30.84,
                                30.84,0,0,1-8.08-.94,1.5,1.5,0,0,0-.84,2.88Z"/>
                            </svg>
                            <span style={{
                                fontSize: '2rem',
                                marginLeft: '10px'
                            }}>
                                {points}
                            </span>
                        </HeaderItem>
        
                        <HeaderItem style={{
                            fontSize: '2rem'
                        }}>
                            <span>{sessionStorage.getItem('name')}</span>
                            <Button
                                disabled={answer ? false : true}
                                style={{marginLeft: '16px'}} 
                                onClick={() => {
                                    sessionStorage.setItem('points', (+id + 1).toString());
                                    answer && sessionStorage.setItem(chunk['page-number'], answer);
                                    if (chunk['page-number'] === '8') {
                                        answer && (window.location.href = `/final/`)
                                    }
                                    else {
                                        answer && (window.location.href = `/question/${+id + 1}`);
                                    }
                                }}>
                                {'Submit'}
                            </Button>
                        </HeaderItem>
                    </Header>
{/* ---------body------------*/}
                    <Body>
                        <Paragraph id="text-holder"/>
                    </Body>
{/* ---------footer--------- */}
                    <Footer>
                        <Textarea
                            value={answer}
                            onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                                setAnswer(event.currentTarget.value);
                            }}
                        />
                    </Footer>
                </Wrapper>
            )
            : <NotFound />
    ));
}

export default { Question };
import * as React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '../Button';
import { TextField } from '../TextField';

import { Wrapper } from '../BorderWrapper';
import { useObserver } from 'mobx-react';
import { Paragraph } from './Paragraph';

const Header = styled.header`
    display: flex;

    width: 100%;

    flex-flow: row nowrap;

    justify-content: flex-start;
    align-items: flex-start;
`;

const Footer = styled.footer`
    display: flex;

    width: 100%;

    flex-flow: row nowrap;

    justify-content: flex-end;
    align-items: center;

    margin-top: auto;
`;

const CustomWrapper = styled(Wrapper)`
    background: #e9e9e9;

    flex: display;
    flex-flow: column nowrap;

    max-width: 500px;

    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

    @media only screen 
    and (min-device-width : 360px) 
    and (max-device-width : 860px) 
    and (-webkit-min-device-pixel-ratio: 2) { 
        width: 100%;
        font-size: 1.2rem;
        max-width: 100%;
    }
    @media only screen
    and (min-device-width : 360px) 
    and (max-device-width : 860px) 
    and (-webkit-min-device-pixel-ratio: 2)
    and (orientation : landscape) { 
        width: 100%;
        font-size: 1.2rem;
        max-width: 100%;
    }
    @media only screen 
    and (min-device-width : 360px) 
    and (max-device-width : 860px) 
    and (orientation : portrait) 
    and (-webkit-min-device-pixel-ratio: 2) { 
        width: 100%;
        font-size: 1.2rem;
        max-width: 100%;
    }
`;

const Home: React.FC = () => {

    const [name, setName] = React.useState('');

    return useObserver((): JSX.Element => (
        <React.Fragment>

            <Wrapper style={{
                flexFlow: 'column nowrap',
                position: 'relative',
                background: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(https://imperhans.ru/wp-content/uploads/2018/07/f84fff8a43f5434a52fc4a78dc529a8c.jpg)`,
                backgroundSize: 'cover',
                boxShadow: '0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)'
            }}>
                <Header>
                    <CustomWrapper>
                        <Paragraph>
                            {`Это история о невероятной смелости и отваге. История о том, как горстка советских бойцов остановила целую армаду немецких танков. Ровно 75 лет назад, 24 августа 1942 года, в разгар Сталинградской битвы, у хутора Малая Россошка состоялось сражение, которое до сих пор поражает проявленном в нем мужеством и отвагой.\n`}
                        </Paragraph>
                        <strong>{'Мы предлагаем вам стать частью этой истории и посмотреть изнутри на то, как совершали подвиг 33 бойца 87-й стрелковой дивизии.'}</strong>
                    </CustomWrapper>
                </Header>

        
                <Footer>
                    <TextField placeholder="Введите имя" style={{
                        marginRight: '16px'
                    }} 
                    value={name}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setName(event.currentTarget.value);
                    }}/>
                    <Button 
                        disabled={name ? false : true}
                        onClick={() => {
                            name && sessionStorage.setItem("name", name);
                            name && sessionStorage.setItem('points', '0');
                            name && (window.location.href = `question/${1}`);
                        }}
                    >
                    {`Начать`}
                    </Button>
                </Footer>
            </Wrapper>
        </React.Fragment>
    ))
};

export default Home;
import React from 'react';
import styled from 'styled-components';

const GridCard: React.FC<Props> = (props) => {
    const { iconUrl, title, desc } = props
    return (
        <Container>
            <img src={iconUrl} alt='' />
            <div>
                <h5>{title}</h5>
                <Description>{desc}</Description>
            </div>
        </Container>)
}
export default GridCard;

type Props = {
    iconUrl?: string
    title?: string
    desc?: string
}

const Container = styled.li`
    width: 48.5%;
    margin-bottom: 2em;
    opacity: 1;
    transform: none;
    list-style: none;
    & img {
        width: 100%;
        margin-block: 0px 1em;
    }
    & h5 {
        text-align: left;
        flex-start: 0;
        font-size: 1em;
        margin-block-start: 0 !important;
        margin-block-end: 0 !important;
    }
`
const Description = styled.p`
    font-size: 0.8em !import;
    font-family: 'NanumSquareNeoBold';
    text-align: left;
    white-space: pre-line;
    line-height: 2em;
`

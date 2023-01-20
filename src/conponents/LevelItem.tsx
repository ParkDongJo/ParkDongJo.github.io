import React from 'react';
import styled from 'styled-components';
import { LevelData } from './LevelList';

const LevelItem: React.FC<Props> = (props) => {
    const { level, tags } = props.data

    return (
        <Container>
            <div>{level}</div>
            <ul>
                {tags.map(({ title, color }) => {
                    return <li style={{ background: color }}>{title}</li>
                })}
            </ul>
        </Container>)
}
export default LevelItem;

type Props = {
    data: Omit<LevelData, "id">
}

const Container = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 1em;
    border-bottom: 1px solid rgb(46, 46, 46);
    padding-inline-start: 0 !important;
    div {
        flex: 1;
    }
    ul {
        flex: 2;
        display: grid;
        grid-template-columns: max-content max-content;
        gap: 1em;
        list-style: none;
    }
    li {
        display: block;
        padding: 0.5em 1.8em;
        border-radius: 1em;
        text-align: center;
        color: #FFF;
        font-family: 'NanumSquareNeoBold';
        font-size: 1.
    }
`

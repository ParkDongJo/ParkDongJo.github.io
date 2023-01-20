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
                    return <li style={{ color }}>{title}</li>
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
`

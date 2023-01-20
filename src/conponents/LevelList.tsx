import React from 'react';
import styled from 'styled-components';
import LevelItem from './LevelItem';

const LevelList: React.FC<Props> = (props) => {
    const { datas } = props

    return (
        <Container>
            {datas.map(({ id, ...rest }: LevelData) => {
                return <LevelItem key={id} data={{...rest}} />
            })}
        </Container>)
}
export default LevelList;

type Props = {
    datas: LevelData[]
}

export type LevelData = {
    id: number
    level: string
    tags: TagData[]
}
type TagData = {
    title: string
    color: string
}

const Container = styled.ul`
    width: 960px;
    margin: 0 auto;
    border-top: 2px solid rgb(118, 118, 118);
    padding-inline-start: 0 !important;
`

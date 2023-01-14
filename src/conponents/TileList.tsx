import React from 'react';
import styled from 'styled-components';
import ArrowIconTile, { ArrowType } from './ArrowIconTile';

const TileList: React.FC<Props> = (props) => {
    const { children } = props

    return (
        <Container>
            <ArrowIconTile arrow={ArrowType.Right} title={"테스트 1"} desc={"해보자해보자"} gridArea={"a / a / a / a"}/>
            <ArrowIconTile arrow={ArrowType.Right} title={"테스트 2"} desc={"해보자해보자"} gridArea={"b / b / b / b"}/>
            <ArrowIconTile arrow={ArrowType.Down} title={"테스트 1"} desc={"해보자해보자"} gridArea={"c / c / c / c"}/>
            <ArrowIconTile arrow={ArrowType.None} title={"테스트 2"} desc={"해보자해보자"} gridArea={"d / d / d / d"}/>
            <ArrowIconTile arrow={ArrowType.Left} title={"테스트 2"} desc={"해보자해보자"} gridArea={"e / e / e / e"}/>
            <ArrowIconTile arrow={ArrowType.Left} title={"테스트 2"} desc={"해보자해보자"} gridArea={"f / f / f / f"}/>
        </Container>
    )
}
export default TileList

type Props = {
    children: React.ReactElement
}

const Container = styled.div`
    width: 1080px;
    margin: 0 auto;
    display: grid;
    gap: 2em;
    grid-template-areas:
        "a a b b c c"
        "d d e e f f";
`

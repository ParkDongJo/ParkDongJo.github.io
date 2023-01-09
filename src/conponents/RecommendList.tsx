import React, { useState } from 'react';
import styled from 'styled-components';

const RecommendList: React.FC<Props> = (props) => {
    const { datas } = props

    return (
        <Container>
            {datas.map(({ id, iconUrl, recommend }: RecommendData) => (
                <Row key={id}>
                    <img src={iconUrl} alt='' />
                    <Recommend>{recommend}</Recommend>
                </Row>
            ))}
        </Container>
    )
}
export default RecommendList;

type Props = {
    datas: RecommendData[]
}
type RecommendData = {
    id: number
    iconUrl: string
    recommend: string
}

const Container = styled.div`
`
const Row = styled.div`
    max-width: 640px;
    display: flex;
    flex-direction: row;
    padding: 30px 20px;
    margin-bottom: 20px;
    box-shadow: 0px 30px 50px 0px rgb(5 1 64 / 6%) !important;

    & img {
        width: 100px;
        height: 100px;
        border-radius: 40px;
        margin-right: 30px;
    }
`
const Recommend = styled.p`
    font-size: 1em !important;
    font-family: 'NanumSquareNeoBold';
    text-align: left;
    white-space: pre-line;
    line-height: 2em;
`

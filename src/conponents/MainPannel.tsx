import React from 'react';
import styled from 'styled-components';

const MainPannel: React.FC<Props> = (props) => {
    const { subTitleChild } = props

    return (
        <Container>
            <Title>당신의 새로운 도전을 가볍고 빠르게</Title>
            <SubTitle>
                {subTitleChild}
            </SubTitle>
        </Container>
    )
}
export default MainPannel;

type Props = {
    subTitleChild: JSX.Element
}

const Container = styled.div`
    width: 100%;
    z-index: 9999;
    color: rgba(0, 0, 0, 0.87);
    text-align: center;
    padding: 120px 0;
`
const Title = styled.h3`
    font-size: 2em;
`
const SubTitle = styled.div`
    font-family: 'NanumSquareNeoBold';
    font-size: 1em;
`

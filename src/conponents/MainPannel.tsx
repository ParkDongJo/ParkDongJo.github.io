import React from 'react';
import styled from 'styled-components';

const MainPannel: React.FC<Props> = (props) => {
    const { title, subTitleChild } = props

    return (
        <Container>
            <Title>{title}</Title>
            <SubTitle>
                {subTitleChild}
            </SubTitle>
        </Container>
    )
}
export default MainPannel;

type Props = {
    title: string
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

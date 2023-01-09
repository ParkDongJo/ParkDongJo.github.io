import React from 'react';
import styled from 'styled-components';

const ProcessList: React.FC<Props> = (props) => {
    const { datas } = props

    return (
        <Container>
            {datas.map(({ id, iconUrl, title, desc }: ProcessData) => (
                <Row key={id}>
                    <img src={iconUrl} alt='' />
                    <div>
                        <h3>{title}</h3>
                        <Description>{desc}</Description>
                    </div>
                </Row>
            ))}
        </Container>
    )
}
export default ProcessList;

type Props = {
    datas: ProcessData[]
}
type ProcessData = {
    id: number
    iconUrl: string
    title: string
    desc: string
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
        width: 120px;
        height: 120px;
        border-radius: 40px;
        margin-right: 30px;
        padding-top: 30px;
    }
    & div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: left;
        padding-left: 20px;
        & h5, p {
            margin: 4px 0 !important;
        }
    }
`
const Description = styled.p`
    font-size: 0.8em !important;
    font-family: 'NanumSquareNeoBold';
    text-align: left;
    white-space: pre-line;
    line-height: 2em;
`

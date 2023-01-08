
import React from 'react';
import styled from 'styled-components';

const InterViewList: React.FC<Props> = (props) => {
    const { datas } = props

    return (
        <Container>
            {datas.map(({ id, profileUrl, title, position, shortWord }: InterViewData) => (
                <Row key={id}>
                    <img src={profileUrl} alt='' />
                    <div>
                        <h5>{title}</h5>
                        <p>{position}</p>
                        <Description>{shortWord}</Description>
                    </div>
                </Row>
            ))}
        </Container>
    )
}
export default InterViewList;

type Props = {
    datas: InterViewData[]
}
type InterViewData = {
    id: number
    profileUrl: string
    title: string
    position: string
    shortWord: string 
}

const Container = styled.div`
    width: 640px;
    padding: 20px 0;
`
const Row = styled.div`
    max-width: 640px;
    font-size: 1em;
    margin-bottom: 40px;
    padding: 30px 20px;
    display: flex;
    flex-direction: row;
    box-shadow: 0px 30px 50px 0px rgb(5 1 64 / 6%) !important;
    & img {
        width: 80px;
        height: 80px;
        border-radius: 40px;
        margin-right: 30px;
    }
    & div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        text-align: left;
        border-left: 1px solid rgba(0, 0, 0, 0.5);
        padding-left: 20px;
        & h5, p {
            margin: 4px 0 !important;
        }
    }
`
const Description = styled.p`
    padding-top: 20px;
    font-size: 0.8em !important;
    font-family: 'NanumSquareNeoBold';
    white-space: pre-line;
    line-height: 30px;
`

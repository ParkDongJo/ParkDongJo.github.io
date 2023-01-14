import React from "react"
import styled from "styled-components"

const CARD_WIDTH = 230

const LongCard: React.FC<Props> = (props) => {
    const { iconUrl, title, desc } = props

    return (
        <Container>
            <img width={CARD_WIDTH} height={CARD_WIDTH} src={iconUrl} alt='' />
            <div>
                <h3>{title}</h3>
                <Description>{desc}</Description>
            </div>
        </Container>
    )
}
export default LongCard

type Props = {
    iconUrl?: string
    title?: string
    desc?: string
}

const Container = styled.div`
    width: ${CARD_WIDTH}px;
    padding: 10px 30px;
    background-color: #FFF;
    box-shadow: 0px 30px 50px 0px rgb(5 1 64 / 6%) !important;

`
const Description = styled.p`
    font-size: 0.8em !important;
    font-family: 'NanumSquareNeoBold';
    text-align: left;
    white-space: pre-line;
    line-height: 2em;
`

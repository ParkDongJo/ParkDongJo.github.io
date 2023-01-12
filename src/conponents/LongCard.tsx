import React from "react"
import styled from "styled-components"

const LongCard: React.FC<Props> = (props) => {
    const { iconUrl, title, desc } = props
    return (
        <Container>

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
    background-color: blue;
    border: 1px solid #FFF;
    flex: 0 0 25%;
    max-width: 25%;
    padding: 8px !important;
`
const Description = styled.p`
    font-size: 0.8em !important;
    font-family: 'NanumSquareNeoBold';
    text-align: left;
    white-space: pre-line;
    line-height: 2em;
`

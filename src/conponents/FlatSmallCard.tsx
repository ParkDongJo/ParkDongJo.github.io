import React from "react"
import styled from "styled-components"

const FlatSmallCard: React.FC<Props> = (props) => {
    const { iconUrl, desc } = props
    return (
        <Container>
            <img src={iconUrl} alt='' />
            <Description>{desc}</Description>
        </Container>
    )
}
export default FlatSmallCard

type Props = {
    iconUrl: string
    desc: string
}

const Container = styled.div`
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
const Description = styled.p`
    font-size: 1em !important;
    font-family: 'NanumSquareNeoBold';
    text-align: left;
    white-space: pre-line;
    line-height: 2em;
`

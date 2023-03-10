import React from "react"
import styled from "styled-components"

const FlatCard: React.FC<Props> = (props) => {
    const { iconUrl, title, desc } = props
    return (
        <Container>
            <img src={iconUrl} alt='' />
            <div>
                <h3>{title}</h3>
                <Description>{desc}</Description>
            </div>
        </Container>
    )
}
export default FlatCard

type Props = {
    iconUrl?: string
    title?: string
    desc?: string
}

const Container = styled.div`
    width: 640px;
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
    font-size: 1em !important;
    font-family: 'NanumSquareNeoBold' !important;
    text-align: left;
    white-space: pre-line;
    line-height: 2em;
`

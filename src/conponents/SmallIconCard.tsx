import React from "react"
import styled from "styled-components"

const SmallIconCard: React.FC<Props> = (props) => {
    const { iconUrl, title, desc } = props

    return (
        <Container>
            <Icon src={iconUrl} alt='' />
            <div>
                <h3>{title}</h3>
                <Description>{desc}</Description>
            </div>
        </Container>
    )
}
export default SmallIconCard

type Props = {
    iconUrl?: string
    title?: string
    desc?: string
}

const Container = styled.div`
    width: 310px;
    height: 210px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5rem;
    margin-right: 1.5rem;
    margin-bottom: 1.5rem;
    border-radius: 1rem;
    background-color: rgb(249, 250, 252);
    h3 {
        text-align: left;
    }
`
const Icon = styled.img`
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 0.75rem;
    -webkit-flex-shrink: 0;
    -ms-flex-negative: 0;
    flex-shrink: 0;
`
const Description = styled.p`
    font-size: 0.8em !important;
    font-family: 'NanumSquareNeoBold';
    text-align: left;
    white-space: pre-line;
    line-height: 2em;
`

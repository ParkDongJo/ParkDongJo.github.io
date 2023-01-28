import React from "react"
import styled from "styled-components"

const FlatCollapse: React.FC<Props> = (props) => {
    const { title, desc } = props
    return (
        <Container>
            <div>
                <h3>{title}</h3>
                <Description>{desc}</Description>
            </div>
        </Container>
    )
}
export default FlatCollapse

type Props = {
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
`
const Description = styled.p`
`

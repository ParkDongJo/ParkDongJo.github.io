import React from 'react';
import styled from 'styled-components';

const CourseRow: React.FC<Props> = (props) => {
    const { visiable, intro, steps } = props
    return (
        <Container visiable={visiable}>
            <h3>{intro}</h3>
            <StepList>
                {steps.map(({id, title, desc}) => (
                    <li key={id}>
                        <p>{title}</p>
                        <p>{desc}</p>
                    </li>
                ))}
            </StepList>
        </Container>
    )
}
export default CourseRow;

type Props = {
    visiable: boolean
    intro: string
    steps: Step[]
}
export type CourseData = {
    id: string
    iconUrl: string
    title: string
    desc: string
    intro: string
    steps: Step[]
}
export type Step = {
    id: number
    title: string
    desc: string
}
const Container = styled.div<{visiable: boolean}>`
    max-height: ${(props) => props.visiable ? "600px" : "0px"};
    -webkit-transition: max-height 1s; 
    -moz-transition: max-height 1s; 
    -ms-transition: max-heigvht 1s; 
    -o-transition: max-height 1s; 
    transition: max-height 1s;
    overflow: hidden;
`

const StepList = styled.ul`
    list-style: none;
    text-align: left;
`

 
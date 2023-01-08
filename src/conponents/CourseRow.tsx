import React from 'react';
import styled from 'styled-components';

const CourseRow: React.FC<Props> = (props) => {
    const { visiable, intro, steps } = props
    return (
        <Container>
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
    id: number
    iconUrl: string
    title: string
    desc: string
    intro: string
    steps: Step[]
}
export type Step = {
    title: string
    desc: string
    period: string
}

const Container = styled.div`
    
`

 
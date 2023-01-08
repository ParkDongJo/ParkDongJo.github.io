import React, { useState } from 'react';
import styled from 'styled-components';
import CourseRow, { CourseData, Step } from './CourseRow'

const CourseList: React.FC<Props> = (props) => {
    const { datas } = props
    const [selectedRowId, setSelectedRowId] = useState<number>()
    const onClickRow = (id: number) => {
        setSelectedRowId(id)
    }

    return (
        <Container>
            {datas.map(({ id, iconUrl, title, desc, ...rest }: CourseData) => (
                <Row>
                    <Head folded={selectedRowId === id} onClick={() => { onClickRow(id) }}>
                        <img src={iconUrl} alt='' />
                        <div>
                            <h5>{title}</h5>
                            <Description>{desc}</Description>
                        </div>
                    </Head>
                    <CourseRow visiable={selectedRowId === id} {...rest} />
                </Row>
            ))}
        </Container>
    )
}
export default CourseList;

type Props = {
    datas: CourseData[]
}

const Container = styled.div`
    
`
const Row = styled.div`
    
`
const Head = styled.div<{folded: boolean}>`
    font-size: 1em;
    padding: 10px 15px;
    & img {
        width: 60px;
        height: 60px;
    }
    & div {
        
    }
`
const Description = styled.div`
    font-size: 0.8em !import;
    font-family: 'NanumSquareNeoBold';
    white-space: pre-line
`

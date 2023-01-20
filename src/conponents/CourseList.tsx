import React, { useState } from 'react';
import styled from 'styled-components';
import CourseRow, { CourseData, Step } from './CourseRow'

const CourseList: React.FC<Props> = (props) => {
    const { datas } = props
    const [selectedRowId, setSelectedRowId] = useState<string>()

    const onClickRow = (id: string) => {
        if (selectedRowId) {
            setSelectedRowId(undefined)
            return
        }
        setSelectedRowId(id)
    }

    return (
        <Container>
            {datas.map(({ id, iconUrl, title, desc, ...rest }: CourseData) => (
                <Row key={id}>
                    <Head folded={false} onClick={() => { onClickRow(id) }}>
                        <img src={iconUrl} alt='' />
                        <div>
                            <h5>{title}</h5>
                            <Description>{desc}</Description>
                        </div>
                    </Head>
                    <CourseRow visiable={!!selectedRowId && selectedRowId === id} {...rest} />
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
    width: 960px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Row = styled.div`
`
const Head = styled.div<{folded: boolean}>`
    max-width: 640px;
    font-size: 1em;
    padding: 30px 20px 20px 20px;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid rgba(0, 0, 0, 0.5);
    & img {
        width: 60px;
        height: 60px;
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
        & h5 {
            font-family: 'NanumSquareNeoExtraBold';
            font-size: 1.3em;
        }
        & p {
            font-family: 'NanumSquareNeo';
            font-size: 1em;
        }
    }
    &:hover {
        cursor: pointer;
    }
`
const Description = styled.p`
    font-size: 0.8em !import;
    font-family: 'NanumSquareNeoBold';
    white-space: pre-line
`

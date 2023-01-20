import React from 'react';
import styled from 'styled-components';
import MainPannel from '../conponents/MainPannel'
import CourseList from '../conponents/CourseList'
import LevelList from  '../conponents/LevelList'
import courses from '../fixtures/courses.json'

const Course: React.FC = () => {
    return (
        <>
            <HeadContents>
                <MainPannel 
                    title="당신의 새로운 도전을 가볍고 빠르게"
                    subTitleChild={
                        <>
                        <p>개발자가 되는 길은 꽤나 큰 진입장벽이 있습니다.</p>
                        <p>컴퓨터에 대해 1도 모르던 비전공자가 고작 3,6개월만 가지고 개발자가 될 수 없습니다.</p>
                        <p>하지만 <Strong>단 1개월</Strong> 동안</p>
                        <p>목표에 가장 빠르게 도달하는 방법은 단계를 잘게 쪼개고 몸집을 최소화 하는 겁니다.</p>
                        <p>그래야 다음 결정을 더 빠르고 정확하게 할 수 있습니다.</p>
                        </>}
                />
            </HeadContents>
            <MainContents>
                <BackgroundLayout bgColor={"#ffffff"}>
                    <h2>태크트렉 종류</h2>
                    <p>아래의 고민을 가지고 계신 분은 지금 바로 신청하세요!</p>
                    <CourseList datas={courses} />
                </BackgroundLayout>
                <BackgroundLayout bgColor={"#fafafa"}>
                    <h2>어떻게 진행되나요?</h2>
                    <p>아래의 고민을 가지고 계신 분은 지금 바로 신청하세요!</p>
                    <LevelList datas={[
                        {id: 1, level: 1, tags: [{title: "초급", color: "#ff0000"}, {title: "초급", color: "#ff0000"}]},
                        {id: 2, level: 2, tags: [{title: "중급", color: "#00ff00"}]},
                        {id: 3, level: 3, tags: [{title: "고급", color: "#0000ff"}]},
                    ]} />
                </BackgroundLayout>
            </MainContents>
        </>
    )
}
export default Course;

const HeadContents = styled.div`
    max-width: 640px;
`
const MainContents = styled.div`
    width: 100%;
    margin-bottom: 60px;
`
const Strong = styled.strong`
    font-family: 'NanumSquareNeoExtraBold';
    color: rgba(0, 0, 0, 1);
    font-size: 1.2em;
`
const BackgroundLayout = styled.div<{ bgColor: string }>`
    padding: 5em 0;
    background-color: ${(props) => props.bgColor};
    > h2 {
        font-size: 30px;
    }
    > p {
        font-family: 'NanumSquareNeoBold';
        font-size: 1em;
        margin-bottom: 40px;
    }
    > button {
        margin: 0 10px;
    }
`

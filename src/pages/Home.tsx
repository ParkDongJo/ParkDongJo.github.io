import React from 'react';
import styled from 'styled-components';
import MainPannel from '../conponents/MainPannel'
import ProcessList from '../conponents/ProcessList'
import RecommendList from '../conponents/RecommendList'
import recommends from '../fixtures/recommends.json'
import processes from '../fixtures/processes.json'

const Home: React.FC = () => {
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
                <h2>어떻게 진행되나요?</h2>
                <ProcessList datas={processes} />
                <h2>누구를 위한 과정인가요?</h2>
                <p>아래의 고민을 가지고 계신 분은 지금 바로 신청하세요!</p>
                <RecommendList datas={recommends} />
            </MainContents>
        </>
    )
}
export default Home;

const HeadContents = styled.div`
    max-width: 640px;
`
const MainContents = styled.div`
    max-width: 640px;
    margin-bottom: 60px;
    > p {
        font-family: 'NanumSquareNeoExtraBold';
        font-size: 1em;
    }
`
const Strong = styled.strong`
    font-family: 'NanumSquareNeoExtraBold';
    color: rgba(0, 0, 0, 1);
    font-size: 1.2em;
`

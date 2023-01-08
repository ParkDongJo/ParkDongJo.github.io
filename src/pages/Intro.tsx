import React from 'react';
import styled from 'styled-components';
import MainPannel from '../conponents/MainPannel'
import InterViewList from '../conponents/InterViewList'
import interviews from '../fixtures/interviews.json'

const Intro: React.FC = () => {
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
                <h2>코치들의 한마디</h2>
                <InterViewList datas={interviews} />
            </MainContents>
        </>
    )
}
export default Intro;

const HeadContents = styled.div`
    max-width: 640px;
`
const MainContents = styled.div`
    max-width: 640px;
    margin-bottom: 60px;
`
const Strong = styled.strong`
    font-family: 'NanumSquareNeoExtraBold';
    color: rgba(0, 0, 0, 1);
    font-size: 1.2em;
`

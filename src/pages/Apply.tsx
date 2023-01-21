import React from 'react';
import styled from 'styled-components';
import MainPannel from '../conponents/MainPannel'
import IconCardList, { CardType } from '../conponents/IconCardList';
import SmallIconCard from '../conponents/SmallIconCard';
import processes from '../fixtures/processes.json'


const Apply: React.FC = () => {
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
                    <h2>태크트렉 선수자질</h2>
                    <p>우리는 이런 선수를 찾습니다.</p>
                    <IconCardList width={1200} datas={processes} type={CardType.Medium}>
                        <SmallIconCard />
                    </IconCardList>
                </BackgroundLayout>
            </MainContents>
        </>
    )
}
export default Apply;

const HeadContents = styled.div`
  max-width: 640px;
`
const Strong = styled.strong`
    font-family: 'NanumSquareNeoExtraBold';
    color: rgba(0, 0, 0, 1);
    font-size: 1.2em;
`
const MainContents = styled.div`
    width: 100%;
    margin-bottom: 60px;
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

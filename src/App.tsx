import React from 'react';
import styled from 'styled-components'
import Header from './conponents/Header'
import Bottom from './conponents/Bottom'
import TopBackground from './conponents/TopBackground'
import Home from './pages/Home'
import Intro from './pages/Intro'
import Course from './pages/Course'
import Apply from './pages/Apply'
import NoMatch from './pages/NoMatch'
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation()
  const content = topContents[location.pathname]
  
  return (
    <Container>
      <Header />
      {content && <TopBackground title={content.title} subTitle={content.subTitle} bgImageUrl={content.bgImageUrl} />}
      <Body>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="intro" element={<Intro />} />
          <Route path="course" element={<Course />} />
          <Route path="apply" element={<Apply />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Body>
      <Bottom />
    </Container>
  );
}
export default App;

const topContents: KeyStringDatas = {
  "/": { title: "단기간 코스", subTitle: "쇼트트랙은 단기간 내에 끝낼 수 있는 밀착형 랜선과외 입니다.", bgImageUrl: "https://woowacourse.github.io/img/about_banner.1aa0bc91.jpg" },
  "/intro": { title: "쇼트트렉의 목표", subTitle: "당신이 빠르고 신속하게 도전하고, 실패하고, 실험할 수 있게끔 코칭합니다.", bgImageUrl: "https://woowacourse.github.io/img/about_banner.1aa0bc91.jpg" },
  "/course": { title: "커리큘럼", subTitle: "쇼트트렉의 모든 커리큘럼은 1달 안에 이뤄집니다.", bgImageUrl: "https://woowacourse.github.io/img/about_banner.1aa0bc91.jpg" },
  "/apply": { title: "지원하기", subTitle: "지원하기 전 나에게 맞는 과정인지 확인해보세요.", bgImageUrl: "https://woowacourse.github.io/img/about_banner.1aa0bc91.jpg" },
}
type KeyStringDatas = {
  [key: string]: any
}

const Container = styled.div`
  flex: 1;
`
const Body = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

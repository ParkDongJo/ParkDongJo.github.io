import React from 'react';
import styled from 'styled-components'
import Header from './conponents/Header'
import Bottom from './conponents/Bottom'
import TopBackground from './conponents/TopBackground'
import Home from './pages/Intro'
import Intro from './pages/Intro'
import Course from './pages/Course'
import Apply from './pages/Apply'
import NoMatch from './pages/NoMatch'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container>
      <Header />
      <TopBackground title="" subTitle="" bgImageUrl={""} />
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

const Container = styled.div`
  flex: 1;
`
const Body = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
`
const Contents = styled.div`
  max-width: 640px;
`
const Strong = styled.strong`
    font-family: 'NanumSquareNeoExtraBold';
    color: rgba(0, 0, 0, 1);
    font-size: 1.2em;
`

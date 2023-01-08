import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


const Header: React.FC = () =>  {

    return (
        <Container>
            <Bar>
                <RightBox>
                    <span>쇼트트랙</span>
                </RightBox>
                <Spacer />
                <MenuRow><Link to="/intro"><span>소개</span></Link></MenuRow>
                <MenuRow><Link to="/course"><span>커리큘럼</span></Link></MenuRow>
                <MenuRow><Link to="/apply"><span>지원하기</span></Link></MenuRow>
            </Bar>
        </Container>
    )
}
export default Header

const Container = styled.header`
    height: 64px;
    margin-top: 0px;
    transform: translateY(0px);
    position: absolute;
    left: 0px;
    right: 0px;
    z-index: 999;
`
const Bar = styled.div`
    align-items: center;
    display: flex;
    z-index: 0
    height: 64px;
    padding: 4px 16px;
    background-color: ransparent !important;
`
const RightBox = styled.div`
    width: 200px;
    height: 64px;
    text-align: center;
    line-height: 64px;
    color: #FFFFFF;
    font-size: 1.5rem;
`
const Spacer = styled.div`
    flex-grow: 1 !important;
`
const MenuRow = styled.span`
    & a {
        height: 36px;
        min-width: 64px;
        padding: 0 16px;
        font-size: 0.875rem;
        color: #FFFFFF;
        cursor: pointer;
        align-items: center;
        border-radius: 4px;
        display: inline-flex;
        flex: 0 0 auto;
        font-weight: 700;
        justify-content: center;
        outline: 0;
        text-decoration: none;
        text-transform: uppercase;
        transition-duration: 0.28s;
        transition-property: box-shadow, transform, opacity;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        vertical-align: middle;
        white-space: nowrap;
    }
    &:hover {
        background-color: rgba(255, 255, 255, 0.2)
    }
`
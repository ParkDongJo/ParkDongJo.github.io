import React from 'react';
import styled from 'styled-components';

const TopBackground: React.FC<Props> = (props) => {
    const { title, subTitle, bgImageUrl } = props

    return (
        <Container>
            <BgImgage>
                <Blur />
                <TitleLayout>
                    <Title>쇼트트렉의 목표</Title>
                    <SubTitle>빠르고 신속하게 도전하고 실패하는 것입니다.</SubTitle>
                </TitleLayout>
            </BgImgage>
        </Container>
    )
}
export default TopBackground

type Props = {
    title: string
    subTitle: string
    bgImageUrl: string
}
const Container = styled.div`
    flex: 1 1 auto;
    width: 100%;
    height: 650px;
    position: relative;
    top: 0;
    left: 0;
    box-shadow: 0px 0px 0px 0px rgb(0 0 0 / 20%), 0px 0px 0px 0px rgb(0 0 0 / 14%), 0px 0px 0px 0px rgb(0 0 0 / 12%);
`
const BgImgage = styled.div`
    max-width: 100%;
    height: 650px;
    background-repeat: no-repeat;
    box-sizing: inherit;
    background-image: url(https://woowacourse.github.io/img/about_banner.1aa0bc91.jpg);
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Blur = styled.div`
    width: 100%;
    height: 650px;
    opacity: 0.46;
    position: absolute;
    background-color: rgb(33, 33, 33);
    border-color: rgb(33, 33, 33);
`
const TitleLayout = styled.div`
    width: 100%;
    z-index: 9999;
    color: #FFFFFF;
    text-align: center;
`
const Title = styled.h1`
    font-size: 3em;
    font-weight: 700;
`
const SubTitle = styled.p`
    font-family: 'NanumSquareNeoBold';
    font-size: 1em;
`

import React from 'react';
import styled from 'styled-components';

export enum CardType {
    Flat = "Flat",
    Long = "Long"
}
const IconCardList: React.FC<Props> = (props) => {
    const { datas, type, children } = props
    const direction = type === CardType.Flat ? "column" : " row"

    return (
        <Container direction={direction}>
            {datas.map(({ id, ...rest }: CardData) => {
                return <>
                    {React.cloneElement(children, {...rest})}
                </>
            })}
        </Container>
    )
}
export default IconCardList;

type Props = {
    children: React.ReactElement
    type: CardType
    datas: CardData[]
}
type CardData = {
    id: number
    iconUrl: string
    title?: string
    desc: string
}

const Container = styled.div<{ direction: string }>`
    width: 960px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${(props) => props.direction};
`

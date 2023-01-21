import React from 'react';
import styled from 'styled-components';

export enum CardType {
    Flat = "Flat",
    Long = "Long",
    Medium = "Medium"
}

const IconCardList: React.FC<Props> = (props) => {
    const { width = 960, datas, type, children } = props
    const direction = {
        [CardType.Flat]: "column",
        [CardType.Long]: "row",
        [CardType.Medium]: "row"
    }[type]
    return (
        <Container width={width} direction={direction}>
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
    width?: number
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

const Container = styled.div<{ width: number; direction: string }>`
    width: ${(props) => props.width}px};
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    flex-direction: ${(props) => props.direction};
    gap: 20px;
`

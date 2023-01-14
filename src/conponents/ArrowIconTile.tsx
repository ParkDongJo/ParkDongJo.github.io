import React from 'react';
import styled from 'styled-components';

export enum ArrowType {
    Up = 'left: 50%',
    Right = 'top: 50%; right: -50px;',
    Down = 'top: 108%;',
    Left = 'top: 50%; left: -10px;',
    None = '',
}
const ArrowIconTile: React.FC<Props> = (props) => {
    const { arrow, title, desc, gridArea } = props
    const icon = {
        [ArrowType.Up]: "/images/up-arrow-icon.png",
        [ArrowType.Right]: "/images/right-arrow-icon.png",
        [ArrowType.Down]: "/images/down-arrow-icon.png",
        [ArrowType.Left]: "/images/left-arrow-icon.png",
        [ArrowType.None]: "",
    }[arrow]

    return (
        <Container icon={icon} arrow={arrow} gridArea={gridArea}>
            <Title>{title}</Title>
            <Description>{desc}</Description>
        </Container>
    )
}
export default ArrowIconTile;

type Props = Omit<TileData, 'id'> & { gridArea: string }
type TileData = {
    arrow: ArrowType
    title: string
    desc: string
}

const Container = styled.div<{ icon: string; arrow: ArrowType; gridArea: string }>`
    position: relative;
    padding: 1.5em 1em 1.5em 1em;
    opacity: 1;
    transform: none;
    grid-area: ${(props) => props.gridArea};
    box-shadow: 0px 30px 50px 0px rgb(5 1 64 / 6%) !important;
    :after {
        content: "";
        background-image: url(${(props) => props.icon});
        background-size: 40px 40px;
        display:inline-block;
        width: 40px;
        height: 40px;
        position: absolute;
        ${(props) => props.arrow}
        transform: translate(-50%, -50%);
    }
`
const Title = styled.p`
    font-size: 1.2em;
    font-family: 'NanumSquareNeoBold';
`
const Description = styled.p`
    font-size: 0.8em;
    font-family: 'NanumSquareNeo';
`

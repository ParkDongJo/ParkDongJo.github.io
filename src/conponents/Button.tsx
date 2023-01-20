import React from "react";
import styled from "styled-components";

export enum ButtonType {
    Primary = "Primary",
    Secondary = "Secondary"
}

const Button: React.FC<Props> = (props) => {
    const { title = "버튼", type, size, onPress } = props
    
    return (
        <StyledButton
            width={WIDTH[size]}
            bgColor={BG_COLOR[type]}
            fontSize={FONTSIZE[size]}
            padding={PADDING[size]}
            onClick={onPress}>{title}</StyledButton>
    )
}
export default Button

type Props = {
    title: string
    type: ButtonType
    size: "small" | "medium" | "large"
    onPress: () => void
}
const BG_COLOR = {
    [ButtonType.Primary]: "#000",
    [ButtonType.Secondary]: "#fff"
}
const WIDTH = {
    small: "100px",
    medium: "200px",
    large: "300px"
}
const FONTSIZE = {
    small: "14px",
    medium: "16px",
    large: "18px"
}
const PADDING = {
    small: "10px",
    medium: "20px",
    large: "30px"
}

const StyledButton = styled.button<{ width: string; bgColor: string; fontSize: string; padding: string }>`
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 4px;
    padding: ${(props) => props.padding};
    width: ${(props) => props.width};
    font-size: ${(props) => props.fontSize};
    hover: {
        background-color: rgba(0, 0, 0, 1);
        ponter: cursor;
    }
 `

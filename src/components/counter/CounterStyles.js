import styled, { css } from "styled-components";

export const CounterContainerStyled =
    styled.div `
    display: flex;
    flex-ddirection: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    height: calc(100vh - 30px);
    `;

export const CounterButtonContainerStyled =
    styled.div `
        display: flex;
        justify-content: center;
        align-items: center;

        & p {
            display: flex;
            align-items: center;
            margin: 0;
            margin-bottom: 3px;
            font-size: 20px;
            color: white;
        }
        
    `;

export const CounterSpanStyled = styled.span `
        padding: 10px;
        min-with: 100px;
        font-size: 25px;
    `;

export const CounterButtonStyled = styled.button `
        padding: 10px 30px;
        background: red;
        border: 3px solid white;

        ${ (props) => props.left && css`
            border-top-left-radius: 9px;
            border-bottom-left-radius: 9px;
        `}

        ${ (props) => props.right && css`
            border-top-right-radius: 9px;
            border-bottom-right-radius: 9px;
        `}

        cursor: pointer;
    `;
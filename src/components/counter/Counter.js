import React, { useReducer } from "react";
import {
    CounterButtonContainerStyled,
    CounterButtonStyled,
    CounterContainerStyled,
    CounterSpanStyled

} from "./CounterStyles";

import { AiOutlinePlusCircle, AiOutlineMinusCircle  } from "react-icons/ai";
// clase 3.5
import { FiDivideCircle } from "react-icons/fi";
import { FaRegTimesCircle } from "react-icons/fa";
import { RiNumber5 } from "react-icons/ri";
import { BiReset } from "react-icons/bi";
import {TYPES, types } from "../../actionTypes/countActions";
import { counterInitialState, counterReducer } from "../../reducers/countReducer";

const Counter = () => {

    const [ state, dispatch] = useReducer (counterReducer, counterInitialState);

    const handlerIncrement = () => {
        dispatch ({ type: TYPES.INCREMENT})
    };
    const handlerDecrement = () => {
        dispatch ({ type: TYPES.DECREMENT})
    };
    const handlerDecrement_5 = () => {
        dispatch ({ type: TYPES.DECREMENT_5})
    };
    const handlerIncrement_5 = () => {
        dispatch ({ type: TYPES.INCREMENT_5})
    };
    const handlerMultiplicate = () => {
        dispatch ({ type: TYPES.MULTIPLICATE})
    };
    const handlerDivide = () => {
        dispatch ({ type: TYPES.DIVIDE})
    };
    const handlerReset = () => {
        dispatch ({ type: TYPES.RESET})
    };
    
    return (
    <CounterContainerStyled >

        <CounterButtonContainerStyled >
            
            <CounterButtonStyled 
                onClick={handlerDivide}>
                2 <FiDivideCircle
                    size= "32px" color="orange"></FiDivideCircle>
            </CounterButtonStyled> 
            
            <CounterButtonStyled 
                onClick={handlerDecrement_5}>
                <p>
                    - <RiNumber5 
                        size= "32px" color="black"></RiNumber5>
                </p>
            </CounterButtonStyled> 
        
            <CounterButtonStyled 
                onClick={handlerDecrement}>
                <AiOutlineMinusCircle 
                    size= "32px" 
                    color="orange"
                    >
                    </AiOutlineMinusCircle>
            </CounterButtonStyled> 

            <CounterSpanStyled size= "52px" color="black">
                {state.count}
            </CounterSpanStyled> 

            <CounterButtonStyled 
                onClick={handlerIncrement}>
                <AiOutlinePlusCircle 
                    size= "32px" 
                    color="orange"
                    >

                    </AiOutlinePlusCircle>
            </CounterButtonStyled> 

            <CounterButtonStyled 
                onClick={handlerIncrement_5}>
                <p>
                    + <RiNumber5 
                        size= "32px" 
                        color="black">

                    </RiNumber5>
                </p>
            </CounterButtonStyled> 

            <CounterButtonStyled 
                onClick={handlerMultiplicate}
                size= "32px" >
                2 <FaRegTimesCircle 
                    size= "32px" 
                    color="orange">
                    
                </FaRegTimesCircle>
            </CounterButtonStyled> 

        </CounterButtonContainerStyled>

        <BiReset
            cursor="pointer"
            size="38px"
            color="#f24c4c"
            onClick={handlerReset}
            ></BiReset>    

    </CounterContainerStyled>

    
    );
};

export default Counter;
import React, { useRef, useContext, memo } from 'react';

import { GlobalContext } from '../../App';

import '../../App.css';

export const InputMoMemo = () =>  {

    const inputRef = useRef(null);
    const {dispatch, state: {inputValue, editingCity}} = useContext(GlobalContext);

    const handleOnAdd = () => {
        if (inputValue.length){
            dispatch({
                type: 'ADD CITY',
                payload: inputValue,
            });
            dispatch({
                type: 'RESET INPUT VALUE',
                payload: inputValue,
            })
            inputRef.current.focus();   
        }
    }

    const handleOnDone = () => {
        if (inputValue.length){
            dispatch({
                type: 'EDIT CITY DONE',
                payload: inputValue,
            });
            dispatch({
                type: 'RESET INPUT VALUE',
                payload: inputValue,
            })
            
            inputRef.current.focus();
        }
    }

    const handleOnChange = (event) => {
        dispatch({
            type: 'CHANGE INPUT VALUE',
            payload: event.target.value,
        })
        
    }

    return (
        <div className="InputWrap">    
            <input className='Input' onChange={handleOnChange} value={inputValue} ref={inputRef} />
            {
                editingCity 
                ?
                <button className='Button' onClick={handleOnDone}>done</button>
                :
                <button className='Button' onClick={handleOnAdd}>+</button>
            }
        </div>
    )
}
export const Input = memo(InputMoMemo);
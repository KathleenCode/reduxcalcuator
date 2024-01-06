import React from 'react'
import { useDispatch } from "react-redux";
import { DIVIDESC } from './store/actions';

export default function skDivide({num}) {
    const dispatch = useDispatch();

    const divdsc = (n) => {
        dispatch({type: DIVIDESC, payload: n})
    }

  return (
    <>
     <h3>Divide</h3>
     <button onClick={() => divdsc(num)}>Divide</button>
    </>
  )
}

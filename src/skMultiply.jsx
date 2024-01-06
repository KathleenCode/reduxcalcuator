import React from 'react';
import { useDispatch } from "react-redux";
import { MULTIPLYSC } from './store/actions';

export default function skMultiply({num}) {
    const dispatch = useDispatch();
    const multsc = (n) => {
        dispatch({type: MULTIPLYSC, payload: n})
    }

  return (
    <>
      <h3>Multiply</h3>
      <button onClick={() => multsc(num)} >Multiply</button>
     </>
  )
}

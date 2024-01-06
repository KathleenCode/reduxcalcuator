import React from 'react'
import { useDispatch } from "react-redux";
import { SUBTRACTSC } from './store/actions';

export default function scSubtract(props) {
    const dispatch = useDispatch();

    const subsc = (n) => {
        dispatch({type: SUBTRACTSC, payload: n})
    }

  return (
    <>
        <h3>Subtract</h3>
        <button onClick={() => subsc(props.num)}>Subtract</button>
    </>
  )
}

import React from 'react';
import { useDispatch } from "react-redux";
import { ADDITIONSC } from './store/actions';

export default function scAdd(props) {
    const dispatch = useDispatch();
    const addsc = (n) => {
        dispatch({type: ADDITIONSC, payload: n})
    }

  return (
    <>
      <h3>Add</h3>
      <button onClick={() => addsc(props.num)} >Add</button>
    </>
  )
}

import React from 'react'
import { FLOP_DATA } from '../FLOP_DATA'

function Movies() {
  const arr = [FLOP_DATA[0].imageUrl, FLOP_DATA[1].imageUrl ]

  return (
    <div className='choices'>
      <img src={arr[0]} alt="" />
      <img src={arr[1]} alt="" />
    </div>
  );
}

export default Movies
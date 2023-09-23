import React from 'react';
import { Link } from 'react-router-dom';

export default function Route(){
    return (
      <>
        <h2 style={{fontSize:44}}>About</h2>
        <Link to="/">Home</Link>
      </>
    )
}
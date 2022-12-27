import React from 'react';

const Button = ({color, text, toggle}) => {
    // const onClick = (e) => console.log(e.target);

  return (
    <button onClick = { toggle } style = {{backgroundColor: color}} 
     className = 'btn'>{text} </button>
  )
}

Button.defaultProps = {
    color: 'steelblue',
}

export default Button
import React from 'react'

function Button({onClick, children}) {
  return (
    <button onClick={onClick} style={{height:"40px", width:"100px", border:"none",borderRadius:"5px", margin:"5px", cursor:"pointer",background:"#CFCDCD"}}>{children}</button>

  )
}

export default Button;

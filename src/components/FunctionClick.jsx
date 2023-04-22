import React from 'react'

const FunctionClick = () => {
    function handleClick(){
        console.log('Button clicked')
    }
  return (
    <>
     <button onClick={handleClick}>Click</button> 
    </>
  )
}

export default FunctionClick

import React from 'react'

const MemoComp = ({name}) => {
    console.log('Memo Comp Render')
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoComp)
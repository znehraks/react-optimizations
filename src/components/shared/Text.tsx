import React from 'react'
function Text({ children }: { children: string }) {
  const message = children.split('\n').map((str, idx, arr) => {
    return (
      <React.Fragment key={idx}>
        {str}
        {idx === arr.length - 1 ? null : <br />}
      </React.Fragment>
    )
  })

  return <div>{message}</div>
}

export default Text

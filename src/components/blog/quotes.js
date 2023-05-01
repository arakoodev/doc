import React from 'react'

const Quotes = ({children}) => {
  return (
      <div className="p-4 rounded-xl border border-solid border-neutral-700 bg-neutral-800 ">
        
          {children}
        
    </div>
  )
}

export default Quotes
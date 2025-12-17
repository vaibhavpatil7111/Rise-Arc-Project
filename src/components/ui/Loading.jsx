import React from 'react'

const Loading = ({ height = "h-20" }) => {
  return (
    <div className={`${height} flex items-center justify-center`}>
      <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}

export default React.memo(Loading)
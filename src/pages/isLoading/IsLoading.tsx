// import React from 'react'
import { RiseLoader } from "react-spinners"

const IsLoading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
        <RiseLoader
            color="#0A2463"
            speedMultiplier={1}
            size={15}
            />
      
    </div>
  )
}

export default IsLoading

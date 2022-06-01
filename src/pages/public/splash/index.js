import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function SplashPage() {

  const navigation = useNavigate()
  useEffect(() =>{
      setTimeout(() => {
        navigation('/bridge')
      }, 5000);
  },[])
  return (
    <div>
     This is a splash page
    </div>
  )
}

export default SplashPage

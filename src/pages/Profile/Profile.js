import React from 'react'
import Switch from '../../components/Switch'
import Header from '../../components/Header'

import useDarkMode from '../../hooks/useDarkMode'

const Profile = () => {
  const [darkMode, setDarkMode] = useDarkMode()
  console.log(darkMode)
  return (
    <>
      <Header title="Profile" />
      <Switch isChecked={darkMode} setIsChecked={setDarkMode} />
    </>
  )
}

export default Profile

import React from 'react'
import Switch from '../../components/Switch'

import useDarkMode from '../../hooks/useDarkMode'

const Profile = () => {
  const [darkMode, setDarkMode] = useDarkMode()
  console.log(darkMode)
  return (
    <>
      <div>Profile</div>
      <Switch isChecked={darkMode} setIsChecked={setDarkMode} />
    </>
  )
}

export default Profile

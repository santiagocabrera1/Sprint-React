import React from 'react'
import './Switch.css'

const Switch = ({ isChecked = false, setIsChecked }) => {
  const handleChange = (e) => {
    setIsChecked(e.target.checked)
  }

  return (
    <>
      <label className="switch">
        <input type="checkbox" checked={isChecked} onChange={handleChange} />
        <span className="slider round"></span>
      </label>
    </>
  )
}

export default Switch

import React from 'react'

export const Alert = ({ alert }) => {
  if (!alert) {
    return null
  }

  return (
    <div
      className={`alert alert-${alert.type || 'success'}`}
      role="alert"
    >
      {alert.text}
    </div>
  )
}

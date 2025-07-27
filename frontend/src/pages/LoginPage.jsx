import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginPage.css'

const LoginPage = () => {
  const [userType, setUserType] = useState('admin')
  const navigate = useNavigate()

  const handleLogin = () => {
    if (userType === 'admin') {
      navigate('/admin-dashboard')
    } else {
      navigate('/staff-dashboard')
    }
  }

  return (
    <div className="login-wrapper">
      <h1>Inventory Management System</h1>
      <div className="login-container">
        <h2>Login</h2>
        <label>Select User Type</label>
        <select value={userType} onChange={(e) => setUserType(e.target.value)}>
          <option value="admin">Admin</option>
          <option value="staff">Staff</option>
        </select>
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}

export default LoginPage

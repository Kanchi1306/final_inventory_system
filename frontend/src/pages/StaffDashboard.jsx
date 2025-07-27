import React from 'react'
import './Dashboard.css'

const StaffDashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Staff Dashboard</h2>

      <div className="dashboard-section">
        <h3 className="section-heading">Today's Tasks</h3>
        <div className="card">
          <ul>
            <li>Update product stock</li>
            <li>Verify new shipment</li>
            <li>Log system activity</li>
          </ul>
        </div>
      </div>

      <div className="dashboard-section">
        <h3 className="section-heading">Support & Help</h3>
        <div className="card">
          <p>If you face any issue, contact your admin.</p>
        </div>
      </div>

      <button className="logout-btn">Logout</button>
    </div>
  )
}

export default StaffDashboard

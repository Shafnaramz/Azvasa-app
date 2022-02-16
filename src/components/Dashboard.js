import React from 'react'

function Dashboard() {
  return (
    <div>
         
<div className='side-menu'>
<div class="logo"><img src="../images/Assets/Azvasa_logo.png"/></div>
    <div className='brand-name'>
  
        <h3>Welcome</h3>
    </div>
    <ul className='dash-li'>
        <li><i class="fa fa-user"/> {'\u00A0'} {'\u00A0'}John Smith</li>
        <li><i class="fa fa-home"> {'\u00A0'} {'\u00A0'}</i>Home</li>
        <li><i class="far fa-bell-slash">{'\u00A0'} {'\u00A0'}</i>Registerd Schools</li>
        <li><i class="fas fa-school"/>{'\u00A0'} {'\u00A0'}Masters</li>
        <li><i class="fas fa-music"/>{'\u00A0'} {'\u00A0'}Teacher Training</li>
        <li><i class="fas fa-music"/>{'\u00A0'} {'\u00A0'}Promo Codes</li>
        <li><i class="fa fa-dashboard"/>{'\u00A0'} {'\u00A0'}Dashbord for Subject files</li>
        <li><i class="fas fa-music"/>{'\u00A0'} {'\u00A0'}Subject Wise Question</li>
        <li><i class="fas fa-music"/>{'\u00A0'} {'\u00A0'}Analytics</li>
       
    </ul>
</div>
<div className='dash-container'>
    <div className='header'>
        <div className='nav'></div>
    </div>
</div>
    </div>
  )
}

export default Dashboard
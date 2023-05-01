import React, { Fragment } from 'react'

import AdminNavbar from './AdminNavbar'
import AdminHome from './AdminHome'
import Footer from '../../Layouts/Footer'


const Admin = () => {
  return (
    <Fragment>
        <AdminNavbar />
        <AdminHome />
        <Footer />
    </Fragment>
  )
}

export default Admin
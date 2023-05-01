import React, { Fragment } from 'react'
import Navigation from '../Layouts/Navigation'

import Features from './Features'
import Properties from './properties/Properties'
import Advancedsearch from './Advancedsearch'
import Partner from './Partner'
import Footer from '../Layouts/Footer'
import ViewDetail from './properties/ViewDetail'

const HomePage = () => {
  return (
    <Fragment>
          <Navigation />
          {/* <Advancedsearch /> */}
          <Advancedsearch />
          <Features />
          <Properties />
          <ViewDetail />
          <Partner />
          <Footer />
    </Fragment>
  )
}

export default HomePage
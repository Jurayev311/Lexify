import React from 'react'
import Hero from '../../components/hero/Hero'
import AboutNumber from '../../components/about-number/AboutNumber'
import Info from '../../components/info/Info'
import Level from '../../components/level/Level'
import Report from '../../components/report/Report'

const Home = () => {
  return (
    <>
      <Hero />
      <AboutNumber />
      <Info />
      <Level />
      <Report />
    </>
  )
}

export default React.memo(Home)
import React from 'react'
import Hero from '../../components/hero/Hero'
import AboutNumber from '../../components/about-number/AboutNumber'
import Info from '../../components/info/Info'
import Level from '../../components/level/Level'
import Report from '../../components/report/Report'
import Subscribe from '../../components/subscribe/Subscribe'

const Home = () => {
  return (
    <>
      <Hero />
      <AboutNumber />
      <Info />
      <Level />
      <Report />
      <Subscribe />
    </>
  )
}

export default React.memo(Home)
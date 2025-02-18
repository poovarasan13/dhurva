import ElitePassList from '@/components/page-components/ElitePassList'
import Navbar from '@/components/page-components/Navbar'
import PassCard from '@/components/page-components/PassCard'
import FooterSection from '@/components/sections/footer/FooterSection'
import React from 'react'

const Pass = () => {
  return (
    <div>
        <Navbar/>
        {/* <PassCard/> */}
        <ElitePassList/>
        <FooterSection/>
    </div>
  )
}

export default Pass

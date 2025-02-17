import ConcertEvent from '@/components/page-components/ConcertEvent'
import EventBanner from '@/components/page-components/EventBanner'
import Navbar from '@/components/page-components/Navbar'
import FooterSection from '@/components/sections/footer/FooterSection'
import React from 'react'
import '../../assets/fonts/pacifico.css'
const LiveinConcert = () => {
  return (
    <div>
      <Navbar />
      <ConcertEvent />
      <EventBanner
        venue="Karpagam College of Engineering"
        date="12th to 13th MAR 2024 09:00 AM"
        title="DHRUVA – A National Level Techno- Management – Cultural Fest"
        subtitle="Let's Join With Us!"
        description="Will be conducted every year during the month of MARCH."
        buttonText="BOOK NOW"
        link = "www.google.com"
        bgColor="#ffffff"
        textColor="black"
        highlightColor="#FFD700"
      />
      <FooterSection />
    </div>
  )
}

export default LiveinConcert

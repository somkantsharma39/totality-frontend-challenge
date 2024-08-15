import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='Property Tour' subtitle='Find Your Perfect Stay: Where Comfort Meets Convenience. Feel at Home, No Matter Where You Are.'/>
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent

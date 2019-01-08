import React from 'react'
import { } from 'react-router-dom'

// Components
import NavFooter from '../../components/NavFooter'

const Search = () => {
  return (
    <div className="app">
      <main className="container mx-auto md:pt-12 px-5 max-w-xl">
      <header className="app-header fixed pin-t w-full bg-white">
        <div className="flex">
          <div className="w-1/3">
            {/* Nothing here */}
          </div>
          <div className="flex-1 py-6 text-center">
            <span className="inline-block font-bold leading-tight">
              Search
            </span>
          </div>
          <div className="w-1/3 text-right">
            {/* Nothing here */}
          </div>
        </div>
      </header>

        <div className="referral-tracking my-10 mb-16">
          <input type="search" placeholder="Search referrals" className="" />
        </div>
      </main>

      <NavFooter />
    </div>
  )
}

export default Search

import React from 'react'
import { NavLink } from 'react-router-dom'

// Components
import NavFooter from '../../components/NavFooter'

const Search = () => {
  return (
    <div className="app">
      <main className="container mx-auto md:pt-12 px-5 max-w-xl">
        <div className="referral-tracking my-10 mb-16">
          <header className="mb-12 relative text-center">
            <h3 className="mb-3 font-bold text-4xl">
              Search
            </h3>
          </header>
        </div>
      </main>

      <NavFooter />
    </div>
  )
}

export default Search

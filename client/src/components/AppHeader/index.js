import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

import logoBlueCircle from '../../assets/images/logo-ojo-bg-blue.png';

export const Agent = gql`
  query {
    agent(where: {id: "cjqi0off6y6350874h1ln7lyt"}) {
      id
      firstName
    }
  }
`
const AppHeader = ({ data: { agent } }) => {
  return (
    <header className="w-full fixed pin-t z-10 bg-white">
      <div className="mx-auto max-w-md flex">

        <div className="flex-1">
          <Link to="/" className="inline-block flex-no-shrink px-6 py-4">
            <img src={logoBlueCircle} className="w-8 h-8" alt="OJO Logo" />
          </Link>
        </div>

        <div className="flex-1">
          {/*<NavLink to="/" exact activeClassName="active">
            <div className="px-2 py-1">Home</div>
          </NavLink>*/}
        </div>

        <div className="flex-1 relative text-right">
          <NavLink to="/account/profile" className="inline-block flex-no-shrink px-6 py-4" activeClassName="active">
            <div className="h-8 w-8 bg-purple-light rounded-full inline-block flex flex-no-shrink items-center justify-center">
              <span className="avatar-initials text-white text-sm mt-1 font-normal">{agent.firstName.charAt(0)}</span>
            </div>
            {/*<div className="px-2 py-1">Sandra</div>*/}
          </NavLink>
        </div>

        {/*
        <div className="py-3 px-5 text-center mx-auto max-w-lg">
          <input
            className="app-search-input"
            type="search"
            placeholder="Search"
          />
        </div>
        */}
      </div>
    </header>
  )
}

export default graphql(Agent, {
  options: ({ match }) => ({
    variables: {}
  })
})(AppHeader)

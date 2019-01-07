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
    <header className="app-header-nav border-b border-grey-light w-full fixed pin-t z-10">
      <div className="mx-auto flex">

        <div className="flex-1 text-left">
          <Link to="/" className="inline-block flex-no-shrink px-6 py-3">
            <img src={logoBlueCircle} className="w-8 h-8" alt="OJO Logo" />
          </Link>
        </div>

        <div className="flex-1 flex justify-end text-right app-header-links mr-2">
          <NavLink to="/" exact className="inline-block py-6" activeClassName="active">
            <div className="px-2">Home</div>
          </NavLink>

          <NavLink to="/account/profile" className="flex items-center inline-block flex-no-shrink px-6 py-3" activeClassName="active">
            <div className="h-8 w-8 bg-purple rounded-full inline-block flex flex-no-shrink items-center justify-center">
              <span className="avatar-initials text-white text-sm mt-1 font-normal">{agent.firstName.charAt(0)}</span>
            </div>
            <div className="px-2 py-1">
              {agent.firstName}
            </div>
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

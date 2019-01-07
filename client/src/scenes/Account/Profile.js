import React from 'react'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

// Components
import AppHeader from '../../components/AppHeader'
import NavFooter from '../../components/NavFooter'

// Assets
import logoOJOWhite from '../../assets/images/ojo-logo-white.svg'
import iconChevronLeft from '../../assets/images/icon-chevron-left.svg';


export const Agent = gql`
  query {
    agent(where: {id: "cjqi0off6y6350874h1ln7lyt"}) {
      id
      firstName
      lastName
      phone
      email
      agentType
      isMatching
      websiteUrl
      createdAt
      city
      state
      brokerages {
        id
        name
        office
        officeAddress
        officePhone
        city
        state
        zip
        officeWebsite
        timezone
      }
      referrals {
        id
        firstName
        lastName
        isReviewed
        referralStatuses {
          id
          name
          stepComplete
          order
        }
      }
    }
  }
`

const AccountProfile = ({ data: { loading, error, agent } }) => {
  if (error) return <h2>Oops, looks like we messed up. Try refreshing!</h2>
  if (!loading) {
    return (
      <div className="app">
        <AppHeader />

        <main className="container mx-auto md:pt-16 px-5 max-w-md">
          <div className="referral-tracking my-10 mb-16">
            <header className="mb-12 relative text-center">
              <div className="avatar avatar-lg flex bg-purple items-center">
                <span className="block w-full text-center mt-2">{agent.firstName.charAt(0)}</span>
              </div>

              <h3 className="mb-1 font-bold text-4xl">
                {agent.firstName + ' ' + agent.lastName}
              </h3>

              <h4 className="font-normal text-grey-dark text-sm mb-4">
                Joined on {agent.createdAt}
              </h4>

              <Link to="/account/editprofile" className="mx-auto mb-6 inline-block py-3 px-8 border border-grey-light rounded-full">
                Edit Profile
              </Link>

              <div className="leading-tight mb-4 uppercase text-grey-dark text-xs">
                <span className="inline-block">
                  <span className="text-xl text-black">3</span>
                  <span className="tracking-wide block">Referrals</span>
                </span>
                <span className="inline-block mx-8">
                  <span className="text-xl text-black">0</span>
                  <span className="tracking-wide block">Closed</span>
                </span>
                <span className="inline-block">
                  <span className="text-xl text-black">0%</span>
                  <span className="tracking-wide block">Close Rate</span>
                </span>
              </div>

              <p className="mb-1">
                <a href={agent.websiteUrl}>{agent.websiteUrl}</a>
              </p>
            </header>
            <div className="flex flex-wrap">
              <div className="w-full">
                <section className="mb-16" id="account">
                  <h3 className="text-2xl mb-6">Account</h3>
                  <ul className="border-t border-grey-light text-sm leading-normal list-reset">
                    <li className="border-b border-grey-light flex pt-3 pb-2">
                      <div className="w-1/3 text-grey-dark">
                        Phone
                      </div>
                      <div className="w-2/3">
                        <span className="text-black">{agent.phone}</span>
                      </div>
                    </li>
                    <li className="border-b border-grey-light flex pt-3 pb-2">
                      <div className="w-1/3 text-grey-dark">
                        Email
                      </div>
                      <div className="w-2/3 truncate">
                        <span className="text-black">{agent.email}</span>
                      </div>
                    </li>
                    <li className="border-b border-grey-light flex pt-3 pb-2">
                      <div className="w-1/3 text-grey-dark">
                        Agent Type
                      </div>
                      <div className="w-2/3">
                        <span className="text-black">{agent.agentType}</span>
                      </div>
                    </li>
                    <li className="border-b border-grey-light flex pt-3 pb-2">
                      <div className="w-1/3 text-grey-dark">
                        Matching
                      </div>
                      <div className="w-2/3">
                        <span className="text-black">{agent.isMatching}</span>
                      </div>
                    </li>
                  </ul>
                </section>

                <section className="mb-16" id="brokerage">
                  <h3 className="text-2xl mb-6">Brokerage</h3>
                  {agent.brokerages.map(brokerage => (
                  <ul className="border-t border-grey-light text-sm leading-normal list-reset">
                    <li className="border-b border-grey-light flex pt-3 pb-2">
                      <div className="w-1/3 text-grey-dark">
                        Name
                      </div>
                      <div className="w-2/3 truncate">
                        <span className="text-black">{brokerage.name}</span>
                      </div>
                    </li>
                    <li className="border-b border-grey-light flex pt-3 pb-2">
                      <div className="w-1/3 text-grey-dark">
                        Office
                      </div>
                      <div className="w-2/3">
                        <span className="text-black">{brokerage.office}</span>
                      </div>
                    </li>
                    <li className="border-b border-grey-light flex pt-3 pb-2">
                      <div className="w-1/3 text-grey-dark">
                        Address
                      </div>
                      <div className="w-2/3 truncate">
                        <span className="text-black">{brokerage.officeAddress}</span>
                      </div>
                    </li>
                    <li className="border-b border-grey-light flex pt-3 pb-2">
                      <div className="w-1/3 text-grey-dark">
                        Phone
                      </div>
                      <div className="w-2/3">
                        <span className="text-black">{brokerage.officePhone}</span>
                      </div>
                    </li>
                    <li className="border-b border-grey-light flex pt-3 pb-2">
                      <div className="w-1/3 text-grey-dark">
                        Website
                      </div>
                      <div className="w-2/3 truncate">
                        <span className="text-black">{brokerage.officeWebsite}</span>
                      </div>
                    </li>
                    <li className="border-b border-grey-light flex pt-3 pb-2">
                      <div className="w-1/3 text-grey-dark">
                        State
                      </div>
                      <div className="w-2/3">
                        <span className="text-black">{brokerage.state}</span>
                      </div>
                    </li>
                    <li className="border-b border-grey-light flex pt-3 pb-2">
                      <div className="w-1/3 text-grey-dark">
                        Timezone
                      </div>
                      <div className="w-2/3">
                        <span className="text-black">{brokerage.timezone}</span>
                      </div>
                    </li>
                  </ul>
                ))}
                </section>

                <section className="mb-16" id="areas">
                  <h3 className="text-2xl mb-6">Market &amp; Areas</h3>
                  <ul className="border-t border-grey-light text-sm leading-normal list-reset">
                    <li className="border-b border-grey-light flex pt-3 pb-2">
                      <div className="w-1/3 text-grey-dark">
                        Market
                      </div>
                      <div className="w-2/3">
                        <span className="text-black">Austin, TX</span>
                      </div>
                    </li>
                    <li className="border-b border-grey-light flex pt-3 pb-2">
                      <div className="w-1/3 text-grey-dark">
                        Areas
                      </div>
                      <div className="w-2/3">
                        <span className="text-black">Central Austin, East Central Austin, Downtown Austin, Northwest Austin, South Austin, Southwest Austin, Hyde Park, West Austin, Tarrytown, Cedar Park</span>
                      </div>
                    </li>
                  </ul>
                </section>

                <div className="mt-16 p-3 text-center">
                  <Link to="/support" className="mb-6 mr-6 inline-block py-4 px-10 border border-grey-light rounded-full">Support</Link>
                  <Link to="/signin" className="mb-6 inline-block py-4 px-10 border border-grey-light rounded-full text-red">Sign Out</Link>
                </div>
              </div>
            </div>
          </div>
        </main>

        <NavFooter />
      </div>
    )
  }
  return (
    <div className="app">
      <main className="flex h-screen items-stretch">
        <div className="self-center flex-1">
          <Link to="/" className="ojo-loading flex mx-auto text-center">
            <img src={logoOJOWhite} className="flex-1 self-center" alt="logo" />
          </Link>
        </div>
      </main>
    </div>
  )
}

export default graphql(Agent, {
  options: ({ match }) => ({
    variables: {}
  })
})(AccountProfile)

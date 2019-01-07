import React from 'react'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

// Components
import AppHeader from '../../components/AppHeader/index.js'

// Assets
import iconPerson from '../../assets/images/icon-person.svg'
import iconCheckboxChecked from '../../assets/images/icon-checkmark-checked.svg'
import iconCheckboxgrey from '../../assets/images/icon-checkmark-checked-gray.svg'
import iconChevronRightgrey from '../../assets/images/icon-chevron-right-gray.svg'
import logoBlueCircle from '../../assets/images/logo-ojo-bg-blue.png'
import logoOJOWhite from '../../assets/images/ojo-logo-white.svg'

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

        <main className="container mx-auto mt-24 px-5 max-w-md md:pt-6">
          <div className="referral-tracking my-10 mb-16">
            <header className="mb-12 relative">
              <h3 className="mb-2 font-bold text-4xl">
                {agent.firstName + ' ' + agent.lastName}
              </h3>

              <div className="leading-loose font-semibold uppercase text-grey-dark text-xs">
                <span className="inline-block mr-4">
                  <span className="">Referrals</span>
                  <span className="ml-1">3</span>
                </span>
                <span className="inline-block mr-4">
                  <span className="">Closed</span>
                  <span className="ml-1">0</span>
                </span>
                <span className="inline-block mr-4">
                  <span className="">Close Rate</span>
                  <span className="ml-1">0%</span>
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
                      <div className="w-1/2 text-grey-dark">
                        Phone
                      </div>
                      <div className="w-1/2">
                        <span className="text-black">{agent.phone}</span>
                      </div>
                    </li>
                    <li className="border-b border-grey-light flex pt-3 pb-2">
                      <div className="w-1/2 text-grey-dark">
                        Email
                      </div>
                      <div className="w-1/2 truncate">
                        <span className="text-black">{agent.email}</span>
                      </div>
                    </li>
                    <li className="border-b border-grey-light flex pt-3 pb-2">
                      <div className="w-1/2 text-grey-dark">
                        Agent Type
                      </div>
                      <div className="w-1/2">
                        <span className="text-black">{agent.agentType}</span>
                      </div>
                    </li>
                    <li className="border-b border-grey-light flex pt-3 pb-2">
                      <div className="w-1/2 text-grey-dark">
                        Matching
                      </div>
                      <div className="w-1/2">
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
                      <div className="w-1/2 text-grey-dark">
                        Name
                      </div>
                      <div className="w-1/2 truncate">
                        <span className="text-black">{brokerage.name}</span>
                      </div>
                    </li>
                    <li className="border-b border-grey-light flex pt-3 pb-2">
                      <div className="w-1/2 text-grey-dark">
                        Office
                      </div>
                      <div className="w-1/2">
                        <span className="text-black">{brokerage.office}</span>
                      </div>
                    </li>
                    <li className="border-b border-grey-light flex pt-3 pb-2">
                      <div className="w-1/2 text-grey-dark">
                        Address
                      </div>
                      <div className="w-1/2 truncate">
                        <span className="text-black">{brokerage.officeAddress}</span>
                      </div>
                    </li>
                    <li className="border-b border-grey-light flex pt-3 pb-2">
                      <div className="w-1/2 text-grey-dark">
                        Phone
                      </div>
                      <div className="w-1/2">
                        <span className="text-black">{brokerage.officePhone}</span>
                      </div>
                    </li>
                    <li className="border-b border-grey-light flex pt-3 pb-2">
                      <div className="w-1/2 text-grey-dark">
                        Website
                      </div>
                      <div className="w-1/2 truncate">
                        <span className="text-black">{brokerage.officeWebsite}</span>
                      </div>
                    </li>
                    <li className="border-b border-grey-light flex pt-3 pb-2">
                      <div className="w-1/2 text-grey-dark">
                        State
                      </div>
                      <div className="w-1/2">
                        <span className="text-black">{brokerage.state}</span>
                      </div>
                    </li>
                    <li className="border-b border-grey-light flex pt-3 pb-2">
                      <div className="w-1/2 text-grey-dark">
                        Timezone
                      </div>
                      <div className="w-1/2">
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
                      <div className="w-1/2 text-grey-dark">
                        Market
                      </div>
                      <div className="w-1/2">
                        <span className="text-black">Austin, TX</span>
                      </div>
                    </li>
                    <li className="border-b border-grey-light flex pt-3 pb-2">
                      <div className="w-1/2 text-grey-dark">
                        Areas
                      </div>
                      <div className="w-1/2">
                        <span className="text-black">Central Austin, East Central Austin, Downtown Austin, Northwest Austin, South Austin, Southwest Austin, Hyde Park, West Austin, Tarrytown, Cedar Park</span>
                      </div>
                    </li>
                  </ul>
                </section>

                <div className="mt-16 p-3 text-center">
                  <Link to="/signin" className="block text-red text-base">Sign Out</Link>
                </div>
              </div>
            </div>
          </div>

          <footer className="mb-6 mr-6 fixed pin-r pin-b">
            <Link to="/support"
              className="text-grey-darkest bg-white leading-loose text-sm font-medium px-4 py-3 shadow rounded hover:bg-grey-lightest"
            >
              Need help?
            </Link>
          </footer>
        </main>
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

import React from 'react'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

// Components
import AppHeader from '../../components/AppHeader'
import NavFooter from '../../components/NavFooter'

// Assets
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

        <main className="container mx-auto md:pt-16 px-5">
          <div className="referral-tracking my-10 mb-16">
            <header className="mb-12 relative text-center">
              <div className="avatar avatar-lg flex bg-purple items-center">
                <span className="block w-full text-center mt-2">{agent.firstName.charAt(0)}</span>
              </div>

              <h3 className="mb-1 font-bold text-4xl">
                {agent.firstName + ' ' + agent.lastName}
              </h3>

              <h4 className="font-normal text-grey-dark text-sm mb-4">
                {agent.agentType} Agent <span className="opacity-50 mx-1">•</span> Joined Dec 28, 2019
              </h4>

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
            <div className="">
              <div className="w-full flex flex-wrap">

              <div className="md:w-1/2 md:pr-8">
                <section className="mb-16" id="areas">
                  <h3 className="text-2xl mb-6">Your Market &amp; Areas</h3>
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

                <section className="mb-16" id="brokerage">
                  <h3 className="text-2xl mb-6">Your Brokerage</h3>
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
              </div>

                <section className="mb-16 md:w-1/2 md:pl-8" id="account">
                  <h3 className="text-2xl mb-6">You</h3>
                  <form className="border-t border-grey-light text-sm leading-normal list-reset">

                    <div className="my-4 flex">
                      <div className="w-1/2 pr-3">
                        <label htmlFor="agentFirstName" className="text-xs text-grey-dark">First Name</label>
                        <input type="text" name="agentFirstName" className="input text-lg" placeholder="" id="agentFirstName" value={agent.firstName} />
                      </div>

                      <div className="w-1/2 pl-3">
                        <label htmlFor="agentFirstName" className="text-xs text-grey-dark">Last Name</label>
                        <input type="text" name="agentFirstName" className="input text-lg" placeholder="" id="agentLastName" value={agent.lastName} />
                      </div>
                    </div>

                    <div className="my-4 flex flex-wrap">
                      <div className="w-full sm:w-1/2 sm:pr-3">
                        <label htmlFor="agentPhone" className="text-xs text-grey-dark">Phone</label>
                        <input type="tel" name="agentPhone" className="input text-lg" placeholder="(555) 555-1234" id="agentPhone" value={agent.phone} />
                      </div>
                    </div>

                    <div className="w-full my-4">
                      <label htmlFor="agentEmail" className="text-xs text-grey-dark">Email</label>
                      <input type="text" name="agentEmail" className="input text-lg" placeholder="you@domain.com" id="agentEmail" value={agent.email} />
                    </div>

                    <div className="my-4 flex flex-wrap">
                      <div className="w-full sm:w-1/2 sm:pr-3">
                        <label htmlFor="agentCity" className="text-xs text-grey-dark">City</label>
                        <input type="text" name="agentCity" className="input text-lg" placeholder="e.g. Austin" id="agentCity" />
                      </div>
                      <div className="w-full sm:w-1/2 sm:pr-3">
                        <label htmlFor="agentState" className="text-xs text-grey-dark">State</label>
                        <select className="input select text-lg">
                          <option>Arizona - AZ</option>
                          <option>Arkansas - AR</option>
                          <option>California - CA</option>
                          <option>Colorado - CO</option>
                          <option>Connecticut - CT</option>
                          <option>Delaware - DE</option>
                          <option>Florida - FL</option>
                          <option>Georgia - GA</option>
                          <option>Hawaii - HI</option>
                          <option>Idaho - ID</option>
                          <option>Illinois - IL</option>
                          <option>Indiana - IN</option>
                          <option>Iowa - IA</option>
                          <option>Kansas - KS</option>
                          <option>Kentucky - KY</option>
                          <option>Louisiana - LA</option>
                          <option>Maine - ME</option>
                          <option>Maryland - MD</option>
                          <option>Massachusetts - MA</option>
                          <option>Michigan - MI</option>
                          <option>Minnesota - MN</option>
                          <option>Mississippi - MS</option>
                          <option>Missouri - MO</option>
                          <option>Montana - MT</option>
                          <option>Nebraska - NE</option>
                          <option>Nevada - NV</option>
                          <option>New Hampshire - NH</option>
                          <option>New Jersey - NJ</option>
                          <option>New Mexico - NM</option>
                          <option>New York - NY</option>
                          <option>North Carolina - NC</option>
                          <option>North Dakota - ND</option>
                          <option>Ohio - OH</option>
                          <option>Oklahoma - OK</option>
                          <option>Oregon - OR</option>
                          <option>Pennsylvania - PA</option>
                          <option>Rhode Island - RI</option>
                          <option>South Carolina - SC</option>
                          <option>South Dakota - SD</option>
                          <option>Tennessee - TN</option>
                          <option>Texas - TX</option>
                          <option>Utah - UT</option>
                          <option>Vermont - VT</option>
                          <option>Virginia - VA</option>
                          <option>Washington - WA</option>
                          <option>West Virginia - WV</option>
                          <option>Wisconsin - WI</option>
                          <option>Wyoming - WY</option>
                        </select>
                      </div>
                    </div>

                    <div className="w-full my-4">
                      <label htmlFor="agentBrokerage" className="text-xs text-grey-dark">Brokerage</label>
                      <select className="input select text-lg">
                        <option>Better Homes and Gardens Bradfield Properties</option>
                        <option>Better Homes and Gardens Real Estate HomeCity</option>
                        <option>Better Homes and Gardens Metro Brokers</option>
                        <option>Coldwell Banker United, Realtors</option>
                        <option>Coldwell Banker Residential Brokerage - Denver, CO</option>
                        <option>Coldwell Banker Residential Brokerage - MA</option>
                        <option>Coldwell Banker Residential Brokerage - Miami, FL</option>
                        <option>Coldwell Banker Residential Brokerage - Orlando, FL</option>
                        <option>Coldwell Banker Residential Brokerage - WI</option>
                        <option>Coldwell Banker Preferred</option>
                        <option>Coldwell Banker King Thompson</option>
                        <option>Royal LePage</option>
                      </select>
                    </div>

                    <div className="w-1/2 my-4">
                      <label htmlFor="leaderRouter" className="text-xs text-grey-dark">LeadRouter Agent ID</label>
                      <input type="text" name="leaderRouter" className="input text-lg" placeholder="e.g. 14232983" id="leaderRouter" />
                    </div>

                    <div className="w-full my-4">
                      <input type='checkbox' checked="checked" className="" />
                      <label className="ml-2">Signed ICA</label>
                    </div>

                    <div className="my-4">
                      <div className="text-grey-dark">
                        <input type='checkbox' checked="checked" className="" />
                        <label className="ml-2 text-black">Accepting Leads</label>
                      </div>
                    </div>

                    <button type="submit" className="mb-6 font-semibold text-base mr-6 inline-block py-4 px-10 border border-grey-light rounded-full hover:bg-green hover:text-white hover:border-green">
                      Save Changes
                    </button>

                  </form>
                </section>

                <div className="mt-16 p-3 text-center">
                  <Link to="/support" className="mb-6 mr-6 inline-block py-4 px-10 border border-grey-light rounded-full hover:bg-grey-lightest hover:border-grey-lightest">Support</Link>
                  <Link to="/signin" className="mb-6 inline-block py-4 px-10 border border-grey-light rounded-full text-red hover:bg-grey-lightest hover:border-grey-lightest">Sign Out</Link>
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

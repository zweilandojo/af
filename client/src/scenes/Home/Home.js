import React from 'react'
import { Link } from 'react-router-dom'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

// Components
import AppHeader from '../../components/AppHeader/index.js'
import NavFooter from '../../components/NavFooter'

// Assets
// import iconPerson from '../../assets/images/icon-person.svg'
// import iconCheckboxChecked from '../../assets/images/icon-checkmark-checked.svg'
// import iconCheckboxgrey from '../../assets/images/icon-checkmark-checked-gray.svg'
import iconChevronRightgrey from '../../assets/images/icon-chevron-right-gray.svg'
import logoOJOWhite from '../../assets/images/ojo-logo-white.svg'

export const Agent = gql`
  query {
    agent(where: {id: "cjqi0off6y6350874h1ln7lyt"}) {
      id
      firstName
      lastName
      phone
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

const Home = ({ data: { loading, error, agent } }) => {
  if (error) return <h2>Oops, looks like we messed up. Try refreshing!</h2>
  if (!loading) {
    return (
      <div className="app">
        <AppHeader />

        <main className="container mx-auto pt-2 md:pt-24 px-5 max-w-md">
          <div className="referral-tracking my-10 mb-16">
            <header className="mb-12 text-center">
              <h3 className="mb-2 font-bold text-4xl">
                Aloha, {agent.firstName}.
              </h3>
              <div className="leading-tight mb-4 uppercase text-grey-dark text-xs">
                <span className="inline-block">
                  <span className="text-xl text-black">3</span>
                  <span className="tracking-wide block">Met</span>
                </span>
                <span className="inline-block mx-8">
                  <span className="text-xl text-black">1</span>
                  <span className="tracking-wide block">Offered</span>
                </span>
                <span className="inline-block">
                  <span className="text-xl text-black">0</span>
                  <span className="tracking-wide block">Closed</span>
                </span>
              </div>
            </header>
            {agent.referrals.length < 0 &&
              <div className="referral-tracking clearfix mb-12">
                <div className="">
                  <h3 className="mb-4 text-sm uppercase">
                    Referrals
                  </h3>
                  <p className="text-base text-grey mb-6">
                    No referrals assigned
                  </p>
                  <div className="py-4 border-b border-grey-light flex">
                    <div className="rounded-full flex justify-center h-10 w-10 bg-grey-light"></div>
                    <div className="flex-initial ml-4 ">
                      <span className="h-3 w-24 rounded-full bg-grey-light block mt-2 mb-2"></span>
                      <div>
                        <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                        <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                        <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                        <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                        <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                        <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white"></div>
                      </div>
                    </div>
                  </div>
                  <div className="py-4 border-b border-grey-light flex">
                    <div className="rounded-full flex justify-center h-10 w-10 bg-grey-light"></div>
                    <div className="flex-initial ml-4 ">
                      <span className="h-3 w-24 rounded-full bg-grey-light block mt-2 mb-2"></span>
                      <div>
                        <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                        <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                        <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                        <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                        <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                        <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white"></div>
                      </div>
                    </div>
                  </div>
                  <div className="py-4 flex">
                    <div className="rounded-full flex justify-center h-10 w-10 bg-grey-light"></div>
                    <div className="flex-initial ml-4">
                      <span className="h-3 w-24 rounded-full bg-grey-light block mt-2 mb-2"></span>
                      <div>
                        <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                        <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                        <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                        <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                        <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
                        <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white"></div>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
            }

            {agent.referrals.length > 0 &&
            <div className="">
              <header className="">
                <h3 className="mb-4 text-2xl font-regular">
                  Referrals
                </h3>
              </header>

              <div className="mb-2">
                <input type="text" name="filterReferrals" className="input input-search text-base" placeholder="Filter by name" id="filterReferrals" />
              </div>

              <div className="referral-list">
              {agent.referrals.map(referral => (
                <Link to={`/referral/${referral.id}`} className={"py-4 border-b border-grey-light flex " + (referral.isReviewed !== true ? 'referral-list_needs-review' : '')}>
                  <div className={"avatar avatar-m rounded-full flex flex-no-shrink items-center justify-center h-12 w-12 text-white " + (referral.isReviewed !== true ? 'bg-red-light' : 'bg-gradient-blue-green')}>
                    <div className="avatar-initials text-xl mt-1">{referral.firstName.charAt(0)}</div>
                  </div>
                  <div className="flex-initial ml-4 relative w-full">
                    <span className="text-lg mt-2 block font-semibold text-black">
                      {referral.firstName + ' ' + referral.lastName}
                    </span>
                    <div className="">
                      <span className="inline-block text-grey-dark tracking-normal text-sm text-green">
                        New
                      </span>
                    </div>
                    {referral.isReviewed !== true &&
                      <span className="absolute pin-r pin-t text-red text-sm mt-2 mr-1">
                        Review
                      </span>
                    }
                    {referral.isReviewed === true &&
                      <span className="absolute pin-r pin-t text-red text-sm mt-2 mr-1">
                        <img src={iconChevronRightgrey} className="svg-grey" alt="" />
                      </span>
                    }
                  </div>
                </Link>
              ))}
              </div>
            </div>
          }
          </div>
          <div className="mt-16 mb-16 p-3 text-center">
            <Link to="/support" className="mb-6 mr-6 inline-block py-4 px-10 border border-grey-light hover:bg-grey-lightest hover:border-grey-lightest rounded-full">Support</Link>
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
    variables: {
      id: match.params.slug
    }
  })
})(Home)

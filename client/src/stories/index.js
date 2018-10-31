import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  MemoryRouter
} from 'react-router-dom';

import Logo from '../assets/images/ojo-logo.svg';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import '../assets/styles.css';

import AppHeader from '../components/AppHeader/index.js';
import AgentHomeBanner from '../components/AgentHomeBanner/index.js';
import ReferralsList from '../components/ReferralsList/index.js';
import Milestones from '../components/Milestones/index.js';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));


storiesOf('Agent Home', module)
  .addDecorator(story => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('w/ no referrals', () => (
    <div className="app">
      <AppHeader />
      <AgentHomeBanner />

      {/* BEGIN: REFERRAL LIST ZERO STATE */}
      <main className="container mx-auto px-2">
        <div className="referral-tracking clearfix mb-12">
          <h3 className="mb-4 ml-6 text-2xl">
            Referrals
          </h3>
          <div className="border border-grey-light p-8 rounded-lg">
            <div className="clearfix">
              <p className="text-base text-gray mb-6">No referrals assigned</p>
            </div>
            <div className="py-4 border-b border-grey-light flex">
              <div className="rounded-full flex justify-center h-10 w-10 bg-gray-light">
                {/* Nothing here */}
              </div>
              <div className="flex-initial ml-4 ">
                <span className="h-3 w-24 rounded-full bg-gray-light block mt-2 mb-2">
                  {/* Nothing here */}
                </span>
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
              <div className="rounded-full flex justify-center h-10 w-10 bg-gray-light">
                {/* Nothing here */}
              </div>
              <div className="flex-initial ml-4 ">
                <span className="h-3 w-24 rounded-full bg-gray-light block mt-2 mb-2">
                  {/* Nothing here */}
                </span>
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
              <div className="rounded-full flex justify-center h-10 w-10 bg-gray-light">
                {/* Nothing here */}
              </div>
              <div className="flex-initial ml-4">
                <span className="h-3 w-24 rounded-full bg-gray-light block mt-2 mb-2">
                  {/* Nothing here */}
                </span>
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

        <Milestones talk="0" set="0" met="0" offer="0" accept="0" transact="0" />
      </main>
      {/* END: REFERRAL LIST ZERO STATE */}

    </div>
  ))
  .add('w/ referrals', () => (
    <div className="app">
      <AppHeader />
      <AgentHomeBanner />

      <main className="container mx-auto px-2">
        <ReferralsList />
        <Milestones talk="83" set="66" met="33" offer="0" accept="0" transact="0" />
      </main>
    </div>
  ));

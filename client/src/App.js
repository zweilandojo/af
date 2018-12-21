import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Assets
// ...nothing yet...

// Components
// ...nothing yet...

// Scenes
import SignIn from './scenes/SignIn/SignIn.js';
import AuthVerify from './scenes/SignIn/AuthVerify.js';
import Loading from './scenes/SignIn/Loading.js';
import Announcement from './scenes/Announcement/index.js';

import Home_All from './scenes/Home/Home_All.js';
import Home_NeedsReview from './scenes/Home/Home_NeedsReview.js';
import Home_ZeroState from './scenes/Home/Home_ZeroState.js';
import Home_Approved_Arthur from './scenes/Home/Home_Approved_Arthur.js';

import Referral_Approved_Profile from './scenes/ReferralDetail/Approved/Referral_Approved_Profile.js';
import Referral_Approved_Review from './scenes/ReferralDetail/Approved/Referral_Approved_Review.js';
import Referral_Approved_Arthur_Profile from './scenes/ReferralDetail/Approved/Referral_Approved_Arthur_Profile.js';
import Referral_Approved_Arthur_Review from './scenes/ReferralDetail/Approved/Referral_Approved_Arthur_Review.js';
import Referral_NeedsReview_Profile from './scenes/ReferralDetail/NeedsReview/Referral_NeedsReview_Profile.js';
import Referral_NeedsReview_Review from './scenes/ReferralDetail/NeedsReview/Referral_NeedsReview_Review.js';
import Referral_Barebones_NeedsReview_Profile from './scenes/ReferralDetail/Barebones/Referral_NoName_NeedsReview_Profile.js';
import Referral_Barebones_NeedsReview_Review from './scenes/ReferralDetail/Barebones/Referral_NoName_NeedsReview_Review.js';
import Referral_Dead_Profile from './scenes/ReferralDetail/Dead/Referral_Dead_Profile.js';
import Referral_Dead_Review from './scenes/ReferralDetail/Dead/Referral_Dead_Review.js';
import Modal_Release_Referral from './scenes/ReferralDetail/_ModalReleaseReferral/index.js';

import Profile from './scenes/Profile/index.js';
import Settings from './scenes/Settings/Settings.js';

import Support from './scenes/Support/Support.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/signin" component={SignIn}/>
          <Route path="/signin-verify" component={AuthVerify}/>
          <Route path="/loading" component={Loading}/>

          <Route path="/announcement" component={Announcement}/>

          <Route exact path="/home-all" component={Home_All}/>
          <Route exact path="/" component={Home_NeedsReview}/>
          <Route exact path="/home-zero" component={Home_ZeroState}/>
          <Route exact path="/home-approved-arthur" component={Home_Approved_Arthur}/>

          <Route path="/support" component={Support}/>

          <Route path="/referral-approved-profile" component={Referral_Approved_Profile}/>
          <Route path="/referral-approved-review" component={Referral_Approved_Review}/>
          <Route path="/referral-approved-arthur-profile" component={Referral_Approved_Arthur_Profile}/>
          <Route path="/referral-approved-arthur-review" component={Referral_Approved_Arthur_Review}/>

          <Route path="/referral-needsReview-profile" component={Referral_NeedsReview_Profile}/>
          <Route path="/referral-needsReview-review" component={Referral_NeedsReview_Review}/>
          <Route path="/referral-barebones-needsReview-profile" component={Referral_Barebones_NeedsReview_Profile}/>
          <Route path="/referral-barebones-needsReview-review" component={Referral_Barebones_NeedsReview_Review}/>
          <Route path="/referral-dead-profile" component={Referral_Dead_Profile}/>
          <Route path="/referral-dead-review" component={Referral_Dead_Review}/>
          <Route path="/modal-release-referral" component={Modal_Release_Referral}/>

          <Route path="/profile" component={Profile}/>
          <Route path="/settings" component={Settings}/>

        </div>
      </Router>
    );
  }
}

export default App;

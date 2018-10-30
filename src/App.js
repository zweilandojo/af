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
import Home_All from './scenes/Home/Home_All.js';
import Home_NeedsReview from './scenes/Home/Home_NeedsReview.js';
import Home_ZeroState from './scenes/Home/Home_ZeroState.js';
import ReferralProfileApproved from './scenes/ReferralDetail/ReferralProfileApproved.js';
import ReferralReviewApproved from './scenes/ReferralDetail/ReferralReviewApproved.js';
import ReferralProfileNeedsReview from './scenes/ReferralDetail/ReferralProfileNeedsReview.js';
import ReferralReviewNeedsReview from './scenes/ReferralDetail/ReferralReviewNeedsReview.js';
import Support from './scenes/Support/Support.js';
import Settings from './scenes/Settings/Settings.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/signin" component={SignIn}/>
          <Route path="/signin-verify" component={AuthVerify}/>
          <Route path="/loading" component={Loading}/>

          <Route exact path="/home-all" component={Home_All}/>
          <Route exact path="/" component={Home_NeedsReview}/>
          <Route exact path="/home-zero" component={Home_ZeroState}/>

          <Route path="/support" component={Support}/>

          <Route path="/referral-profile-approved" component={ReferralProfileApproved}/>
          <Route path="/referral-review-approved" component={ReferralReviewApproved}/>
          <Route path="/referral-profile-needs-review" component={ReferralProfileNeedsReview}/>
          <Route path="/referral-review-needs-review" component={ReferralReviewNeedsReview}/>

          <Route path="/settings" component={Settings}/>

        </div>
      </Router>
    );
  }
}

export default App;

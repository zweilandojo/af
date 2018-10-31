import React from 'react';
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom';

// Assets
import logoOJOWhite from '../../assets/images/ojo-logo-white.svg';

class Loading extends React.Component {
  constructor(props) {
    super();

    console.log('This happens 1st.');

    this.state = {
      loading: 'initial',
      data: '',
      redirectToReferrer: false
    };

  }

  loadData() {
    var promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('This happens 6th (after 3 seconds).');
        resolve('Hi');
      }, 3000);
    });

    console.log('This happens 4th.');

    return promise;
  }

  componentDidMount() {

    console.log('This happens 3rd.');

    this.setState({ loading: 'true' });
    this.loadData()
    .then((data) => {
      console.log('This happens 7th.');
      this.setState({
        data: data,
        loading: 'false',
        redirectToReferrer: true,
      });
    });
  }

  render() {

    if (this.state.loading === 'initial') {
      console.log('This happens 2nd - after the class is constructed. You will not see this element because React is still computing changes to the DOM.');
      return <h2>Intializing...</h2>;
    }

    if (this.state.loading === 'true') {
      console.log('This happens 5th - when waiting for data.');
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

    const redirectToReferrer = this.state.redirectToReferrer;
        if (redirectToReferrer === true) {
            return <Redirect to="/" />
        }

    console.log('This happens 8th - after I get data.');
    return (
       <div className="app">
         <main className="flex h-screen items-stretch">
           <div className="self-center flex-1 text-center">
             <div className="flex items-stretch">
              <div className="flex-1 w-1/2 text-right mx-2">
               <Link to="/" className="ojo-loading flex float-right">
                 <img src={logoOJOWhite} className="flex-1 self-center" alt="logo" />
               </Link>
              </div>
              <div className="hi w-1/2 flex-1 text-left mx-2">
                {this.state.data}
              </div>
             </div>
           </div>
         </main>
       </div>
    )
  }
}


export default Loading;

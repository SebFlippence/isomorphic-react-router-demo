'use babel';

import React from 'react';
import { RouteHandler } from 'react-router';
import Header from '../component/header.jsx';
import Footer from '../component/footer.jsx';

export default class Layout extends React.Component {
  render () {
      return <div>
        <Header/>
        <section className="main-container">
          <div className="content">
            <RouteHandler {...this.props}/>
          </div>
        </section>
        <Footer/>
      </div>;
  }
};

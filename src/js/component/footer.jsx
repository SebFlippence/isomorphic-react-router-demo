'use babel';

import React from 'react';

import packageDetails from '../../../package.json';

export default class Footer extends React.Component {
  render () {
      return <footer>
          <p>{packageDetails.description} v{packageDetails.version}</p>
      </footer>;
  }
};

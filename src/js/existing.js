'use babel';

import React from 'react';

import Header from './component/standaloneHeader.jsx';
import Footer from './component/footer.jsx';

React.render(
  <Header />,
  document.getElementsByTagName('header')[0]
);

React.render(
  <Footer />,
  document.getElementsByTagName('footer')[0]
);

$(function() {
    // bootstrap-material-design
    $.material.init();
});

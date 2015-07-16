'use babel';

import React from 'react';
import Router from 'react-router';
import routes from './routes';

Router.run(routes, Router.HistoryLocation, (Root) => {
  React.render(<Root/>, document.body);
});

$(function() {
    // bootstrap-material-design
    $.material.init();

    // Fix for reredering checkboxes and buttons on react route change
    $('a').mouseup(function() {
        setTimeout(function () {
            $.material.checkbox();
            $.material.togglebutton();
            $.material.radio();
        }, 10);
    });
});

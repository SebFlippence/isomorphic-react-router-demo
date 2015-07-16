'use babel';

import fs from 'fs';

import React from 'react/addons';
import Router from 'react-router';

import express from 'express';
var app = express();

app.use('/dist', express.static('dist'));
app.use('/node_modules', express.static('node_modules'));
app.use('/src', express.static('src'));
app.use('/index_existing.html', express.static('index_existing.html'));

app.get('/*', (req, res) => {
    var router = Router.create({
        routes: require('./routes'),
        location: req.url
    });

    router.run((Handler, state) => {
        var html = fs.readFileSync('./index.html').toString(),
            content = React.renderToStaticMarkup(<Handler/>);

        html = html.replace('<!-- @react container -->', content);

        if (state.routes.some((e) => e.isNotFound)) {
            res.status(404);
        }

        res.send(html);
    });
});

var server = app.listen(3000, () => {
    var host = server.address().address,
        port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

'use strict';

import React from 'react';
import NavLink from '../component/NavLink';
import Modal from '../component/modal.jsx';

export default React.createClass({
    render () {
      return <div>
        <h2>Introduction</h2>
        <p>Built upon the isomorphic principal; rendering the same HTML server side and rendering pages client side to increase performance. It uses <a href="https://facebook.github.io/react/">React</a> for templating with <a href="https://fezvrasta.github.io/bootstrap-material-design/">Material Design for Bootstrap</a>.</p>
        <section>
          <h4>Demos</h4>
          <ul>
            <li>
              <NavLink to="/forms">Sample form</NavLink>
            </li>
            <li>
              <NavLink to="/tables">Sample table</NavLink>
            </li>
          </ul>
        </section>
        <section>
          <h4>Created with</h4>
          <ul>
            <li><a href="https://webpack.github.io/">webpack</a></li>
            <li><a href="https://babeljs.io/">Babel</a></li>
            <li><a href="https://github.com/babel/babelify">babelify</a></li>
            <li><a href="https://facebook.github.io/react/">React</a></li>
            <li><a href="https://rackt.github.io/react-router/">React Router</a></li>
            <li><a href="https://fezvrasta.github.io/bootstrap-material-design/">Material Design for Bootstrap</a></li>
          </ul>
        </section>
        <section>
          <div className="bs-docs-section">
            <div className="row">
              <div className="col-lg-12">
                <div className="page-header">
                  <h1 id="type">Typography</h1>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className="bs-component">
                  <h1>Heading 1</h1>
                  <h2>Heading 2</h2>
                  <h3>Heading 3</h3>
                  <h4>Heading 4</h4>
                  <h5>Heading 5</h5>
                  <h6>Heading 6</h6>
                  <p className="lead">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="bs-component">
                  <h2>Example body text</h2>
                  <p>Nullam quis risus eget <a href="javascript:void(0)">urna mollis ornare</a> vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
                  <p>
                    <small>This line of text is meant to be treated as fine print.</small>
                  </p>
                  <p>The following snippet of text is
                    <strong>rendered as bold text</strong>.</p>
                  <p>The following snippet of text is
                    <em>rendered as italicized text</em>.</p>
                  <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>
                </div>

              </div>
              <div className="col-lg-4">
                <div className="bs-component">
                  <h2>Emphasis classes</h2>
                  <p className="text-muted">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>
                  <p className="text-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                  <p className="text-warning">Etiam porta sem malesuada magna mollis euismod.</p>
                  <p className="text-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
                  <p className="text-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                  <p className="text-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                </div>

              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <h2 id="type-blockquotes">Blockquotes</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="bs-component">
                  <blockquote>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <small>Someone famous in
                      <cite title="Source Title">Source Title</cite>
                    </small>
                  </blockquote>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="bs-component">
                  <blockquote className="pull-right">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <small>Someone famous in
                      <cite title="Source Title">Source Title</cite>
                    </small>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h3>Modals</h3>
          <button className="btn btn-primary btn-raised" data-toggle="modal" data-target="#complete-dialog">Show modal</button>
          <Modal/>
        </section>
        <section>
          <h3>Buttons</h3>
          <button className="btn btn-default btn-raised">Default</button>
          <button className="btn btn-primary btn-raised">Primary</button>
          <div className="btn-group">
            <a href="javascript:void(0)" className="btn btn-primary">Primary</a>
            <a href="bootstrap-elements.html" data-target="#" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
              <span className="caret"></span>
            </a>
            <ul className="dropdown-menu">
              <li><a href="javascript:void(0)">Action</a></li>
              <li><a href="javascript:void(0)">Another action</a></li>
              <li><a href="javascript:void(0)">Something else here</a></li>
              <li className="divider"></li>
              <li><a href="javascript:void(0)">Separated link</a></li>
            </ul>
          </div>
          <button className="btn btn-success btn-raised">Success</button>
          <button className="btn btn-danger btn-raised">Danger</button>
        </section>
        <section>
          <h3>Custom button content</h3>
          <button className="btn btn-primary btn-raised"><i className="mdi-navigation-check"></i> Ok</button>
          <button className="btn btn-default btn-raised"><i className="mdi-navigation-close"></i> Cancel</button>
        </section>
      </div>;
    }
});

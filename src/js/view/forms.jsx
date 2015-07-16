'use babel';

import React from 'react';

export default class Forms extends React.Component {
  render () {
      return <div className="well bs-component">
        <form className="form-horizontal">
          <fieldset>
            <legend>Legend</legend>
            <div className="form-group">
              <label htmlFor="inputEmail" className="col-lg-2 control-label">Email</label>
              <div className="col-lg-10">
                <input type="email" className="form-control" id="inputEmail" placeholder="Email" />
              </div>
            </div>
            <div className="form-group has-error">
                <label className="col-lg-2 control-label" htmlFor="inputError">Input error</label>
                <div className="col-lg-10">
                    <input type="text" className="form-control" id="inputError" />
                </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputPassword" className="col-lg-2 control-label">Password</label>
              <div className="col-lg-10">
                <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
                <div className="checkbox">
                  <label>
                    <input type="checkbox" /> Checkbox
                  </label>
                </div>
                <br/>
                <div className="togglebutton">
                  <label>
                    <input type="checkbox" /> Toggle button
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputFile" className="col-lg-2 control-label">File</label>
              <div className="col-lg-10">
                <div className="form-control-wrapper fileinput">
                  <input type="text" className="form-control empty" />
                  <input type="file" id="inputFile" multiple="" />
                  <div className="floating-label">Browse...</div>
                </div>

              </div>
            </div>
            <div className="form-group">
              <label htmlFor="textArea" className="col-lg-2 control-label">Textarea</label>
              <div className="col-lg-10">
                <textarea className="form-control" rows="3" id="textArea"></textarea>
                <span className="help-block">A longer block of help text that breaks onto a new line and may extend beyond one line.</span>
              </div>
            </div>
            <div className="form-group">
              <label className="col-lg-2 control-label">Radios</label>
              <div className="col-lg-10">
                <div className="radio radio-primary">
                  <label>
                    <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" />
                    <p>Option one is this</p>
                  </label>
                </div>
                <div className="radio radio-primary">
                  <label>
                    <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
                    <p>Option two can be something else</p>
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="select" className="col-lg-2 control-label">Selects</label>
              <div className="col-lg-10">
                <select className="form-control" id="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
                <br/>
                <select multiple="multiple" className="form-control">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <div className="col-lg-10 col-lg-offset-2">
                <button className="btn btn-default">Cancel</button>
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>;
  }
};

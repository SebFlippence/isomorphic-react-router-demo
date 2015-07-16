'use babel';

import React from 'react';

export default class Modal extends React.Component {
    render () {
        return <div id="complete-dialog" className="modal fade" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                <h4 className="modal-title">Dialog</h4>
              </div>
              <div className="modal-body">
                <p>Fore aut non quem incididunt, varias reprehenderit deserunt quem offendit, cillum proident ne reprehenderit, quem ad laborum, quo possumus praetermissum, si ne illustriora, hic appellat coniunctione, do labore aliqua quo probant. In probant voluptatibus
                  quo mentitum est laboris. Quorum mandaremus graviterque. Mentitum id velit, dolor aut litteris, ea varias illustriora, ita commodo ita ingeniis, iis nulla appellat incurreret, aut irure amet summis pariatur ita ubi quis dolore veniam proident,
                  consequat sed ingeniis.</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-primary" data-dismiss="modal">Dismiss</button>
              </div>
            </div>
          </div>
        </div>;
    }
}

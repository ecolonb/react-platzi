import React from 'react';
import './badge.css';
import confLogo from '../../images/badge-header.svg';
const avatar =
  'https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon';
export default function app() {
  return (
    <div className="Badge">
      <div className="Badge__header">
        <img src={confLogo} alt="Logo of conferencing" />
      </div>

      <div className="Badge__section-name">
        <img className="Badge__avatar" src={avatar} alt="Avatar" />
        <h1>Edgar Colón</h1>
      </div>

      <div className="Badge__section-info">
        <h3>Software Engineer - FullStack developer</h3>
        <div>
          <a href="https://www.facebook.com/edgar.colonb">
            @facebook/edgar.colonb
          </a>
        </div>
      </div>

      <div className="Badge__footer">#platziconf</div>
    </div>
  );
}

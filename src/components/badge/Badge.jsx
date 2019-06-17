import React from 'react';
import './badge.css';
import confLogo from '../../images/badge-header.svg';

export default function app({
  firstname,
  lastname,
  avatar,
  facebook: edgar_facebook,
}) {
  return (
    <div className="Badge">
      <div className="Badge__header">
        <img src={confLogo} alt="Logo of conferencing" />
      </div>

      <div className="Badge__section-name">
        <img className="Badge__avatar" src={avatar} alt="Avatar" />
        <h1>
          {firstname} {lastname}
        </h1>
      </div>

      <div className="Badge__section-info">
        <h3>Software Engineer - FullStack developer</h3>
        <div>
          <a href={edgar_facebook} target="_blank">
            @facebook/edgar.colonb
          </a>
        </div>
      </div>

      <div className="Badge__footer">#platziconf</div>
    </div>
  );
}

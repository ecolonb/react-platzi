import React from 'react';
import './badge.css';
import confLogo from '../../images/badge-header.svg';
const avatar =
  'https://media.licdn.com/dms/image/C5603AQGSgBIcnRqjDA/profile-displayphoto-shrink_200_200/0?e=1564012800&v=beta&t=D-YlZ-1KlAdZqOvD52-9GjkMhOtCzoEBwiWNsjs6D0Y';
const edgar_facebook = 'https://www.facebook.com/edgar.colonb';

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
          <a href={edgar_facebook}>@facebook/edgar.colonb</a>
        </div>
      </div>

      <div className="Badge__footer">#platziconf</div>
    </div>
  );
}

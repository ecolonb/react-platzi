import React from 'react';
import NavBar from '../../components/nabvar/NavBar';
import logoHeader from '../../images/badge-header.svg';
import './badgenew.css';
import Badge from '../../components/badge/Badge';
export default function BadgeNew() {
  const firstname = 'Edgar';
  const lastname = 'Colón';
  const avatar =
    'https://media.licdn.com/dms/image/C5603AQGSgBIcnRqjDA/profile-displayphoto-shrink_200_200/0?e=1564012800&v=beta&t=D-YlZ-1KlAdZqOvD52-9GjkMhOtCzoEBwiWNsjs6D0Y';
  const edgar_facebook = 'https://www.facebook.com/edgar.colonb';

  return (
    <>
      <NavBar />
      <div className="BadgeNew__hero">
        <img className="img-fluid" src={logoHeader} alt="img" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12" />
          <Badge
            lastname={lastname}
            firstname={firstname}
            avatar={avatar}
            facebook={edgar_facebook}
          />
        </div>
      </div>
    </>
  );
}

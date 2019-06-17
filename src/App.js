import React from 'react';
import Badge from './components/badge/Badge';
import './App.css';
import BadgeNew from './pages/badge_new/BadgeNew';

const firstname = 'Edgar';
const lastname = 'Colón';
const avatar =
  'https://media.licdn.com/dms/image/C5603AQGSgBIcnRqjDA/profile-displayphoto-shrink_200_200/0?e=1564012800&v=beta&t=D-YlZ-1KlAdZqOvD52-9GjkMhOtCzoEBwiWNsjs6D0Y';
const edgar_facebook = 'https://www.facebook.com/edgar.colonb';

function App() {
  return (
    <div className="App">
      <BadgeNew />
    </div>
  );
}

export default App;

import './Header.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Header() {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  const location = useLocation();
  useEffect(
    () => {
      const titles = {
        '/': {
          title: 'SWE @ UCSD',
          subtitle: 'Aspire / Advance / Achieve',
          titleTag: 'SWE UCSD',
        },
        '/about': {
          title: 'About Us',
          subtitle: 'Learn about who we are and what it means to be a SWE Bee!',
          titleTag: 'About – SWE UCSD',
        },
        '/events': {
          title: 'SWE Calendar',
          subtitle: 'Subscribe to our calendar to stay notified about our upcoming events!',
          titleTag: 'Calendar – SWE UCSD',
        },
        '/involvement': {
          title: 'Get Involved',
          subtitle: 'Find out how to be active at our chapter',
          titleTag: 'Involvement – SWE UCSD',
        },
        '/outreach': {
          title: 'Outreach',
          subtitle: 'Help us inspire young women to pursue engineering',
          titleTag: 'Outreach – SWE UCSD',
        },
        '/sponsors': {
          title: 'Sponsors',
          subtitle: 'Thanks to our sponsors for their continued support!',
          titleTag: 'Sponsors – SWE UCSD',
        },
      };

      if (location.pathname in titles) {
        setTitle(titles[location.pathname].title);
        setSubtitle(titles[location.pathname].subtitle);
        document.title = titles[location.pathname].titleTag;
      } else {
        setTitle('404');
        setSubtitle('Page Not Found');
        document.title = 'Page Not Found – SWE UCSD';
      }
    },
    [location],
  );
  return (
    <div className="overlay">
      <div className="image" alt="" />
      <div key={location.pathname} className="textContainer">
        <h1 className="h1">{title}</h1>
        <h2 className="h4">{subtitle}</h2>
      </div>
    </div>
  );
}

export default Header;

import SocialIcon from '../assets/social_icon.png';
import OutreachIcon from '../assets/outreach_icon.png';
import TechnicalIcon from '../assets/technical_icon.png';
import ProfessionalIcon from '../assets/professional_icon.png';

import './Calendar.css';

function Calendar() {
  return (
    <div>
      <h1 className="titleText">Our Events</h1>
      <hr className="divider"/>
      <div className="iconsContainer">
        <div className="iconContainer">
          <img className="icon" src={SocialIcon} alt='' />
          <p className="iconLabels">Social Opportunities</p>
        </div>
        <div className="iconContainer">
          <img className="icon" src={OutreachIcon} alt='' />
          <p className="iconLabels">Outreach Opportunities</p>
        </div>
        <div className="iconContainer">
          <img className="icon" src={TechnicalIcon} alt='' />
          <p className="iconLabels">Technical Development</p>
        </div>
        <div className="iconContainer">
          <img className="icon" src={ProfessionalIcon} alt='' />
          <p className="iconLabels">Professional Development</p>
        </div>
      </div>
      <div className="calendarBody">
        <div className="calendarContainer">
          <div className="calendar">
            <iframe title='swe-cal' src="https://calendar.google.com/calendar/embed?src=eng.ucsd.edu_rskqtoaiv6mmk9jg3jq6bb5j7k%40group.calendar.google.com&ctz=America%2FLos_Angeles" styles="border: 0" width="100%" height="600" frameborder="0" scrolling="no"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
import SocialIcon from '../assets/events/social_icon.png';
import OutreachIcon from '../assets/events/outreach_icon.png';
import TechnicalIcon from '../assets/events/technical_icon.png';
import ProfessionalIcon from '../assets/events/professional_icon.png';

import './Calendar.css';

function Calendar() {
  return (
    <div>
      <h1 className="h2 titleText">Our Events</h1>
      <hr className="divider"/>
      <div className="em iconsContainer">
        <div className="iconContainer">
          <img className="eventIcon" src={SocialIcon} alt='' />
          <p className="iconLabels">Social Opportunities</p>
        </div>
        <div className="iconContainer">
          <img className="eventIcon" src={OutreachIcon} alt='' />
          <p className="iconLabels">Outreach Opportunities</p>
        </div>
        <div className="iconContainer">
          <img className="eventIcon" src={TechnicalIcon} alt='' />
          <p className="iconLabels">Technical Development</p>
        </div>
        <div className="iconContainer">
          <img className="eventIcon" src={ProfessionalIcon} alt='' />
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
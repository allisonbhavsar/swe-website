import React from 'react';
import './GetInvolved.css';
import Projects from '../data/Projects';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import Gears from '../assets/swe_gears_2.png';

function GetInvolved() {
  return (
    <div>
      <div className="margin projContainer">
        <h1 className="membershipTitle h2">Attend Our Events</h1>
        <p className="p2 membershipBody">
          The easiest way to start getting involved with SWE is by attending our
          events. We host a variety of events including GBMs, technical workshops,
          networking sessions, high school outreach, and socials. Anyone is welcome
          to attend, regardless of their membership status. Check our calendar for
          upcoming events.
        </p>
        <a href="/events">
          <Button label="SWE Calendar" />
        </a>
      </div>
      <div className="margin">
        <div>
          <h1 className="membershipTitle h2">Start a Membership</h1>
          <h2 className="membershipSubtitle h3">How can I become a section member?</h2>
          <ul>
            <li className="h6 membershipLi">$5 Membership Fee</li>
            <ul>
              <li className="p2 membershipSubLi">Paid to our Treasurer</li>
            </ul>
            <li className="h6 membershipLi">6+ Hours of Participation</li>
            <ul className="p2 membershipSubLi">
              <li>
                Attend GBMs, workshops, and other
                {' '}
                <a href="/events" className="clickableLink">SWE events</a>
              </li>
              <li>
                Get involved with a SWE project (learn more about projects below)
              </li>
              <li>
                Remember to sign in whenever you attend SWE events or meetings in
                order to log your attendance!
              </li>
            </ul>
            <li className="h6 membershipLi">Become a Collegiate Member</li>
            <ul>
              <li className="p2 membershipSubLi">
                Standard Collegiate Membership ($20), Collegiate to Career ($50),
                SWE + SHPE ($24.90), SWE + NSBE ($27.00)
              </li>
              <li className="p2 membershipSubLi">
                Visit
                {' '}
                <a className="clickableLink" target="_blank" rel="noopener noreferrer" href="https://swe.org/">swe.org</a>
                {' '}
                to sign up for collegiate membership
              </li>
            </ul>
          </ul>
        </div>
        <p className="p2 membershipBody">
          Any
          {' '}
          <strong>one</strong>
          {' '}
          of the above will qualify you for membership at our section.
          Sectional membership comes with a variety of perks, including
          a free SWE t-shirt, voting rights in board elections, and eligibility to
          run for board positions. However, note that
          {' '}
          <strong>official membership is not required</strong>
          {' '}
          to attend our events and be involved in our organization. Everyone is welcome!
        </p>
        <h2 className="membershipSubtitle h3">How can I become an officer?</h2>
        <p className="membershipLi p1">
          Eligibility: In order to run for board positions, you must currently be
          a
          {' '}
          <strong>member</strong>
          {' '}
          at our section.
        </p>
        <div className="leadershipBody">
          <p className="p2 membershipBody">
            Board election details?
          </p>
        </div>
      </div>
      <div className="margin projContainer">
        <div className="projHeader">
          <div>
            <h1 className="h2 projTitle">Join a Project Team</h1>
            <h1 className="h3 projSubtitle">Gain Technical Experience</h1>
          </div>
          <img src={Gears} className="threeGears" alt="" />
        </div>
        <p className="p1 projDescription">
          Projects are a great way to stay involved with the SWE community
          and earn hours towards membership while gaining hands-on technical
          experience and meeting fellow SWE Bees. Stay subscribed to our
          newsletter and attend GBMs to hear about future project opportunities.
          Here are some of our current projects:
        </p>
        {Projects.map((project, index) => {
          if (index % 2 === 0) {
            return (
              <ProjectCard
                name={project.name}
                description={project.description}
                right={false}
              />
            );
          }

          return <ProjectCard name={project.name} description={project.description} right />;
        })}
        <div className="sweetIdeasContainer">
          <h1 className="h2 projTitle">SWE-et Ideas!</h1>
          <p className="p1 sweetIdeasBody">
            Interested in starting your own project? Fill out the
            SWE-et Ideas project application
            for a chance to bring your ideas to life! If your application is selected,
            we&apos;ll help you form a team and provide you with funding
            for your very own project.
          </p>
          <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSfnSqAgbqSM9LhiWwLa6g5HYfKgdbCFzLfMuGGP3OcClm6hrw/viewform">
            <Button label="Apply Here" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default GetInvolved;

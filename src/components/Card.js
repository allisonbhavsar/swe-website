import './Card.css';
import Gears from '../assets/swe_gears_2.png';

function Card(props) {
  let align;
  if (props.right === true) {
    align = 'labelLeft'
  }
  else {
    align = 'labelRight'
  }
  return (
    <body>
      {props.right ?
        <div>
          <div className="projectContainer">
            <div className="Right Merriweather">{props.description}</div>
            <img src={Gears} className="Left_gears"/>
            <p className={align}>{props.name}</p>
          </div></div> : <div>
          <div className="projectContainer">
            <p className={align}>{props.name}</p>
            <img src={Gears} className="Left_gears"/>
            <div className="Left Merriweather">{props.description}</div>
          </div>
        </div>
      }
      {/*<div className="projectContainer">
          <p className={align}>{props.name}</p>
          {props.right ? <img src={Gears} className="Left_gears"/> : <img src={Gears} className="Right_gears"/> }
          {props.right ? <div className="Right Merriweather">{props.description}</div> : <div className="Left Merriweather">{props.description}</div>}
          
          
  </div>*/}
    </body>
  );
}

export default Card;
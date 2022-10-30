import { GoMarkGithub } from 'react-icons/go'

function Footer() {
  return (
    <footer>
      <div>
        <h2>Check our GitHub Profiles!</h2>
        <div className="contactInfo">
          <p>Jonny Thompson</p>
          <a href='https://github.com/JonnyThompson7' target='_blank'>
            <GoMarkGithub className='icon' />
          </a>
        </div>
        <div className="contactInfo">
          <p>Kal O</p>
          <a href='https://github.com/Crackerbox123' target='_blank'>
            <GoMarkGithub className='icon' />
          </a>
        </div>
        <div className="contactInfo">
          <p>Ava Sczygelski</p>
          <a href='https://github.com/sczygelski' target='_blank'>
            <GoMarkGithub className='icon' />
          </a>
        </div>
        <div className="contactInfo">
          <p>Susan Brown</p>
          <a href='https://github.com/SuB-GH' target='_blank'>
            <GoMarkGithub className='icon' />
          </a>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
import { GoMarkGithub } from 'react-icons/go'

function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <div className="contact-info">
          <p>Jonny Thompson</p>
          <a href='https://github.com/JonnyThompson7' target='_blank'>
            <GoMarkGithub className='icon' />
          </a>
        </div>
        <div className="contact-info">
          <p>Kal Oestreicher</p>
          <a href='https://github.com/Crackerbox123' target='_blank'>
            <GoMarkGithub className='icon' />
          </a>
        </div>
        <div className="contact-info">
          <p>Ava Sczygelski</p>
          <a href='https://github.com/sczygelski' target='_blank'>
            <GoMarkGithub className='icon' />
          </a>
        </div>
        <div className="contact-info">
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
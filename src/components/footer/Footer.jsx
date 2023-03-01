import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const faIconStyle = { height: '30px' }

const Footer = () => {

    return (
        <>
            <footer className='footer'>
                <span>@2023 Next Events</span>
                <ul>
                    <li>
                        <a href="https://ch.linkedin.com/in/siegfriedbozza">
                            <FontAwesomeIcon icon={faLinkedin} style={faIconStyle} />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/SiegfriedBz">
                            <FontAwesomeIcon icon={faGithub} style={faIconStyle} />
                        </a>
                    </li>
                </ul>
            </footer>
        </>
    )
}

export default Footer

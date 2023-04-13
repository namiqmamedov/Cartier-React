import React from 'react'
import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Media
} from 'reactstrap'
import {Link} from 'react-router-dom'
import '../../styles/footer.css'
import { BsInstagram } from 'react-icons/bs';
import { ImFacebook } from 'react-icons/im';
import { BsTwitter } from 'react-icons/bs';
import { TfiYoutube } from 'react-icons/tfi';
import { FaPinterestP } from 'react-icons/fa';



const Footer = () => {
  return (
    <footer>
      <div className="footer-index">
        <Container>
          <Row>
            <div className="footer-main">
              <div className="router-wrapper">
              <div className="router-index">
                  <h2 className="router-title">CUSTOMER CARE</h2>
                  <div className="router-item">
                    <ul>
                      <li>
                        <Link>
                        CONTACT US
                        </Link>
                      </li>
                      <li>
                        <Link>
                        CALL NOW: 800 227 8437
                        </Link>
                      </li>
                      <li>
                        <Link>
                        FAQ
                        </Link>
                      </li>
                      <li>
                        <Link>
                        CHECK ORDER
                        </Link>
                      </li>
                      <li>
                        <Link>
                        BOOK AN APPOINTMENT
                        </Link>
                      </li>
                    </ul>
                  </div>
              </div>
              <div className="router-index">
                  <h2 className="router-title">OUR COMPANY</h2>
                  <div className="router-item">
                    <ul>
                      <li>
                        <Link>
                        CONTACT US
                        </Link>
                      </li>
                      <li>
                        <Link>
                        CALL NOW: 800 227 8437
                        </Link>
                      </li>
                      <li>
                        <Link>
                        FAQ
                        </Link>
                      </li>
                      <li>
                        <Link>
                        CHECK ORDER
                        </Link>
                      </li>
                      <li>
                        <Link>
                        BOOK AN APPOINTMENT
                        </Link>
                      </li>
                    </ul>
                  </div>
              </div>
              <div className="router-index">
                  <h2 className="router-title">LEGAL AREA</h2>
                  <div className="router-item">
                    <ul>
                      <li>
                        <Link>
                        CONTACT US
                        </Link>
                      </li>
                      <li>
                        <Link>
                        CALL NOW: 800 227 8437
                        </Link>
                      </li>
                      <li>
                        <Link>
                        FAQ
                        </Link>
                      </li>
                      <li>
                        <Link>
                        CHECK ORDER
                        </Link>
                      </li>
                      <li>
                        <Link>
                        BOOK AN APPOINTMENT
                        </Link>
                      </li>
                    </ul>
                  </div>
              </div>
              </div>
              <div className="social-link">
                <h2 className='router-title'>FOLLOW US</h2>
                <ul>
                  <li>
                    <a href="#" target='_blank'>
                      <BsInstagram/>
                    </a>
                  </li>
                  <li>
                    <a href="#" target='_blank'>
                      <ImFacebook/>
                    </a>
                  </li>
                  <li>
                    <a href="#" target='_blank'>
                      <BsTwitter/>
                    </a>
                  </li>
                  <li>
                    <a href="#" target='_blank'>
                      <TfiYoutube/>
                    </a>
                  </li>
                  <li>
                    <a href="#" target='_blank'>
                      <FaPinterestP/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
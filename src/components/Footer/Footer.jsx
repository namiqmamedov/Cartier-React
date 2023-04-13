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


const Footer = () => {
  return (
    <footer>
      <div className="footer-index">
        <Container>
          <Row>
            <div className="footer-main">
              <div className="footer-router">
                  <h2 className="router-title">Customer Care</h2>
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
          </Row>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
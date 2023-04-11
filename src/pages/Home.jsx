import React from 'react'
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap'
import {Link} from 'react-router-dom'
import '../styles/home.css'

const Home = () => {
    return ( <> <main>
        <Container>
            <Row>
                <div className="hero-index">
                    <div class="youtube-player pristine" data-video-id="FiSxg_LNEFU">
                        <iframe
                            width="640"
                            height="360"
                            src="https://www.youtube.com/embed/GrwwrEBB5h8?controls=1&modestbranding=1&rel=0&showinfo=0&loop=1&hl=en&playsinline=true&enablejsapi=1&origin=https%3A%2F%2Fwww.cartier.com&widgetid=1"
                            title="Cartier main video"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowfullscreen></iframe>
                    </div>
                    <div className="hero-content mt-3">
                        <h2 className='title'>
                            A Film, A Fragrance, A Panther</h2>
                        <p>
                            Starring Vanessa Kirby, the latest La Panthère de Cartier film captures the
                            irresistible olfactory power of this floral-feline accord.</p>
                        <div className="link-actions">
                            <Link>
                                Discover
                            </Link>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    </main> </>
    )
}

export default Home
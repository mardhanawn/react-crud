import React, { Fragment } from 'react'
import { Container, Button, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

import HeaderLanding from '../../layouts/HeaderLanding'
import Poster from '../../layouts/Poster'
import Poster2 from '../../layouts/Poster2'
import Movie from '../../layouts/Movie'
// import Table from '../../layouts/Table'
import Footer from '../../layouts/Footer'

export default class UpdatePage extends React.Component {
    render() {
        return (
            <Fragment>
                <HeaderLanding />
                <Poster />
                <Poster2 />
                <Movie />
                <Container className="container-franchise">
                    <Row>
                        <Col>
                        <Link to="/">
                            <Button className="update mr-2 mb-2">
                                Back
                            </Button>    
                        </Link> 
                        </Col>
                    </Row>
                    <p className="subtitle">Update Contact</p>
                </Container>
                <Footer />
            </Fragment>
        )
    }
}

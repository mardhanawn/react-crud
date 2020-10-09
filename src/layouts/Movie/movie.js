import React, { Fragment } from 'react'
import { Container, Col, Row } from 'reactstrap'

import './style.css'

export default class Movie extends React.Component {
    render() {
        return(
            <Fragment >
                <Container fluid={true} className="container-franchise">
                    <Row>
                        <Col md="12" className="d-block text-center wow animated fadeInUp">
                            <p className="title">How Does It Work?</p>
                        </Col>
                        <Col md={{ size: 6, offset: 3 }} className="d-block text-center wow animated fadeInUp">
                            <p className="subtitle">You only need to fill in the data that has been provided, after that you can update, or delete existing data. It's that easy to help you.</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

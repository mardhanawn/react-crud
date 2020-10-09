import React, { Fragment } from 'react'
import { Container, Button, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { postContactsCreate } from '../../actions/contactAction'

import HeaderLanding from '../../layouts/HeaderLanding'
import Poster from '../../layouts/Poster'
import Poster2 from '../../layouts/Poster2'
import Movie from '../../layouts/Movie'
import Form from '../../layouts/Form'
import Footer from '../../layouts/Footer'

class CreatePage extends React.Component {
    handleSubmit(data){
        this.props.dispatch(postContactsCreate(data))
    }
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
                    <p className="subtitle">Create Contact</p>
                    <Form onSubmit={(data) => this.handleSubmit(data)} />
                </Container>
                <Footer />
            </Fragment>
        )
    }
}

export default connect()(CreatePage)

import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { getContactsList } from '../../actions/contactAction'

import HeaderLanding from '../../layouts/HeaderLanding'
import Poster from '../../layouts/Poster'
import Poster2 from '../../layouts/Poster2'
import Movie from '../../layouts/Movie'
import Table from '../../layouts/Table'
import Footer from '../../layouts/Footer'

class LandingPage extends React.Component {
    componentDidMount() {
        this.props.dispatch(getContactsList())
    }
    render() {
        return (
            <Fragment>
                <HeaderLanding />
                <Poster />
                <Poster2 />
                <Movie />
                <Table  />
                <Footer />
            </Fragment>
        )
    }
}

export default connect()(LandingPage)

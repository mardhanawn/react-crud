import React, { Fragment } from 'react'

import HeaderLanding from '../../layouts/HeaderLanding'
// import Poster from '../../layouts/Poster'
// import Poster2 from '../../layouts/Poster2'
// import Movie from '../../layouts/Movie'
// import Table from '../../layouts/Table'
import Footer from '../../layouts/Footer'

export default class DeletePage extends React.Component {
    render() {
        return (
            <Fragment>
                <HeaderLanding />
                <h1>Delete Page</h1>
                <Footer />
            </Fragment>
        )
    }
}

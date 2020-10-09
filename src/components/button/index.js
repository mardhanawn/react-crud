/* eslint-disable react/no-typos */
import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'

import './style.css'

export default class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }
    render() {
        const { title } = this.props
        return (
            <Fragment>
                <Button className="button">{title}</Button>
            </Fragment>
        )
    }
}

Component.propTypes = {
    title: PropTypes.string.isRequired
}

Component.defaultProps = {
    title: ''
}

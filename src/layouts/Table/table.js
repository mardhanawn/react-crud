import React, { Fragment } from 'react'
import { Container, Button, Spinner, Row, Col } from 'reactstrap'
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './style.css'

const { SearchBar } = Search
const columns = [{
  dataField: 'id',
  text: 'ID',
  sort: true,
  headerStyle: () => {
      return {width: "5%" }
  }
}, {
  dataField: 'firstName',
  text: 'First Name',
  sort: true
}, {
  dataField: 'lastName',
  text: 'Last Name'
}, {
    dataField: 'age',
    text: 'Age',
    sort: true,
    headerStyle: () => {
        return {width: "10%" }
    }
}, {
    dataField: 'link',
    text: 'Instruction',
    headerStyle: () => {
        return {width: "18%" }
    },
    formatter: (rowContent, row) => {
        return (
            <div>
                <Link to={"update/" + row.id}>
                    <Button className="update mr-2">
                        Update
                    </Button>
                </Link>
                <Link>
                    <Button className="delete mr-2">
                        Delete
                    </Button>
                </Link>
            </div>
        )
    }
}];

const defaultSorted = [{
    dataField: 'id',
    order: 'asc'
}]

const mapStateToProps = (state) => {
    return {
        getContactList: state.contacts.getContactList,
        errorContactList: state.contacts.errorContactList
    }
}

const Table = (props) => {
    return (
        <Fragment>
            <Container className="container-franchise">
                { props.getContactList ? 
                <ToolkitProvider keyField='id' data={ props.getContactList } columns={ columns } defaultSorted={ defaultSorted } search >
                {(props) => (
                    <div>
                        <Row>
                            <Col>
                                <Link to="/create">
                                    <Button className="update mr-2">
                                        Create
                                    </Button>
                                </Link>
                            </Col>
                            <Col>
                                <div className="float-right">
                                    <SearchBar { ...props.searchProps } placeholder="Search ...." />
                                </div>
                            </Col>
                        </Row>
                        
                        <BootstrapTable
                        { ...props.baseProps }
                        />
                    </div>
                )}
                </ToolkitProvider> : 
                <div className="text-center">
                    { props.errorContactList ? <p className="subtitle">{props.errorContactList}</p> : <Spinner className="spinner" /> }
                </div> }
            
            </Container>
        </Fragment>
    )
}

export default connect(mapStateToProps, null)(Table)
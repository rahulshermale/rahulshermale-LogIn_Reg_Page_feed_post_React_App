import React from 'react'
import { Col,Button} from 'react-bootstrap'
import AdminButtons from './AdminButtons'
import { Container,Row } from 'reactstrap'

function Admindash() {
  return (
    
        <Container fluid className=''>
            <Row>
                <AdminButtons />
                <Col >

                    <div className=''>
                      {/* <br></br><br></br><br></br><br></br><br></br><br></br><br></br> */}
                      <br></br><br></br><br></br><br></br>
                        <h2 align="center" className='p-3 text-primary-emphasis bg-primary-subtle border border-primary-subtle'>Welcome to Admin Dashboard</h2>
                        <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                    </div>
                </Col>
            </Row>
        </Container>
  )
}

export default Admindash
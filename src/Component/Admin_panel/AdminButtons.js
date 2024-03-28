// import Container from 'react-bootstrap/Container';

import { Link, NavLink, Navigate, Outlet } from 'react-router-dom';
import { Col, Button } from 'reactstrap';

function AdminButtons() {
    return (
        <>
            <Col md="12" className='p-3 text-primary-emphasis   border-primary-subtle'>
                <div className="button-container ">

                    {/* <Button  tag={Link} to="/showstaff">Staff</Button>
                    <Button  tag={Link} to="/courselist">Course</Button> */}
                    <Button className='btn btn-success ' tag={Link} to="/enqlist">All Post</Button>
                    
                    <Button className='btn btn-info' tag={Link} to="/about">User List</Button>

                </div>
            </Col>
        </>
    )
}

export default AdminButtons
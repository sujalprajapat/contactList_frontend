import { Button,Navbar,Container,Offcanvas,Nav,NavDropdown,Form } from 'react-bootstrap';
import { MdPermContactCalendar } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { CiSquarePlus } from "react-icons/ci";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Contact from './Contact';
function Dashboard(){
const navigate = useNavigate();
    return(
        <div>
              <>
      {[false,].map((expand) => (
        <Navbar key={expand} expand={expand} className=" mb-3 navbar">
          <Container fluid className='d-flex'>
            <div>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    style={{width:"400px"}}
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
                    <ul className='menu'>
                        <li><Link to="/" className='d-flex align-items-center'><MdPermContactCalendar></MdPermContactCalendar><p>contact list</p></Link></li>
                        <li><Link className='d-flex align-items-center' to="/contact"><RiContactsLine></RiContactsLine><p>contact view</p></Link></li>
                        <li><Link to="/add/contact" className='d-flex align-items-center'><CiSquarePlus></CiSquarePlus><p>contact add</p></Link></li>
                    </ul>
              </Offcanvas.Body>
            </Navbar.Offcanvas>            
            <Navbar.Brand className='p-4' style={{color:"white"}}> CONTACT LIST </Navbar.Brand>
            </div>
            <div>
            <Form className="d-none d-lg-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    style={{width:"400px"}}
                  />
                  <Button variant="outline-light">Search</Button>
                </Form>
            </div>
            <div className='icon d-none d-sm-flex'>
                <Link to="/">   <MdPermContactCalendar></MdPermContactCalendar>
                </Link>
            <Link to="/contact">
            <RiContactsLine></RiContactsLine>
            </Link>
            <Link to="/add/contact">
            <CiSquarePlus></CiSquarePlus>

            </Link>
            </div>
          </Container>
        </Navbar>
      ))}
    </>
    <div className='list'>
    <Link to="/">   
              <MdPermContactCalendar></MdPermContactCalendar>
                </Link>
            <Link to="/contact">
            <RiContactsLine ></RiContactsLine>
            </Link>
            <Link to="/add/contact">
            <CiSquarePlus></CiSquarePlus>

            </Link>
    </div>
      
        </div>
    )
}
export default Dashboard;

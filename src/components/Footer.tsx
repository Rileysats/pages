import React from 'react';
import { Container, Navbar} from 'react-bootstrap';
class Footer extends React.Component{
  render(){
    return (
      <div className="fixed-bottom">
        <Navbar bg="dark" variant="dark" sticky="top">
          <Container>
            <Navbar.Brand className="m-auto">© 2021, Built by Riley Satanek</Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Footer;

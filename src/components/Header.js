import React from 'react';
import { NavLink } from 'react-router-dom';
import {startLogout} from '../actions/auth';
import {connect} from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
 } from 'reactstrap';

export const Header = ({startLogout}) => (
  <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Spendify</NavbarBrand>
            <Nav className="navbar-nav ml-auto" navbar>
              <NavItem >
                <NavLink to="/dashboard" className="nav-link" activeClassName="active" >Go home</NavLink>
        
              </NavItem>
              <NavItem>
              <NavLink to="/create" className="nav-link" activeClassName="active">Create an Expense</NavLink>
                    </NavItem>
            
              <NavItem>
              <button className="btn btn-info" onClick={startLogout}>Logout</button>  

              </NavItem>
            </Nav>
        </Navbar>
      </div>
 
)
const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})
export default connect(undefined, mapDispatchToProps)(Header)

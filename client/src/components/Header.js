import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends React.Component{
    renderContent(){
        switch(this.props.auth){
            case null :
                    return ;
            case false :
                    return <a className="button is-primary" href="/auth/google"> <span class="icon">
                           <i class="fab fa-google"></i>
                           </span>Log In</a>;
            default :
                    return <div><Payments /> <a className="button is-primary" href="/api/logout"> Log Out</a></div>
        }

    }

    render(){
        console.log(this.props.auth);
        return(
           <div>
                <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <Link className="navbar-item "
                            to={this.props.auth?'/surveys' : '/'}
                        >
                           <h2 className="button is-primary is-outlined title is-4"> EMAILY </h2>
                        </Link>

                        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" className="navbar-menu">
                        <div className="navbar-end">
                            <div className="navbar-item">
                                  <div className="buttons">
                                    {this.renderContent()}
                                  </div>
                            </div>
                        </div>
                    </div>
                </nav>
           </div>
        )
    }
}

$(document).ready(function() {

  // Check for click events on the navbar burger icon
  $(".navbar-burger").click(function() {

      // Toggle the "is-active" className on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

  });
});

const mapStateToProps = ({auth}) => {
    return {
        auth
    }
}

export default connect(mapStateToProps)(Header)
import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import * as actions from '../Actions';
import { connect } from 'react-redux';

class Payments extends Component{

    render(){
        return (
            <StripeCheckout
                name = "EMAILY"
                description = "5$ for 5 email credits"
                amount = {500}
                token = {token => this.props.handleToken(token)}
                stripeKey = {process.env.REACT_APP_STRIPE_KEY}
            >
             <button className="button is-primary">Add Credits</button>
            </StripeCheckout>
        )
    }
}

export default connect(null, actions)(Payments);
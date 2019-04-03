import React from 'react';
import { Link } from 'react-router-dom';

class DashBoard extends React.Component{

    render(){
        return(
            <div class="columns is-mobile is-centered Dashboard-main">
                <Link to = "/surveys/new" class="button is-large is-primary is-rounded">+</Link> 
            </div>
        )
    }

}

export default DashBoard;
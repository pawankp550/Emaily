import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';
import "react-bulma-components/full";
import { connect } from 'react-redux';
import * as actions from '../Actions';
import Landing from './Landing';
import DashBoard from '../components/DashBoard';
import '../App.css';


const SurveyNew = () => {
    return(
        <h1> Survey New</h1>
    )
}


class App extends React.Component{

componentDidMount(){
    this.props.fetchUser();
}

render(){
return (
    <div className='container'>
        <BrowserRouter>
            <div>
                <Header />
                <Route exact path='/' component = {Landing} />
                <Route exact path='/surveys' component = {DashBoard} />
                <Route path='/surveys/new' component = {SurveyNew} />
            </div>
        </BrowserRouter>
    </div>
     )
    }


}

export default connect( null, actions)(App);
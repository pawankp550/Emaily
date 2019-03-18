import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Header from './Header';


const Landing = () => {
    return(
        <h1> Landing</h1>
    )
}

const Survey = () => {
    return(
        <h1> Survey</h1>
    )
}

const SurveyNew = () => {
    return(
        <h1> Survey New</h1>
    )
}

const App = () => {

    return (
    <div>
        <BrowserRouter>
            <div>
                 <Header />
                <Route exact path='/' component = {Landing} />
                <Route exact path='/surveys' component = {Survey} />
                <Route path='/surveys/new' component = {SurveyNew} />
            </div>
        </BrowserRouter>
    </div>
    )

}

export default App;
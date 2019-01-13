import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render(){
        return(
            <div className="jumbotron">
                <h1> Words learning app</h1>
                <p>This learning app helps you to learn new words...</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more...</Link>
            </div>
        );
    }
}

export default HomePage;
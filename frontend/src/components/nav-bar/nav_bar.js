import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.scss'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.logoutUser = this.logoutUser.bind(this);
        this.getLinks = this.getLinks.bind(this);
    }

    handleClick(){
        const demoUser = {email: 'demo@gmail.com', password: 'password'}; 
        this.props.login(demoUser);
    }

    logoutUser(e) {
        e.preventDefault();
        this.props.logout();
    }

    getLinks() {
        if (this.props.loggedIn) {
            return (
                <div>
                    <Link className='user-page-link' to='/user_info'>Your Moral Views</Link>
                    <button onClick={this.logoutUser} className="logout-button">Logout</button>
                    <Link to={`/quizzes/index`}className="go-right-to-results">See all Quizes</Link>
                </div>
            );
        } else {
            return (
                <div className="nav-links">
                    <Link to={'/signup'}>Signup</Link>
                    <Link to={'/login'}>Login</Link>
                    <a className="demo-button" onClick={() => this.handleClick()}>Demo</a>
                </div>
            );
        }
    }

    getLinks2(){
        if (this.props.loggedIn){
            return (
                <Link id="create-quiz-padding" className='create-quiz-link' to='/createquiz'>Create A Quiz</Link>
            )
        }
    }

    render() {
        return (
            <div className="nav-bar">
                <div className="space">
                    {this.getLinks2()}
                </div>
                <Link to="/" className="nav-title">Am I the Moral One?</Link>
                { this.getLinks()}
            </div>
        );
    }
}

export default NavBar;
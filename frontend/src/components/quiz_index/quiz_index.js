import React from 'react'; 
import {Link} from 'react-router-dom'
import './quiz_index.scss'
class QuizIndex extends React.Component {
    constructor(props){
        super(props); 
        this.specialNumberOfQuizzesVariable = 5; 

        this.firsts = []
    }
   
    componentDidMount(){
      this.props.fetchTotalNumberOfQuizzes();
      this.props.fetchUser(this.props.loggedInUser.email)
        
    }
  
    generateLinks(){
        let array = [];
        for(let i = 1; i < this.props.total + 1; i++){
            if (!this.props.firstQuestion[i - 1]){
                continue
            }
            if(i === 1){
                array.push(
                    <div>
                        <Link className='quiz-index-link' to={`/quizzes/${i}`}>{'Philosophical Ethical Dilemas'}</Link>
                        <div>First Question: </div>
                        <h1 >{this.props.firstQuestion[i - 1].split(" ").slice(0, 9).join(" ")}...</h1>
                       
                
                        <br></br>
                        <Link to={`/results/${i}`} className="results">Skip to data visualization of results</Link>
                    </div>)
            } 
            if (i === 2) {
                array.push(
                    <div>
                        <Link className='quiz-index-link' to={`/quizzes/${i}`}>{'Real World Ethical Dilemas'}</Link>
                        <div>First Question: </div>
                        <h1 >{this.props.firstQuestion[i - 1].split(" ").slice(0, 9).join(" ")}...</h1>
                        <br></br>
                        <Link to={`/results/${i}`} className="results">Skip to data visualization of results</Link>
                    </div>)
            } 
            
            if(i > 2) {
            array.push(
                <div>
                    <Link className='quiz-index-link' to={`/quizzes/${i}`}>{'User Generated Quiz' + ' ' + `${i}`}</Link>
                    <div>First Question: </div>
                    <h1 > {this.props.firstQuestion[i - 1].split(" ").slice(0, 9).join(" ")}...</h1>
                    
                   
                    <br></br>
                    <Link to={`/results/${i}`} className="results" >Skip to data visualization of results</Link>
                </div>)
            }
            
            
        }
        return array; 
    }
 

    render(){       
        if(!this.props.total){
            debugger
            return null; 
        }
        if (this.firsts.length === 0) {
            for (let i = 1; i < this.props.total + 1; i++) {
                // this.props.fetchFirstQuestion(i);
                this.firsts.push(this.props.fetchFirstQuestion(i))
            }
        }      

        for(let i = 1; i < this.props.total + 1; i++){
            if (!this.props.firstQuestion[i - 1]){

            }
        }
      
       
        let links = this.generateLinks(); 
        return(
        
        <div className="quiz-index">
            <div>
            <h1 className='quiz-index-title'>Choose a Quiz!</h1>
            {links.map(link => {
                return link 
            })}
                </div>
            <div className="quiz-index-pic">

            </div>
        </div>

        )
    }
}

export default QuizIndex; 
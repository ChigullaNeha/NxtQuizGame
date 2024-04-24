import {Component} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {RiErrorWarningFill} from 'react-icons/ri'
import Cookies from 'js-cookie'
import Header from '../Header'
import './index.css'

class Home extends Component {
  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
      return <Redirect to="/login" />
    }
    return (
      <div className="home-container">
        <Header />
        <img
          src="https://res.cloudinary.com/dedvz7flb/image/upload/v1713338966/undraw_Questions_re_1fy7_1_dvs9v8.png"
          alt="NxtQuiz"
          className="nxt-quiz-img"
        />
        <h1>How Many Of These Questions Do You Actually Know?</h1>
        <p>Test yourself with these easy questions and answers.</p>
        <Link to="/q">
          <button type="button" className="quiz-btn">
            Start Quiz
          </button>
        </Link>
        <div className="error-icon-container">
          <img
            src="https://res.cloudinary.com/dedvz7flb/image/upload/v1713933278/error_d4xbft.png"
            alt="error-icon"
          />
        </div>
        <p>All the progress will be lost, if you reload during the quiz</p>
      </div>
    )
  }
}
export default Home

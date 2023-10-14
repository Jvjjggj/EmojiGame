// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, topScore} = props

  return (
    <div className="navbar">
      <div className="emojiLogDiv">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="emojiHead">Emoji Game</h1>
      </div>
      {score < 12 ? (
        <div className="scoreDiv">
          <p className="para">Score: {score} </p>
          <p className="para"> Top Score : {topScore}</p>
        </div>
      ) : null}
    </div>
  )
}

export default NavBar

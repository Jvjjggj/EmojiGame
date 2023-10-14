import './index.css'

const WinOrLossCard = props => {
  const {score, initialState} = props

  const startNewGame = () => {
    initialState()
  }

  const imgUrll =
    score >= 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const resultHead = score >= 12 ? 'You Won' : 'You Lose'

  const altE1 = score >= 12 ? 'win' : 'lose'

  const bestScore = score >= 12 ? 'Best Score' : null

  return (
    <div className="lossCard">
      <div className="scoreDivv">
        <h1>{resultHead}</h1>
        <p>Score</p>
        <p>{score}/12</p>
        <p>{bestScore}</p>
        <button onClick={startNewGame} className="playAgainBtn" type="button">
          Play Again
        </button>
      </div>
      <div className="scoreDivv">
        <img className="sadImg" src={imgUrll} alt={altE1} />
      </div>
    </div>
  )
}

export default WinOrLossCard

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'

import EmojiCard from '../EmojiCard'

import NavBar from '../NavBar'

import './index.css'

import WinOrLossCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  // eslint-disable-next-line react/no-unused-state
  state = {emojisList: this.props, lst: [], isWin: false, score: 0, topScore: 0}

  initialState = () => {
    this.setState({lst: [], isWin: false, score: 0})
  }

  changeEmoji = idd => {
    const {emojisList} = this.props
    const {lst, isWin, score, topScore} = this.state

    const isCheck = lst.includes(idd)

    this.setState({isWin: isCheck})

    if (!isWin) {
      this.setState(prevState => ({score: prevState.score + 1}))
    }

    if (score > topScore) {
      this.setState({topScore: score + 1})
    }

    const shuffleLst = emojisList.sort(() => Math.random() - 0.5)
    this.setState((emojisList: shuffleLst))
    this.setState(prevState => ({lst: [...prevState.lst, idd]}))
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const {emojisList, lst, isWin, score, topScore} = this.state
    const initialList = emojisList.emojisList
    return (
      <div className="mainConatiner">
        <NavBar score={score} topScore={topScore} />
        <div className="emojiGrid">
          {isWin === true || score >= 12 ? (
            <WinOrLossCard initialState={this.initialState} score={score} />
          ) : (
            <div className="emojiCard">
              <ul className="unorderList">
                {initialList.map(i => (
                  <EmojiCard
                    changeEmoji={this.changeEmoji}
                    image={i}
                    key={i.id}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame

// Write your code here.

import './index.css'

const EmojiCard = props => {
  // eslint-disable-next-line no-unused-vars
  const {image, changeEmoji} = props
  const idd = image.id
  const emojiName1 = image.emojiName
  const emojiUrl1 = image.emojiUrl
  const onClickEmoji = () => {
    changeEmoji(idd)
  }

  return (
    <li>
      <button type="button" onClick={onClickEmoji} className="btn">
        <img src={emojiUrl1} className="img" alt={emojiName1} />
      </button>
    </li>
  )
}

export default EmojiCard

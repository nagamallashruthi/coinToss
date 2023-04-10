// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    count: 0,
    heads: 0,
    tails: 0,
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClickTossBtn = () => {
    const {count, heads, tails, imageUrl} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    console.log(tossResult)
    if (tossResult === 0) {
      this.setState({count: count + 1})
      this.setState({heads: heads + 1})
      this.setState({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      })
    } else {
      this.setState({
        imageUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      })
      this.setState({tails: tails + 1})
      this.setState({count: count + 1})
    }
  }

  render() {
    const {count, heads, tails, imageUrl} = this.state
    return (
      <div className="container">
        <div className="bg">
          <h1 className="head">Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          <img src={imageUrl} className="img" alt="toss result" />
          <button type="button" className="btn" onClick={this.onClickTossBtn}>
            Toss coin
          </button>

          <div className="p">
            <p className="m">Total:{count}</p>
            <p className="m">Heads:{heads}</p>
            <p className="m">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss

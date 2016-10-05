import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import '../../App.css'

class RedditCard extends Component {
  static props = {
    github: PropTypes.object,
  }

  renderBlankCard() {
    return (
      <div className='card'>
        <div>
          <h1>Reddit Card</h1>
        </div> 
      </div>
    )
  }

  renderCard(props) {
    return (
      <div className='card'>
        <h1>Reddit Card</h1>
        <pre style={{textAlign: 'left'}}>{JSON.stringify(props, null, 2)}</pre>
      </div>
    )
  }

  render() {
    return this.props.reddit ? 
      this.renderCard(this.props.reddit) : 
      this.renderBlankCard()
  }
}

const mapStateToProps = ({ username }) => ({ reddit: username.reddit })

export default connect(mapStateToProps)(RedditCard)

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import '../../App.css'

class GitHubCard extends Component {
  static props = {
    github: PropTypes.object,
  }

  renderBlankCard() {
    return (
      <div className='card'>
        <div>
          <h1>Github Card</h1>
        </div> 
      </div>
    )
  }

  renderCard({ name, location, avatar_url }) {
    return (
      <div className='card'>
        <h1>Github Card</h1>
        <div>
          <h1>{name}</h1>
          <h2>{location}</h2>
        </div> 
        <img src={avatar_url} />
      </div>
    )
  }

  render() {
    return this.props.github ? 
      this.renderCard(this.props.github) : 
      this.renderBlankCard()
  }
}

const mapStateToProps = ({ username }) => ({ github: username.github })

export default connect(mapStateToProps)(GitHubCard)


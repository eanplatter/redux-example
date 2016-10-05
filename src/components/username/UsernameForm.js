import React, { Component, PropTypes } from 'react'
import actions from '../../actions'
import asyncActions from '../../services'
import { connect } from 'react-redux'

/**
 * This is a style object, akin to what is default
 * in React Native. 
 */
const styles = {
  container: {
    borderBottom: '1px solid #D6D6D6', 
    marginBottom: '20px',
    padding: '20px',
  },
  label: {
    fontSize: '15px',
  },
  input: {
    margin: '10px',
    padding: '10px',
    border: 'none',
    borderBottom: '3px solid black',
  },
  button: {
    width: '300px',
    margin: '10px',
    fontSize: '15px',
    padding: '10px',
    border: '3px solid black',
    borderRadius: '4px', 
    backgroundColor: '#fff',
    cursor: 'pointer',
  },
}

class UsernameForm extends Component {
  static propTypes = {
    username: PropTypes.object,
    setUsername: PropTypes.func.isRequired,
  }

  render() {
    return (
      <div style={styles.container}>
        <div>
          <label 
            style={styles.label}>
            Enter a username
          </label>
          <input 
            onChange={(e) => {
              this.props.setUsername(e.target.value)
            }}
            style={styles.input} 
            placeholder='Username' 
          />
        </div>
        <button 
          onClick={(e) => {
            e.preventDefault()
            this.props.lookupUser() 
          }}
            style={styles.button}
          >
            Search
          </button>
        </div>
      )
    }
  }

  /**
   * This method takes the redux global app state,
   * and sets it into the component's props.
   *
   * @returns {object} an object representing a piece of the
   * redux state.
   */
  const mapStateToProps = ({ username }) => ({
    username,
  })

  /**
 * This method takes some actions, wraps them
 * in the redux dispatcher, and sets them into
 * the component's props.
 *
 * @returns {object} an object representing the
 * actions.
 */
const mapDispatchToProps = (dispatch) => ({
  lookupUser: () => dispatch(asyncActions.lookup()),
  setUsername: (username) => dispatch(actions.setUsername(username)),
})

// use connect to map state and actions into the component.
export default connect(mapStateToProps, mapDispatchToProps)(UsernameForm)

import {Component} from 'react'
import './index.css'

class EditableText extends Component {
  state = {editableText: '', isTrue: false}

  onChangeText = event => {
    this.setState({editableText: event.target.value})
  }

  submitText = () => {
    this.setState(prevState => ({
      isTrue: !prevState.isTrue,
    }))
  }

  render() {
    const {editableText, isTrue} = this.state
    return (
      <div className="container">
        <div className="card">
          <h1 className="heading">Editable Text Input</h1>
          <div className="result-container">
            {!isTrue ? (
              <input
                type="text"
                value={editableText}
                onChange={this.onChangeText}
                className="input"
              />
            ) : (
              <div className="text-container">
                <p className="text">{editableText}</p>
              </div>
            )}

            <button type="submit" className="button" onClick={this.submitText}>
              {!isTrue ? 'Save' : 'Edit'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default EditableText

import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      points: {}
    }
  }

  nextAnecdote = () => () => this.setState({selected: Math.floor(Math.random() * anecdotes.length)})
  addPoints = () => () => {
    const newPoints = {...this.state.points}
    if(this.state.points[this.state.selected] === undefined) {
        newPoints[this.state.selected] = 1
    } else {
        newPoints[this.state.selected]++
    }
    return this.setState({points: newPoints})
  }

  render() {
    console.log(this.state.points)
    return (
      <div>
        <Display text={this.props.anecdotes[this.state.selected]} />
        <Result selected={this.state.selected} points={this.state.points}/>
        <Button text={"vote"} handleClick={this.addPoints()}/>
        <Button text={"next anecdote"} handleClick={this.nextAnecdote()}/>
      </div>
    )
  }
}

const Display = ({text}) => <p>{text}</p>
const Button = ({text, handleClick}) => (<button onClick={handleClick}>{text}</button>)
const Result = ({selected, points}) => points[selected] === undefined ? <p>has 0 votes</p> : <p>has {points[selected]} votes</p>

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
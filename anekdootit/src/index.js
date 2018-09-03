import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      points: this.initPoints()
    }
  }


  initPoints = () => {
    const newPoints = {}
    for (let i = 0; i < this.props.anecdotes.length; i++) {
        newPoints[i] = 0;
    }
    return newPoints;
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
  getPointsforAnecdote = (selected) => this.state.points[selected]
  getMostVotedAnecdote = () => Object.keys(this.state.points).reduce((acc, point)=> this.state.points[acc] < this.state.points[point] ? point : acc , 0)

  render() {
    return (
      <div>
        <Display text={this.props.anecdotes[this.state.selected]} />
        <Result points={this.getPointsforAnecdote(this.state.selected)}/>
        <Button text={"vote"} handleClick={this.addPoints()}/>
        <Button text={"next anecdote"} handleClick={this.nextAnecdote()}/>
        <Title text={"anecdote with most votes"}/>
        <Display text={this.props.anecdotes[this.getMostVotedAnecdote()]} />
        <Result points={this.state.points[this.getMostVotedAnecdote()]}/>
      </div>
    )
  }
}


const Display = ({text}) => <p>{text}</p>
const Title = ({text}) => <h1>{text}</h1>
const Button = ({text, handleClick}) => (<button onClick={handleClick}>{text}</button>)
const Result = ({points}) => <p>has {points} votes</p>

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
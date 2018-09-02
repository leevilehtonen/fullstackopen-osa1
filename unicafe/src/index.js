import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            stats: {
                hyva: 0,
                neutraali: 0,
                huono: 0,
            }
        }
    }
    addPalaute = (type) => () => {
        const newStats = Object.assign(this.state.stats)
        newStats[type] = this.state.stats[type] + 1 

        this.setState({
            stats: newStats
        })
    }

    render() {
        return (
            <div>
                <Header text={"anna palautetta"}/>
                <Button text={"hyvä"} handleClick={this.addPalaute("hyva")}/>
                <Button text={"neutraali"} handleClick={this.addPalaute("neutraali")}/>
                <Button text={"huono"} handleClick={this.addPalaute("huono")}/>
                <Header text={"statistiikka"}/>
                <Statistics stats={this.state.stats}/>
            </div>
        )
    }
}

const Header = ({text}) => (<h1>{text}</h1>)
const Button = ({handleClick, text}) => (<button onClick={handleClick}>{text}</button>)
const Statistics = ({stats}) => (
    <div>
        {
            Object.keys(stats).map((key, id) => (
                <p key={id}>{key} {stats[key]}</p>
            )) 
        }
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'));
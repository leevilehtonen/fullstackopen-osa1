import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            init: false,
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
            init: true,
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
                {this.state.init === false ? (<p>ei yhtään palautetta annettu</p>) : <Statistics stats={this.state.stats}/>}
            </div>
        )
    }
}

const Header = ({text}) => (<h1>{text}</h1>)
const Button = ({handleClick, text}) => (<button onClick={handleClick}>{text}</button>)
const Statistics = ({stats}) => {
    const getKeskiarvo = () => getTotal() === 0 ? 0 : (stats.hyva * 1 + stats.neutraali * 0 + stats.huono * (-1)) / getTotal()
    const getPositiiviset = () =>  getTotal() === 0 ? 0 : stats.hyva / getTotal() * 100 
    const getTotal = () => Object.keys(stats).reduce((acc, val) => acc + stats[val], 0);

    return (
        <div>
            {
                Object.keys(stats).map((key, id) => (
                    <p key={id}>{key} {stats[key]}</p>
                )) 
            }
            <Statistic teksti={"keskiarvo"} arvo={getKeskiarvo()}/>
            <Statistic teksti={"positiiviset"} arvo={getPositiiviset() + " %"}/>
        </div>
    )
}
const Statistic = ({teksti, arvo}) => {
    return (
        <p>
            {teksti} {arvo}
        </p>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osat = [
    {
      nimi: 'Reactin perusteet',
      tehtavia: 10
    },
    {
      nimi: 'Tiedonvälitys propseilla',
      tehtavia: 7
    },
    {
      nimi: 'Komponenttien tila',
      tehtavia: 14
    }
  ]

  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto osat={osat} />
      <Yhteensa osat={osat} />
    </div>
  )
}

const Otsikko = (props) => (
  <h1>{props.kurssi}</h1>
)


const Sisalto = (props) => {
  return (
    <div>
      {
        props.osat.map(osa => (<Osa key={osa.nimi} osa={osa.nimi} tehtavia={osa.tehtavia} />))
      }
    </div>
  )
}

const Osa = (props) => (
  <p>{props.osa} {props.tehtavia}</p>
)

const Yhteensa = (props) => (
  <p>yhteensä {props.osat.reduce((sum, osa) => sum + osa.tehtavia, 0)} tehtävää</p>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
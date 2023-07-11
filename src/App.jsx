import './App.css'
import Counter from './components/Counter'
import Title from './components/Title'
import useCountdown from './hooks/useCountdown'


function App() {
  const [day, hour, minutes, seconds] = useCountdown("Jan 1, 2024 00:00:00");

  return (
    <div className='App'>
      <div className='container'>
        <Title title={"Contagem regressiva para 2024"} />
        <div className='countdown-container'>
          <Counter title="Dias" number={day} />
          <Counter title="Horas" number={hour} />
          <Counter title="Minutos" number={minutes} />
          <Counter title="Segundos" number={seconds} />
        </div>
      </div>
    </div>
  )
}

export default App

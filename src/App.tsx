import './styles.css'
import rtwImage from './assets/rtw.png'

import { Counter } from './components/Counter'

export const App: React.FC = () => {
  const name: string = 'Ramgopal'
  return (
    <>
      <h1>React TypeScript Webpack Starter Template - {name}</h1>
      <img src={rtwImage} alt='Banner' />
      <br />
      <Counter />
    </>
  )
}

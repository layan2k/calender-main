import { Suspense, lazy } from 'react'
import './App.css'
import LoadingFull from './LoadingFull'
import {  } from 'react'
const MainEntry = lazy(()=> import('./components/MainEntry'))



const App = () => {
  return (
    <Suspense fallback={LoadingFull}>
      <MainEntry />

    </Suspense>
  )
}

export default App
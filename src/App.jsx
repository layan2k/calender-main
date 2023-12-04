import { Suspense, lazy } from 'react'
import './App.css'
import LoadingFull from './LoadingFull'
import {  } from 'react'
const MainEntry = lazy(()=> import('./components/MainEntry'))



const App = () => {
  return (
    <div>
    <Suspense fallback={<LoadingFull/>}>
      <MainEntry />
    </Suspense>
    </div>
  )
}

export default App
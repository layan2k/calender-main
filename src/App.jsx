/*
App Component - Main Entry
*/
import { Suspense, lazy } from 'react'
import './App.css'
import LoadingFull from './LoadingFull'
const MainEntry = lazy(() => import('./components/MainEntry'))
import 'animate.css';

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
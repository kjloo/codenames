import { lazy } from 'react'
import { Routes } from 'react-router'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Suspense } from 'react'
import './App.css'

const Character = lazy(() => import('./components/Character'));
const Selection = lazy(() => import('./components/Selection'));

function App() {

    return (
        <div className='app-container'>
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <div className='content'>
                        <Routes>
                            <Route path="/" element={<Selection />} />
                        </Routes>
                    </div>
                </Suspense>
            </Router>
        </div>
    )
}

export default App

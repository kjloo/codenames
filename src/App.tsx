import { lazy } from 'react'
import { Routes } from 'react-router'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Suspense } from 'react'

const Character = lazy(() => import('./components/Character'));
const Board = lazy(() => import('./components/Board'));

function App() {

    return (
        <div className='app-container'>
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <div className='content'>
                        <Routes>
                            <Route path="/" element={<Board />} />
                            <Route path="/characters" element={<Character />} />
                        </Routes>
                    </div>
                </Suspense>
            </Router>
        </div>
    )
}

export default App

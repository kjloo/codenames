import { lazy, Suspense } from 'react'
import { Routes } from 'react-router'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Board = lazy(() => import('./components/Board'));
const SpymasterKey = lazy(() => import('./components/SpymasterKey'));

function App() {

    return (
        <div className='app-container'>
            <Router>
                <Suspense fallback={<div>Loading...</div>}>
                    <div className='content'>
                        <Routes>
                            <Route path="/" element={<Board />} />
                            <Route path="/spymaster" element={<SpymasterKey />} />
                            <Route path="*" element={<div>Page not found</div>} />
                        </Routes>
                    </div>
                </Suspense>
            </Router>
        </div>
    )
}

export default App

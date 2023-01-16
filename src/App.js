import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.scss';
const Home = lazy(() => import('./components/Home'));
const Destination = lazy(() => import('./components/Destination'));
const Crew = lazy(() => import('./components/Crew'));

function App() {
    return (
        <div className='App'>
            <Suspense>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/destination' element={<Destination />} />
                    <Route path='/crew' element={<Crew />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;

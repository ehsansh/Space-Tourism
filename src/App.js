import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.scss';
const Home = lazy(() => import('./components/Home'));
const Destination = lazy(() => import('./components/Destination'));
const Crew = lazy(() => import('./components/Crew'));
const Technology = lazy(() => import('./components/Technology'));

function App() {
    return (
        <div className='App'>
            <Suspense>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/destination' element={<Destination />} />
                    <Route path='/crew' element={<Crew />} />
                    <Route path='/technology' element={<Technology />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;

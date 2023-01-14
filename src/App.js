import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.scss';
const Home = lazy(() => import('./components/Home'));

function App() {
    return (
        <div className='App'>
            <Suspense>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;

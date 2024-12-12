import { lazy, Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';

import './App.css';
import routes from './_module/constants/routes';
import AppLayout from './_module/components/Layout/AppLayout';
import Loader from './_module/components/Loader/loader';

const Posts = lazy(() => import('./pages/Posts/page'));
const Users = lazy(() => import('./pages/Users/page'));
const Home = lazy(() => import('./pages/page'));
const NotFound = lazy(() => import('./pages/404/page'));

function App() {
    return (
        <>
            <Routes>
                <Route
                    element={
                        <Suspense
                            fallback={
                                <div className="h-screen flex justify-center items-center w-full relative right-0 left-0">
                                    <Loader />{' '}
                                </div>
                            }
                        >
                            <AppLayout />
                        </Suspense>
                    }
                >
                    <Route
                        index
                        element={<Home />}
                    />
                    <Route
                        path={routes.dashboard.posts.path}
                        element={<Posts />}
                    />
                    <Route
                        path={routes.dashboard.users.path}
                        element={<Users />}
                    />
                    {/* 404 */}
                    <Route
                        path="*"
                        element={<NotFound />}
                    />
                </Route>
            </Routes>
        </>
    );
}

export default App;

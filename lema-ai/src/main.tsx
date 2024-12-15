import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { BrowserRouter } from 'react-router';
import { Toaster } from 'sonner';

import './index.css';
import App from './App.tsx';
import TanstackQueryProvider from './_module/providers/TanstackQueryProvider.tsx';
import ErrorBoundary from './_module/components/ErrorBoundary.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ErrorBoundary
            onError={
                (/*error, errorInfo*/) => {
                    // Send error to logging service
                }
            }
        >
            <TanstackQueryProvider>
                <BrowserRouter>
                    <Toaster />
                    <App />
                </BrowserRouter>
            </TanstackQueryProvider>
        </ErrorBoundary>
    </StrictMode>
);

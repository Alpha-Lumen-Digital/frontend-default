import './styles/global.css';

import { Router } from './routes/routes';
import { AppProvider } from './providers';

export const App = () => {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
};

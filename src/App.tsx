import GlobalStyle from './styles/GlobalStyle'
import Routes from './routes/routes'
import { AppProvider } from './providers'

export const App = () => {
  return (
    <AppProvider>
      <Routes />
      <GlobalStyle />
    </AppProvider>
  )
}

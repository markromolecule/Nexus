import './App.css'
import Layout from './shared/Layout'
import TopBar from './components/common/TopBar'
import JosephPage from './pages/JosephPage'
import JomPage from './pages/JomPage'
import KyrosPage from './pages/KyrosPage'
import EuriPage from './pages/EuriPage'
import BjPage from './pages/BjPage'
import Footer from './components/common/Footer'
import { useNavigation } from './hooks/useNavigation'

function App() {
  const { active, navigate } = useNavigation('Joseph')

  return (
    <Layout>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <TopBar active={active} onSelect={navigate} theme={active === 'Kyros' ? 'light' : 'dark'} />
        <div className="flex-1">
          {active === 'Joseph' && <JosephPage />}
          {active === 'Jom' && <JomPage />}
          {active === 'Kyros' && <KyrosPage />}
                  {active === 'Euri' && <EuriPage />}
        {active === 'Bj' && <BjPage />}
        </div>
        <Footer theme={active === 'Kyros' ? 'light' : 'dark'} />
      </div>
    </Layout>
  )
}

export default App

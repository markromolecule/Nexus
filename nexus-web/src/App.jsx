import './App.css'
import Layout from './shared/Layout'
import TopBar from './components/common/TopBar'
import JosephPage from './pages/JosephPage'
import Developer2Page from './pages/Developer2Page'
import Developer3Page from './pages/Developer3Page'
import Developer4Page from './pages/Developer4Page'
import Developer5Page from './pages/Developer5Page'
import Footer from './components/common/Footer'
import { useNavigation } from './hooks/useNavigation'

function App() {
  const { active, navigate } = useNavigation('Joseph')

  return (
    <Layout>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        <TopBar active={active} onSelect={navigate} />
        <div className="flex-1">
          {active === 'Joseph' && <JosephPage />}
          {active === 'dev2' && <Developer2Page />}
          {active === 'dev3' && <Developer3Page />}
          {active === 'dev4' && <Developer4Page />}
          {active === 'dev5' && <Developer5Page />}
        </div>
        <Footer />
      </div>
    </Layout>
  )
}

export default App

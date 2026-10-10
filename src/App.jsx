import { DemoProvider, useDemo } from './context/DemoContext.jsx';
import Sidebar from './components/layout/Sidebar.jsx';
import TopBar from './components/layout/TopBar.jsx';
import Toast from './components/common/Toast.jsx';
import MonitoringPage from './pages/MonitoringPage.jsx';
import AlertsPage from './pages/AlertsPage.jsx';
import InfrastructurePage from './pages/InfrastructurePage.jsx';
import DiagnosisPage from './pages/DiagnosisPage.jsx';
import HistoryPage from './pages/HistoryPage.jsx';
import SimulationPage from './pages/SimulationPage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';

const PAGES = {
  monitoreo: MonitoringPage,
  alertas: AlertsPage,
  infraestructura: InfrastructurePage,
  diagnostico: DiagnosisPage,
  historial: HistoryPage,
  simulacion: SimulationPage,
  configuracion: SettingsPage,
};

function Shell() {
  const { route } = useDemo();
  const Page = PAGES[route.page] || MonitoringPage;
  return (
    <div className="app">
      <a className="skip-link" href="#/" onClick={(e) => { e.preventDefault(); document.getElementById('main')?.focus(); }}>Saltar al contenido</a>
      <Sidebar />
      <div className="app__main">
        <TopBar />
        <main id="main" className="content" tabIndex={-1} data-page={route.page}>
          <Page key={route.page} />
        </main>
      </div>
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <DemoProvider>
      <Shell />
    </DemoProvider>
  );
}

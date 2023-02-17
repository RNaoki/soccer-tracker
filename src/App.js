import AppRoutes from './assets/routes';
import Header from './components/Header/Header.js';

function App() {
  return (
    <div style={{ backgroundColor: '#215dc4', height: '100vh' }}>
      <AppRoutes child={<Header />} />
    </div>
  );
}

export default App;

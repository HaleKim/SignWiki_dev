import { Outlet } from 'react-router-dom';
import Header from '@/components/layout/Header';

function App() {
  return (
    <div className="bg-background min-h-screen font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default App;

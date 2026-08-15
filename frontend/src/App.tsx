import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { Home, Collector, Aggregator, Lab, Manufacturer, Verify } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="collector" element={<Collector />} />
          <Route path="aggregator" element={<Aggregator />} />
          <Route path="lab" element={<Lab />} />
          <Route path="manufacturer" element={<Manufacturer />} />
          <Route path="verify" element={<Verify />} />
          <Route path="verify/:id" element={<Verify />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

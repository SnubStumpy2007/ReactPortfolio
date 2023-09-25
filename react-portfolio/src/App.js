import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} /> {/* Use 'Layout' as the JSX element */}
      </Routes>
    </>
  );
}

export default App;

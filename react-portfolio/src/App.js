import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; // Use lowercase "Layout" for the folder and file names
import Home from './components/Home'; // Import the Home component


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} /> {/* Use 'Layout' as the JSX element */}
        <Route index element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

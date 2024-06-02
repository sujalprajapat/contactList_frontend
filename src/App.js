import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './Dashboard';
import ContactLIst from './ContactLIst';
import ContactForm from './ContactForm';
import Update from './Update';
import { Route, Routes } from 'react-router-dom';
import Contact from './Contact';
function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<> <Dashboard/><ContactLIst></ContactLIst></>} />
          <Route path="/add/contact" element={<> <Dashboard/><ContactForm/></>} />
          <Route path="/contact" element={<> <Dashboard/><Contact/></>} />
          <Route path="/update/:id" element={<> <Dashboard/><Update/></>} />
      </Routes>
      </div>
  );
}

export default App;

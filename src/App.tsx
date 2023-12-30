import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import routes from './route';
import Container from 'react-bootstrap/Container';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Container className='d-flex justify-content-center border-bottom' fluid>
        <NavBar />
      </Container>
      <Container className="mt-5">
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
          <Route path="*" element={<Navigate to="/buy" />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;

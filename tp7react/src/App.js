import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'
import EmpleadoList from './components/EmpleadoList';


function App() {
  return (
      <Container>
        <EmpleadoList/>
      </Container>
  );
}

export default App;

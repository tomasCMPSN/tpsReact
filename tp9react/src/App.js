import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Form, Row, Col, Button, Card } from "react-bootstrap";

function App() {
  return (
    <Container>
      <h1 className="text-center">Administrador de pacientes de veterinaria</h1>
      <p className="lead text-center">
        Llenar el formulario para crear una cita
      </p>
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formNombreDeMascota">
          <Form.Label column sm={2}>
            Nombre de mascota:
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Nombre de mascota" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formNombreDeDueno">
          <Form.Label column sm={2}>
            Nombre de dueño:
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Nombre de dueño" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formFecha">
          <Form.Label column sm={2}>
            Fecha:
          </Form.Label>
          <Col sm={4}>
            <Form.Control type="date" />
          </Col>

          <Col>
            <Form.Group as={Row} controlId="formHora">
              <Form.Label column sm={2}>
                Hora:
              </Form.Label>
              <Col className="w-100">
                <Form.Control type="time" />
              </Col>
            </Form.Group>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formSintomas">
          <Form.Label column sm={2}>
            Síntomas:
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="textarea"
              rows={2}
              placeholder="Describe los síntomas."
            />
          </Col>
        </Form.Group>
        <div className="text-center">
          <Button variant="primary" size="lg">
            Agregar nueva cita
          </Button>
        </div>
      </Form>

      <div>
        <h2 className="text-center display-4 mt-5">Administra las citas aca</h2>
        <Row>
          <Col md={6} sm={12} className="mb-4">
            <Card>
              <Row>
                <Col xs={3}>
                  <Card.Img
                    className="img-cuadrada rounded-circle mx-auto d-block mt-1"
                    variant="top"
                    src="https://pbs.twimg.com/media/FKeHPE1XEAEzd67?format=jpg&name=large"
                  />
                </Col>
                <Col>
                <div className="d-flex flex-column">
                  <p>Mascota: DuendePablo</p>
                  <p>Dueño: Pablo Ballón</p>
                </div>
                </Col>
              </Row>
              <Card.Body>
                <Card.Text>
                  <div className="d-flex flex-column">
                    <p>Fecha: </p>
                    <p>Hora: </p>
                    <p>Síntomas: </p>
                  </div>
                </Card.Text>
                <div className="d-grid gap-2">
                <Button variant="danger" size="lg">Borrar</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default App;

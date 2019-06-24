import React from "react";
import { ListGroup, Button, Container, Row, Col } from "react-bootstrap/";

function ListCard(props) {
  return (
    <div>
      <ListGroup>
        {props.sendList.map((item, index) => (
          // <p key={index}>{item}</p>
          <Container>
            <Row className="justify-content-md-center">
              <Col>
                {props.sendEdit == 0 ? (
                  <input type="text" key={index} value={item.item} />
                ) : (
                  <div>
                    <input
                      onChange={props.sendFun}
                      type="text"
                      key={index}
                      value={props.sendInput}
                    />
                    <Button
                      variant="outline-secondary"
                      onClick={()=>props.sendFun21(item, index)}
                    >
                      Submit
                    </Button>
                  </div>
                )}
              </Col>
              <Col>
                {item.finishState == 0 ? (
                  <Button
                    variant="outline-primary"
                    onClick={() => props.sendMADFun(item, index)}
                  >
                    {" "}
                    Make it as Done
                  </Button>
                ) : (
                  <Button
                    variant="outline-danger"
                    onClick={() => props.sendMADFun(item, index)}
                  >
                    {" "}
                    Done
                  </Button>
                )}

                <Button
                  variant="danger"
                  key={index}
                  onClick={() => props.sendDeleFun(item, index)}
                >
                  Delete
                </Button>
                <Button
                  onClick={() => props.sendTextAFun(item, index)}
                  variant="outline-info"
                >
                  Edit
                </Button>
              </Col>
            </Row>
          </Container>
        ))}
      </ListGroup>
    </div>
  );
}
export default ListCard;

import React from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";

function HandleInput(props) {
  return (
    <div>
      
      <InputGroup 
        className="mb-3" 
        type="text"
        value={props.sendInput}
        onChange={props.sendFun}>
        <FormControl
          placeholder="Hey, here is Captain America. Input here, DumbAss."
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary" onClick={props.sendFun2}>Button</Button>
        </InputGroup.Append>
      </InputGroup>
    </div>
  );
}

export default HandleInput;

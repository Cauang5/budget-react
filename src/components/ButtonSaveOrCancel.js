import React from "react";
import { Button } from "semantic-ui-react";

function ButtonSaveOrCancel({addEntry, description, value, isExpense}) {
  return (
    <Button.Group style={{ marginTop: 20 }}>
      <Button>Cancel</Button>
      <Button.Or />
      <Button positive onClick={() => addEntry(description, value, isExpense)}>Save</Button>
    </Button.Group>
  );
}

export default ButtonSaveOrCancel;

import React, { useEffect, useState } from "react";
import { Modal, Button } from "semantic-ui-react";
import EntryForm from "./EntryForm";

function ModalEdit({
  isOpen,
  setIsOpen,
  description,
  value,
  isExpense,
  onSave,
}) {
  const [entryDescription, setEntryDescription] = useState(description);
  const [entryValue, setEntryValue] = useState(value);
  const [entryIsExpense, setEntryIsExpense] = useState(isExpense);

  useEffect(() => {
    setEntryDescription(description);
    setEntryValue(value);
    setEntryIsExpense(isExpense);
  }, [description, value, isExpense]);

  return (
    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      <Modal.Header>Edit Entry</Modal.Header>
      <Modal.Content>
        <EntryForm
          description={entryDescription}
          setDescription={setEntryDescription}
          value={entryValue}
          setValue={setEntryValue}
          isExpense={entryIsExpense}
          setIsExpense={setEntryIsExpense}
        />
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setIsOpen(false)}>Cancel</Button>
        <Button
          primary
          onClick={() => {
            onSave(entryDescription, entryValue, entryIsExpense);
            setIsOpen(false);
          }}
        >
          Save
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default ModalEdit;

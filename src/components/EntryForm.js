import React from 'react';
import { Form } from 'semantic-ui-react';

function EntryForm({ 
  description, 
  setDescription, 
  value, 
  setValue, 
  isExpense, 
  setIsExpense 
}) {
  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="New shiny thing"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Form.Input
          width={4}
          label="Value"
          placeholder="100.00"
          icon="dollar"
          iconPosition="left"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Form.Group>
      <Form.Checkbox
        toggle
        label="Is expense?"
        checked={isExpense}
        onChange={() => setIsExpense(!isExpense)}
      />
    </Form>
  );
}

export default EntryForm;

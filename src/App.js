import "./App.css";
import { Container } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import { useState } from "react";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";

function App() {
  const [entries, setEntries] = useState(initialEntries);
  
  // Estados para o formulário de adição
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  
  // Estados para o modal de edição
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState();
  const [editDescription, setEditDescription] = useState("");
  const [editValue, setEditValue] = useState("");
  const [editIsExpense, setEditIsExpense] = useState(true);

  // Função para calcular o saldo total
  const calculateBalance = () => {
    return entries.reduce((total, entry) => {
      const value = parseFloat(entry.value);
      return entry.isExpense ? total - value : total + value;
    }, 0).toFixed(2);
  };

  // Funções para calcular receitas e despesas
  const calculateIncome = () => {
    return entries
      .filter(entry => !entry.isExpense)
      .reduce((total, entry) => total + parseFloat(entry.value), 0)
      .toFixed(2);
  };

  const calculateExpenses = () => {
    return entries
      .filter(entry => entry.isExpense)
      .reduce((total, entry) => total + parseFloat(entry.value), 0)
      .toFixed(2);
  };

  function deleteEntry(id) {
    const result = entries.filter((entry) => entry.id !== id);
    setEntries(result);
  }

  function updateEntry(id, description, value, isExpense) {
    const result = entries.map((entry) => {
      if (entry.id === id) {
        return {
          ...entry,
          description,
          value,
          isExpense,
        };
      }
      return entry;
    });
    setEntries(result);
  }

  function addEntry(description, value, isExpense) {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense,
    });
    setEntries(result);
    
    // Limpar o formulário após adicionar
    setDescription("");
    setValue("");
    setIsExpense(true);
  }

  function editEntry(id) {
    const entry = entries.find(entry => entry.id === id);
    setEntryId(id);
    setEditDescription(entry.description);
    setEditValue(entry.value);
    setEditIsExpense(entry.isExpense);
    setIsOpen(true);
  }

  return (
    <Container>
      <MainHeader title="Budget" />

      <DisplayBalance title="Your balance" value={calculateBalance()} size="small" />

      <DisplayBalances 
        totalIncome={calculateIncome()}
        totalExpenses={calculateExpenses()}
      />

      <MainHeader title="History" type="h3" />

      <EntryLines 
        entries={entries} 
        deleteEntry={deleteEntry} 
        editEntry={editEntry}
      />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm
        addEntry={addEntry}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
      <ModalEdit 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        description={editDescription}
        value={editValue}
        isExpense={editIsExpense}
        onSave={(description, value, isExpense) => 
          updateEntry(entryId, description, value, isExpense)
        }
      />
    </Container>
  );
}

export default App;

var initialEntries = [
  { id: 1, description: "Salary", value: "4500", isExpense: false },
  { id: 2, description: "Freelance", value: "1500", isExpense: false },
  { id: 3, description: "Rent", value: "500", isExpense: true },
  { id: 4, description: "Clothes", value: "150", isExpense: true },
];

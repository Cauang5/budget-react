import "./App.css";
import { Container } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";

function App() {
  return (
    <Container>
      <MainHeader title="Budget" />

      <DisplayBalance title="Your balance" value="2,550.53" size="small" />

      <DisplayBalances />

      <MainHeader title="History" type="h3" />

      <DisplayBalances />

      <EntryLine description="Something" value="R$10,00" isExpense={true} />
      <EntryLine description="Something" value="R$100,00" isExpense={false} />
      <EntryLine description="Something" value="R$20,00" isExpense={true} />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;

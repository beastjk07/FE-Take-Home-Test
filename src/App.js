import "./App.css";
import Header from "./components/Header";
import UserForm from "./components/UserForm.tsx";

function App() {
  return (
    <div className="container mt-5">
      <Header />
      <UserForm />
    </div>
  );
}

export default App;

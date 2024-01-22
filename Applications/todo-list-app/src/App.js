import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import Header from './components/Header';
function App() {
  return (
    <div>
      <Header></Header>
      <TodoList></TodoList>
    </div>
  );
}

export default App;

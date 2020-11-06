import { useEffect, useState } from "react";
import "./App.css";
import AddNew from "./components/addForm/AddNew.component";
import List from "./components/list/List.component";
import { save, get } from "./components/handleLocalStorage/localStorage";
import Footer from "./components/Footer.component";

function App() {
  const [newList, setNewList] = useState(get());

  const addCard = (content) => {
    console.log(content);
    setNewList([...newList, content]);
  };

  useEffect(() => {
    save(newList);
  }, [newList]);

  return (
    <div className="App">
      <AddNew onSubmit={addCard} />
      <List
        list={newList}
        onClear={() => {
          setNewList([]);
        }}
      />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;

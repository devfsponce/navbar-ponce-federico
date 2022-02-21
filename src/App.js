import ItemListContainer from "./components/container/ItemListContainer";
import NavBar from "./components/NavBar";


function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer 
      greeting = "Lista de Items"
    />      
    </>
  );
}

export default App;

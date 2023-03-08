import Routes from "./Routes/Routes";
import Category from "./components/category/Category";
import Search from "./components/search/Search";

function App() {
  return (
    <div className="App">
      <Search />
      <Category />
      <Routes />
    </div>
  );
}

export default App;

import Nav from "./components/Nav/Nav";
import Home from "./components/Home";

//styles
import "./App.css";

function App() {
  return (
    <div className="bg-gray-900 h-screen">
      <Nav />
      <Home />
      <p className="text-white text-xs text-center bg-gray-900 pb-5">
        Made with ❤ by{" "}
        <a
          target="_blank"
          href="https://github.com/igor-ostojic"
          className="font-semibold hover:text-indigo-200"
        >
          Igor Ostojic
        </a>
      </p>
    </div>
  );
}

export default App;

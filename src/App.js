import "./App.css";
import Card from "./components/Card/Card";
import { useState, useEffect } from "react";
import Loader from "./components/Card/Loader/Loader";

function App() {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let showQuote = setInterval(() => {
      getQuote()
    }, 3000);

    return () => {
      clearInterval(showQuote)
    }
  }, []);

 const getQuote = () => {
  fetch("http://quotes.stormconsultancy.co.uk/random.json")
  .then((response) => response.json())
  .then((data) => {
    setQuote(data);
    setLoading(false)
  })
  .catch((err) => console.log(err));
 }

// To show initial msg we set the State to the initial value of 'true'
// Then once the API call is complete we set the State to 'false'
// We use conditional rendering in the return with ternary operator
  return (
    <div className="App">
      <h2>Programming quotes</h2>
      {loading ? <Loader /> : <Card quote={quote.quote} author={quote.author} />}
    </div>
  );
}

export default App;

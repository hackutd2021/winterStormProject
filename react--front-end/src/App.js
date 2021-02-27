import Header from './components/Header'

function App() {
  const arr = ["Brad", "Joe", "Max"]
  const index = 1
  return (
    <div className="container">
      <h1> Hello {arr[index]}</h1>
      <Header/>
      
      
    </div>
  );
}


export default App;

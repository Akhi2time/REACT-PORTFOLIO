import Navbar from './components/Navbar';
// import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';


function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Main />
      </div>
      <Footer/>
    </>
  );
}

export default App;

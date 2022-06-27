import './App.css';
import About from './components/About/About';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <main>
        <Nav />
        {/* The 'string' prop gets passed into the About comp. In the About comp, we
        can restructure the string data (which is 'Who am I?') and use it */}
        <About string={'Who am I?'} />
      </main>
    </>
  );
}
export default App;

import Navbar from './Components/navbar';
import Intro  from './Components/intro';
import Articles from './Components/articles';
import  Details  from './Components/details';
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Details/>
      <Articles/>
      <Footer/>
    </div>
  );
}

export default App;

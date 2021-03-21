import './App.css';
import {Alert} from 'reactstrap';
import First from './components/First';
import Second from './components/Second';
import Abc from './components/Third';
import {MultiExport1, MultiExport2} from './components/MultiExport';
import {MultiExportFun1, MultiExportFun2} from './components/MultiExportFun';
import Rcc1 from './components/Rcc1';
import Rfc1 from './components/Rfc1';
import Parent from './components/Parent';
import ClassEvent from './components/main/ClassEvent'
import StateData from './components/main/StateData';
import Header from './components/main/Header';
import Home from './components/main/Home';
import About from './components/main/About';
import Contact from './components/main/Contact';
import FormDataState from './components/main/FormDataState';
import {BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
     {/*<h1 class="text-primary">Hello World 1</h1>
     <Alert color="primary">
        This is a primary alert — check it out!
      </Alert>
       <First></First>
       <Second></Second>
       <Abc></Abc>
       <Abc/>
       <MultiExport1></MultiExport1>
       <MultiExport2/>
       <MultiExportFun1/>
       <MultiExportFun2/>
     <Rcc1 title="Rcc1 Component"></Rcc1>
        <Rfc1 title="Rfc1 Component"></Rfc1>
     <Parent></Parent>
      <ClassEvent></ClassEvent>
      <StateData></StateData> 
  */}
    <Router>
       <Header></Header>
       <Route exact path="/" component={Home}/>
       <Route exact path="/about" component={About}/>
       <Route exact path="/contact" component={Contact}/>
       <Route exact path="/formdataState" component={FormDataState}/>
    </Router>
     </div>
  );
}

export default App;

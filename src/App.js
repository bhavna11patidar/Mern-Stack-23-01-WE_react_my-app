import './App.css';
import {Alert} from 'reactstrap';
import First from './components/First';
import Second from './components/Second';
import Abc from './components/Third';
import {MultiExport1, MultiExport2} from './components/MultiExport';
import {MultiExportFun1, MultiExportFun2} from './components/MultiExportFun';
import Rcc1 from './components/Rcc1';
import Rfc1 from './components/Rfc1';
function App() {
  return (
    /*<div className="App">
     <h1 class="text-primary">Hello World 1</h1>
     <Alert color="primary">
        This is a primary alert — check it out!
      </Alert>


    </div>
    */
    /* <div>
        <h1>dfdfd</h1>
        <h2>fdfdhge</h2>
      </div>
      */
     <div>
       {/*<First></First>
       <Second></Second>
       <Abc></Abc>
       <Abc/>
       <MultiExport1></MultiExport1>
       <MultiExport2/>
       <MultiExportFun1/>
       <MultiExportFun2/>
       */ }
        <Rcc1 title="Rcc1 Component"></Rcc1>
        <Rfc1 title="Rfc1 Component"></Rfc1>
     </div>
  );
}

export default App;

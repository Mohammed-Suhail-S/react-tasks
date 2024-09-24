import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Register from "./components/Register";
// import "./components/Register.css";
// import ClassComponent from './react/ClassComponent';
// import FunctionComponent from './react/FunctionComponent';
// import ClassProps from "./react/ClassProps";
// import ListPoints from "./react/ListPoints";

import List1 from "./task/List1";
import List2 from "./task/List2";

function App() {
  return (
    <div>
      <BrowserRouter>
          {/* <Routes>
              <Route path='/register' element={<Register/>}/>
              <Route path='/day1' element={<ClassComponent/>}/>
              <Route path='/day2' element={<FunctionComponent/>}/>
              <Route path='/day3' element={<ClassProps name="Mohammed Suhail"/>}/>
              <Route path='/day4' element={<ListPoints myvalue = {[12,23,34,45,56]}/>}/>
          </Routes> */}

          <Routes>
              <Route path='/task1' element={<List1 taskdata = {["HTML","CSS","Bootstrap","JavaScript"]}/>}/>
              <Route path='/task2' element={<List2/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App; 

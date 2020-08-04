import React from 'react';
import { Switch,Route, BrowserRouter} from 'react-router-dom';
import Navbar from './Components/navbar'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import List from './Components/EmployeeList/empList'
import CreateEMP from './Components/CreateEmployee/CreateEMP'
import showResults from './utilities/showResults';
import ViewEmployee from './Components/ViewEmployee/ViewEmployee'
import Info from './Components/Info'
import styles from './utilities/view.css'
function App() {
  return (
    <div className="App">
      <div className={styles.appcss}>
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' render={() => <List />} />
        <Route path='/register' render={() => <CreateEMP onSubmit={showResults} />} />
        <Route path='/view/:id' render={(props) => <ViewEmployee id={props.match.params.id}/>} />
        <Route path="/Info" render={() => <Info />} />
        </BrowserRouter>
        </div>
    </div>
  );
}

export default App;

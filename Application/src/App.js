import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "./bootstrap.min.css";
import Header from "./components/Header";
import StudentRegister from "./components/StudentRegister";
import StudentList from "./components/StudentList";
import StudentEdit from "./components/StudentEdit";
import FormRegister from "./components/FormRegister";
import FormList from "./components/FormList";
import FormEdit from "./components/FormEdit";
//import SingleStudent from "./components/SingleStudent";
function App() {
  return (
    <Router>
      <Header />
      <Route path="/" component={FormRegister} exact></Route>
      <Route path="/students" component={StudentList} />
      <Route path="/student/:id" component={StudentEdit} />
      <Route path="/student/create" component={StudentRegister} />
      <Route path="/forms" component={FormList} />
      <Route path="/form/:id" component={FormEdit} />
    </Router>
  );
}

export default App;

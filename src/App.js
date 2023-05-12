import EducationEXP from "./components/EducationEXP";
import Experience from "./components/Experience";
import GeneralInfo from "./components/GeneralInfo";
import "./styles/styles.css"


function App() {
  return (
    <div className="App">
      <GeneralInfo/>
      <EducationEXP/>
      <Experience/>
    </div>
  );
}

export default App;

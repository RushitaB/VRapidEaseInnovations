import Header from "./components/header";
import Herosection from "./components/herosection";
import Aboutsection from "./components/aboutsection";
import Rapidsolutions from "./components/rapidsolutions";
import Servicesection from "./components/servicesection";
import Fieldsoperationsection from "./components/fieldsoperationsection";
import Assestsection from "./components/assestsection";
import Contactsection from "./components/contactsection";
import Footer from "./components/footer";

function App() {
  return (
    <>
        <Header/>
        <Herosection/>
 
 
  <main id="main">
        <Aboutsection/>
        <Rapidsolutions/>
        <Servicesection/>
        <Fieldsoperationsection/>
        <Assestsection/>
        <Contactsection/>
  </main>

      <Footer/>
    </>
  );
}

export default App;

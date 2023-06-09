import Link from './components/Link';
import Route from './components/Route';
import AccordionPage from './pages/AccordionPage';
import Dropdownpage from './pages/Dropdownpage';

function App() {
  return (
    <>
      <Link to="/accordion">Go to accordion</Link>
      <Link to="/dropdown">Go to dropdown</Link>
      <div>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <Dropdownpage />
        </Route>
      </div>
    </>
  );
}
export default App;

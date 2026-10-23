import logo from './logo.svg';
import './App.css';
import home from './pages/home';
import services from './pages/services';
import contact from './pages/contact';

function App() {
  return (
    <nav className="navbar">
      <h2>The Coding Commando</h2> {/* add in logo - className="logo" */}

      <ul> {/* Navigation Links to separate pages */}
        <li><a href="/">Home</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      {/* Picture of Kapooka and my LLB graduation */}
      <p>The Coding Commando, where research and law meets technology for every client.</p>
      <p>I am Patrick Fitzgerald. A lawyer with experience in multiple industries including Army Reserves, the political sphere, legal research and presentation and web development.</p>
      <p>My mission is to bridge the gap between politics, business, law and technology, providing innovative solutions for every client.</p>
      <p></p> {/* add i linkedin weblink */}
      <p></p> {/* add in github weblink */}
      <p></p> {/* add in TCC succession weblink */}
    </nav>
  );
}

export default App;
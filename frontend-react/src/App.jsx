// app.jsx:
// This is the main App component that sets up routes/tabs (Home, Insights, Nodes).
// Classes and Objects Reference: See CLASSES_AND_OBJECTS.md for overall app navigation and component relationships.
/*
--
[Write a React component in JSX for App.jsx that sets up a tabbed interface using React Router or state management for navigation. Include inline comments.]
--
<details>
<summary>Explanation</summary>
App.jsx initializes the main layout and renders the Home, InsightsView, and NodesTab components. 
Here we use simple state-based navigation for a prototype.
</details>
*/
// App.jsx:
// Sets up the main routes using React Router (Home, Insights, Nodes).

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './components/Home';
import InsightsView from './components/InsightsView';
import NodesTab from './components/NodesTab';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navigation Bar */}
        <nav className="bg-white shadow p-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="px-4 py-2 bg-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/insights" className="px-4 py-2 bg-gray-200">
                Insights
              </Link>
            </li>
            <li>
              <Link to="/nodes" className="px-4 py-2 bg-gray-200">
                Nodes
              </Link>
            </li>
          </ul>
        </nav>

        {/* Route definitions */}
        <main className="p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/insights" element={<InsightsView />} />
            <Route path="/nodes" element={<NodesTab />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
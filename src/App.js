import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import './App.css';
import RecommendationPage from "./pages/RecommendationPage";

function App() {
  return (
    <Router basename="/recommendations">
      <Routes>
        
        <Route path="/" element={<RecommendationPage />} />

        {/* 使用 URL 参数 id 来动态加载组件 */}
        <Route path="/:id" element={<RecommendationPage />} />
      </Routes>
    </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;

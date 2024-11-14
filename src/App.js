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
  );
}

export default App;

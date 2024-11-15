// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter, Routes, Route } from "react-router-dom"; // use HashRouter instead of BrowserRouter for better SEO on GitHub
import { useEffect, useState } from "react";

// import './App.css';
import RecommendationPage from "./pages/RecommendationPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        
        {/* <Route path="/" element={<RecommendationPage />} /> */}

        {/* 使用 URL 参数 id 来动态加载组件 */}
        <Route path="/:pathParams" element={<RecommendationPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

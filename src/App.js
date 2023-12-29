import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import DashboardPage from './components/DashboardPage';
import PricingPage from './components/PricingPage';
import Header from './components/Header';
import MyGraphs from './components/MyGraphs';
import { Signin } from './pages/signin';
import { Signup } from './pages/signup';
import GraphDetailsPage from './pages/GraphDetailsPage';





function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div style={{ marginTop: '150px' }}>
    <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/graph" element={<MyGraphs />} />
        <Route path='/sign-in' element={<Signin/>}/>
        <Route path='/sign-up' element={<Signup/>}/>
        <Route path='/graphd' element={<GraphDetailsPage/>}/>
      </Routes>
    </div>
      
    </BrowserRouter>
  );
}

export default App;





import AppRouter from "./components/app-router";
import Footer from "./components/footer";
import React from "react"; 
import Header from "./components/header";
import { BrowserRouter } from 'react-router-dom';
const App = () => {
  return (
<div>
  <BrowserRouter>
  <Header />
  <div>
    <AppRouter/>
  </div>
  <Footer />
  </BrowserRouter>
</div>
  );
}

export default App;
import React from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Editor from './Editor';
import './App.css';
import RoutesPage from "./Router/route"

const App = () => (
  <>
    <RoutesPage />
    <ToastContainer autoClose={3000} />
  </>
);

export default App;

import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header';
import CoinPage from './Pages/CoinPage';
import HomePage from './Pages/HomePage';
import { makeStyles } from '@material-ui/core'

function App() {

  const useStyles = makeStyles(()=>({
    App:{
      backgroundColor: "#14161a",
      color:'white',
      minHeight:'100vh'
    }
  }))
  
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header/>
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route path='/coins/:id' element={<CoinPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

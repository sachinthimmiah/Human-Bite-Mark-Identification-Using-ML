
import './App.css';
import DragAndDrop  from './Componets/DragDrop/DragAndDrop';
import {useEffect, useState } from 'react';
import Loading from './Componets/Loader/Loading';
import About from './Componets/About/About'
import Articles from "./Componets/Articles/Article"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  const [uploadedImagesHistory, setUploadedImagesHistory] = useState([]);

  //Loader
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    const fetchFakeData = ()=>{
      setTimeout(()=>{
        setIsLoading(false)
      },4000)
    }
    fetchFakeData();
  },[])


  


  return (
    <Router>
      <div className="App">
        {isLoading ? <Loading /> : (
          <Switch>
            <Route exact path="/">
              <DragAndDrop
                uploadedImagesHistory={uploadedImagesHistory}
                setUploadedImagesHistory={setUploadedImagesHistory}
              />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/articles">
              <Articles />
            </Route>
          </Switch>
        )}
      </div>
    </Router>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import './App.css';
import Main from './routes/Main';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';
import Loading from './components/tools/Loading';
library.add(fas);



function App() {
    const [loadingComplete, setLoadingComplete] = useState(false);

    useEffect(() => {
      const timeline = gsap.timeline();
      // Add your animations for loadingComplete here
      timeline.eventCallback('onComplete', () => {
        setTimeout(() => {
            setLoadingComplete(true);
          }, 4100);
      });
    }, []);
  return (
    <React.Fragment>
        {loadingComplete ? (
            <Main />
        ) : (
            <Loading />
        )};
    </React.Fragment>
  );
 
}


export default App;

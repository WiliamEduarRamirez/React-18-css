import React, { useEffect } from 'react';

import ReactGa from 'react-ga';
function App() {
  useEffect(() => {
    ReactGa.initialize('G-T42YDQSELB', {
      testMode: true,
      debug: true,
    });
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className='container'>
      <div className='sidebar'>Sidebar</div>
      <div className='header'>Header</div>
      <div className='realtors'>realtors</div>
      <section className='features'></section>
      <div className='story__picture'></div>
      <div className='story__content'></div>
      <section className='homes'></section>
      <section className='gallery'></section>
      <footer className='footer'></footer>
    </div>
  );
}

export default App;

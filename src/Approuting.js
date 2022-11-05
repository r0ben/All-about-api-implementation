import React from 'react';
import {Routes,Route} from 'react-router-dom';

import News from './components/News/News';
import Todo from './components/Todo/Todo';
import Electronic from './components/Electronic/Electronic';






const Approuting = () => {
  return (
        <Routes>
            
            <Route path='/news/*' element={<News/>}/>
            <Route path='/'  element={<Electronic/>}/>
            <Route path='/todo' element={<Todo/>}/>
            <Route path='/electronic' element={<Electronic/>}/>
            
            

        </Routes>
  )
}

export default Approuting



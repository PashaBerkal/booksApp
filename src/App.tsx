import {Routes, Route} from 'react-router-dom';
import MainPage from "./pages/MainPage/MainPage";
import BookPage from './pages/BookPage/BookPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>}/>  
      <Route path="/BookPage/:id" element={<BookPage/>}/>
    </Routes>
  );
};

export default App;

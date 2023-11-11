import { Navigate, Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AboutAs from './components/aboutAs/aboutAs';
import AdminPage from './components/adminPage/adminPage';
import EditSitePage from './components/adminPage/editSitePage/editSitePage';
import Basketball from './components/basketball/basketball';
import Football from './components/football/football';
import Footer from './components/footer/footer';
import Header from './components/Header/Header';
import News from './components/news/news/news';
import OutherTypes from './components/otherTypes/otherTypes';
import PageNotFound from './components/pageNotFound/pageNotFound';
import StartPage from './components/StartPage/StartPage';
import VersionPage from './components/versionPage/versionPage';

const basename = '/kids-sport-cherkas';

function App() {
  return (
    <BrowserRouter basename={basename}>
      <div className='main'>
        <Header />
        <div className='mainContent'>
          <Routes>
            <Route path='/' element={<Navigate to='/kids-sport-cherkas' replace />} />
            <Route path='/main' element={<StartPage />} />
            <Route path='/news' element={<News />} />
            <Route path='/football' element={<Football />} />
            <Route path='/basketball' element={<Basketball />} />
            <Route path='/outher' element={<OutherTypes />} />
            <Route path='/about-as' element={<AboutAs />} />
            <Route path='/admin' element={<AdminPage />} />
            <Route path='/version' element={<VersionPage />} />
            <Route path='/add-news' element={<EditSitePage />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

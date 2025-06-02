import React, { Suspense } from 'react';
import './App.css';
import { Routes, Route } from 'react-router';
import { Spinner } from 'react-bootstrap';
const AppLayout = React.lazy(() => import('./layout/AppLayout')); //lazy loading  -> 실제로 쓰일때 그때 가져옴 -> 번들싸이즈 줄여줌
const HomePage = React.lazy(() => import('./pages/HomePage/HomePage'));
const SearchPage = React.lazy(() => import('./pages/SearchPage/SearchPage'));
const SearchWithKeywordPage = React.lazy(() => import('./pages/SearchPage/SearchWithKeywordPage'));
const PlaylistDetailPage = React.lazy(() => import('./pages/Playlist/PlaylistDetailPage'));
const LibraryPage = React.lazy(() => import('./pages/Playlist/LibraryPage'));



// 0 .사이드바가 있어야함(플레이리스트, 메뉴)
// 1. 홈페이지 /
// 2. 서치 페이지 /search
// 3. 서치 결과 페이지 /search/:keyword
// 4. 플레이리스트 디테일 페이지 /playlist/:id
// 5. (모바일 버전) 플레이 리스트 보여주는 페이지 /playlist 
function App() {
  return (
    <Suspense fallback = {<div className='spinner-area'>
        <Spinner
          animation='border'
          variant='danger'
          style={{ width: "5rem", height: "5rem" }}
        />
      </div>}> 
       {/* Suspense : lazy loading으로 인해 component를 다운받고 있는 중이면 suspense가 user에게 로딩처리를 보여줌, lazy loading 시에는 suspense를 같이 써줄 것 */}
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path='search' element={<SearchPage />} />
          <Route path='search/:keyword' element={<SearchWithKeywordPage />} />
          <Route path='playlist/:id' element={<PlaylistDetailPage />} />
          <Route path='/playlist' element={<LibraryPage/>}/>
        </Route>
        {/* <Route path ="/admin" element={<AdminLayout/>} */}

      </Routes>
    </Suspense>
  );
}

export default App;

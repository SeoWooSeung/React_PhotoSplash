import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
// 페이지 컴포넌트
import MainPage from '@pages/index/index';
import BoomarkPage from '@pages/bookmark/index';
function App() {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Routes>
                    <Route index path="/React_PhotoSplash" element={<MainPage />} />
                    <Route path="/React_PhotoSplash/search/:id" element={<MainPage />} />
                    <Route path="/React_PhotoSplash/bookmark" element={<BoomarkPage />} />
                </Routes>
            </BrowserRouter>
        </RecoilRoot>
    );
}

export default App;

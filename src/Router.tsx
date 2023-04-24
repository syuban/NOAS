import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Main from "./page/main/Main";
import Guide from "./page/guide/Guide";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/guide" element={<Guide />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;

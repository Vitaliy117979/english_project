import { Home } from 'pages/Home';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
        </Route>
        <Route />
      </Routes>
    </div>
  );
};

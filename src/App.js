import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/nav.comp';
import Home from './routes/home/home.comp';
import LogIn from './componets/log-in/log-in.comp';
import Shop from './routes/shop/shop.comp';

const App = () => {
	return (
		<Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='shop' element={<Shop />}/>
        <Route path='log-in' element={<LogIn />}/>
      </Route>
		</Routes>
	);
};

export default App;

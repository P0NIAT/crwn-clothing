import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/nav.comp';
import Home from './routes/home/home.component';
import Shop from './routes/shop/shop.component';
import LogIn from './componets/log-in/log-in.comp';

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

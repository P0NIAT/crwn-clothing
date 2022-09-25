import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/nav.comp';
import Home from './routes/home/home.comp';
import LogIn from './componets/log-in/log-in.comp';
import Shop from './routes/shop/shop.comp';
import Checkout from './routes/checkout/checkout.comp';
import ErrorPage from './componets/error-page/error-page.comp';

const App = () => {
	return (
		<Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='shop/*' element={<Shop />}/>
        <Route path='log-in' element={<LogIn />}/>
        <Route path='checkout' element={<Checkout />}/>
        <Route path='*' element={<ErrorPage />}/>
      </Route>
		</Routes>
	);
};

export default App;

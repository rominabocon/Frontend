import './App.css';
import { Route } from 'react-router-dom';

import AddNewProduct from './components/AddNewProduct/AddNewProduct';
import Nav from './components/Nav/Nav';
import Landing from './components/Landing/Landing';
import Search from './components/SearchBar/Search';
import LogInTop from './components/LogIn/LogInTop';
import LogIn from './components/LogIn/LogInMain';
import Products from './components/Products/Products';

export default function App() {
	return (
		<div className='app'>
			<div className='appName'>Shop</div>
			<div className='top'>
				<div className='searchBar'>
					<Search />
				</div>
				<div className='login'>
					<LogInTop />
				</div>
			</div>
			<div className='left'>
				<Nav />
			</div>
			<div className='container'>
				<Route exact path='/AddNewProduct' component={AddNewProduct} />
				<Route exact path='/Products' component={Products} />
				<Route exact path='/LogIn' component={LogIn} />
				<Route exact path='/' component={Landing} />
			</div>
		</div>
	);
}

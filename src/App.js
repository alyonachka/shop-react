import { useReducer } from 'react';
import './App.css';
import { Shop } from './pages/ShopPage';
import { headerReducer, initialState } from './reducers/headerReducer';
import { HeaderContext } from './context/headerContext'
import { useLocalStorage } from './hooks/useLocalStorage';
import { Cart } from './pages/CartPage';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';


const PRODUCT_IN_BASKET_KEY = "product-in-basket";
const PRODUCT_IN_FAVORITE_KEY = "product-in-favorites";

const router = createBrowserRouter([
  {
    path: "/shop-react",
    element: <Shop />,
  },
  {
    path: "/shop-react/shop",
    element: <Shop />,
  },
  {
    path: "/shop-react/cart",
    element: <Cart />,
  },
]);

const init = (getFromLS) => {

  let state = {
    basketCounter: 0,
    favoritesCounter: 0,
  }

  const productsInBasket = getFromLS(PRODUCT_IN_BASKET_KEY);
  const productsInFav = getFromLS(PRODUCT_IN_FAVORITE_KEY);

  if (productsInBasket) {
    let countProductsInBasket = 0;

    productsInBasket.forEach(
      (product) => (countProductsInBasket += product.quantity)
    );

    state = {
      ...state,
      basketCounter: countProductsInBasket
    }
  }

  if (productsInFav) {
    state = {
      ...state,
      favoritesCounter: productsInFav.length
    }
  }

  return state

}

function App() {
  const { getFromLS } = useLocalStorage()
  const [state, dispatch] = useReducer(headerReducer, initialState, () => init(getFromLS));

  return (
    <>
      <HeaderContext.Provider value={{ state, dispatch }}>
        <RouterProvider router={router} />
      </HeaderContext.Provider>
    </>
  );
}

export default App;

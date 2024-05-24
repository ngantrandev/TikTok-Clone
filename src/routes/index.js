// pages
import Home from '../components/pages/Home';
import Live from '../components/pages/Live';
import Fowllowing from '../components/pages/Following';
import Profile from '../components/pages/Profile';

// config
import configs from '../configs';
import Login from '../components/pages/Login';

const publicRoutes = [
  { path: configs.routes.home, component: Home },
  { path: '/home', component: Home },
  { path: configs.routes.following, component: Fowllowing },
  { path: configs.routes.profile, component: Profile },
  { path: configs.routes.live, component: Live },
  { path: configs.routes.login, component: Login, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

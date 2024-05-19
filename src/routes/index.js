// pages
import Home from '../components/pages/Home';
import Fowllowing from '../components/pages/Following';
import Profile from '../components/pages/Profile';
import Upload from '../components/pages/Upload';
import Search from '../components/pages/Search';
import Live from '../components/pages/Live';

// config
import configs from '../configs';

// layouts
import { HeaderOnly } from '../layouts';

const publicRoutes = [
  { path: configs.routes.home, component: Home },
  { path: '/home', component: Home },
  { path: configs.routes.following, component: Fowllowing },
  { path: configs.routes.profile, component: Profile },
  { path: configs.routes.upload, component: Upload, layout: HeaderOnly },
  { path: configs.routes.search, component: Search, layout: null },
  { path: configs.routes.live, component: Live },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

// pages
import Home from '../components/pages/Home';
import Fowllowing from '../components/pages/Following';
import Profile from '../components/pages/Profile';
import Upload from '../components/pages/Upload';
import Search from '../components/pages/Search';

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
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

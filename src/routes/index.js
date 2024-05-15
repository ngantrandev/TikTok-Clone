// pages
import Home from '../components/pages/Home';
import Fowllowing from '../components/pages/Following';
import Profile from '../components/pages/Profile';
import Upload from '../components/pages/Upload';
import Search from '../components/pages/Search';

// config
import routeConfigs from '../configs/routes';

// layouts
import { HeaderOnly } from '../components/Layout';

const publicRoutes = [
  { path: routeConfigs.home, component: Home },
  { path: '/home', component: Home },
  { path: routeConfigs.following, component: Fowllowing },
  { path: routeConfigs.profile, component: Profile },
  { path: routeConfigs.upload, component: Upload, layout: HeaderOnly },
  { path: routeConfigs.search, component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

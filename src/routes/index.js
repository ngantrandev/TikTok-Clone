// pages
import Home from '../components/pages/Home';
import Fowllowing from '../components/pages/Following';
import Profile from '../components/pages/Profile';
import Upload from '../components/pages/Upload';
import Search from '../components/pages/Search';

// layouts
import { HeaderOnly } from '../components/Layout';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/following', component: Fowllowing },
  { path: '/profile', component: Profile },
  { path: '/upload', component: Upload, layout: HeaderOnly },
  { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

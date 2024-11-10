import * as Pages from "./Pages";
import { paths } from "./paths";

export const routes = [
  { path: paths.Home, component: Pages.Home },
  { path: paths.About, component: Pages.About },
  { path: paths.Contact, component: Pages.Contact },
  { path: paths.Projects, component: Pages.Projects },
];

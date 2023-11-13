import { SignIn, SignUp, Home } from "../pages";

const publicLinks = [
  {
    path: "/sign-up",
    component: SignUp,
  },
  {
    path: "/sign-in",
    component: SignIn,
  },
];

const priviteLinks = [
  {
    path: "/",
    component: Home,
    isPrivate: true,
  },
];

const routes = {
  priviteLinks,
  publicLinks
}

export default routes;
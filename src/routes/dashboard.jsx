import Dashboard from "views/Dashboard/Dashboard.jsx";
import Notifications from "views/Notifications/Notifications.jsx";
import Icons from "views/Icons/Icons.jsx";
import Typography from "views/Typography/Typography.jsx";
import TableList from "views/TableList/TableList.jsx";
import Maps from "views/Maps/Maps.jsx";
import Upgrade from "views/Upgrade/Upgrade.jsx";
import UserPage from "views/UserPage/UserPage.jsx";

/**
 * routes for exemples:
 * /dashboard
 * /icons
 * /maps
 * /notifications
 * /user-page
 * /extended-tables
 * /typography
 * /upgrade
 */
var dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "design_app",
    component: Dashboard
  },
  {
    path: "/rooms",
    name: "Quartos",
    icon: "objects_key-25",
    component: Icons
  },
  {
    path: "/orders",
    name: "Pedidos",
    icon: "shopping_bag-16",
    component: UserPage
  },
  {
    path: "/services",
    name: "Serviços",
    icon: "ui-2_settings-90",
    component: UserPage
  },
  {
    path: "/company",
    name: "Empresa",
    icon: "business_briefcase-24",
    component: UserPage
  },
  {
    path: "/user-page",
    name: "Colaboradores",
    icon: "business_badge",
    component: UserPage
  },
  {
    pro: true,
    path: "/",
    name: "SAIR",
    icon: "media-1_button-power",
    component: Upgrade
  },
  { redirect: true, path: "/", pathTo: "/dashboard", name: "Dashboard" }
];
export default dashRoutes;

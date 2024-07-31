import Comments from "./Pages/Comments/Comments";
import Offs from "./Pages/Offs/Offs";
import Orders from "./Pages/Orders/Orders";
import Products from "./Pages/Products/Products";
import Users from "./Pages/Users/Users";

const Routes = [
    { path: "/Users", element: <Users></Users> },
    { path: "/Products", element: <Products></Products> },
    { path: "/Orders", element: <Orders></Orders> },
    { path: "/Comments", element: <Comments></Comments> },
    { path: "/Offs", element: <Offs></Offs> }
]

export default Routes
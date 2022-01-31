import Home from "../views/Home.vue";

const routes = [{
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import ("../views/About.vue")
    },
    {
        path: "/contact",
        name: "Contact",
        component: () =>
            import ("../views/Contact.vue")
    },
    {
        path: "/archive",
        name: "Archive",
        component: () =>
            import ("../views/Archive.vue")
    },
    {
        path: "/read/:id",
        name: "read",
        component: () =>
            import ("../components/parts/Read.vue")
    },
    // authentication
    {
        path: "/login",
        name: "Login",
        component: () =>
            import ("../components/authentication/Login.vue")
    },
    {
        path: "/signup",
        name: "Signup",
        component: () =>
            import ("../components/authentication/Signup.vue")
    },
    {
        path: "/login-help",
        name: "LoginHelp",
        component: () =>
            import ("../components/authentication/LoginHelp.vue")
    },
    {
        path: "/reset",
        name: "Reset",
        component: () =>
            import ("../components/authentication/Reset.vue")
    },
    {
        path: "/confirm",
        name: "Confirm",
        component: () =>
            import ("../components/authentication/Confirm.vue")
    },
    // private
    {
        path: "/dashboard",
        name: "Dashboard",
        component: () =>
            import ("../components/private/Dashboard.vue")
    },
    // otherwise
    { path: "*", redirect: "/" }
];

export default routes;
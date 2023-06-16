import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Instructors from "../pages/Home/Home/Instructors/Instructors";
import Classes from "../pages/Home/Home/Classes/Classes";
import Login from "../pages/Home/Login/Login";
import Register from "../pages/Home/Home/Register/Register";
import Dashboard from "../Layout/Dashboard";
import AddaClass from "../pages/Dashboard/AddaClass/AddaClass";
import MyClass from "../pages/Dashboard/MyClass/MyClass";
import MySelectedClass from "../pages/Dashboard/MySelectedClass/MySelectedClass";
import MyEnrolledClass from "../pages/Dashboard/MyEnrolledClass/MyEnrolledClass";
import ManageClasses from "../pages/Dashboard/ManageClasses/ManageClasses";
import ManageUsers from "../pages/Dashboard/ManageUsers/ManageUsers";
import Feedback from "../pages/Dashboard/ManageClasses/Feedback";
import Payment from "../pages/Dashboard/Payment/Payment";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import StudentRoute from "./StudentRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import PaymentHistory from "../pages/Dashboard/PaymentHIstory/PaymentHistory";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            },
            {
                path: 'classes',
                element: <Classes></Classes>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // Instructor
            {
                path: 'addclass',
                element: <InstructorRoute><AddaClass></AddaClass></InstructorRoute>
            },
            {
                path: 'myclass',
                element: <InstructorRoute><MyClass></MyClass></InstructorRoute>
            },
            // Student
            {
                path:'myselectedclass',
                element: <StudentRoute><MySelectedClass></MySelectedClass></StudentRoute>
            },
            {
                path: 'myenrolledclass',
                element: <StudentRoute><MyEnrolledClass></MyEnrolledClass></StudentRoute>
            },
            {
                path: 'pay',
                element: <StudentRoute><Payment></Payment> </StudentRoute>   
            },
            {
                path: 'payment',
                element: <StudentRoute><PaymentHistory></PaymentHistory></StudentRoute>
            },
            // Admin
            {
                path: 'manageclass',
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path: 'manageusers',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path: 'feedback/:id',
                element: <AdminRoute><Feedback></Feedback></AdminRoute>
            }
        ]
    }
]);

export default router
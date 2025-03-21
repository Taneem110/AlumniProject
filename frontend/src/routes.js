import { createBrowserRouter, Navigate } from 'react-router-dom';

// Import all page components
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
// import Signup from './pages/Signup';
// import ForgotPassword from './pages/ForgotPassword';
// import FAQ from './pages/FAQ';
// import AlumniDashboard from './pages/AlumniDashboard';
// import AlumniDirectory from './pages/AlumniDirectory';
// import JobBoard from './pages/JobBoard';
// import Donations from './pages/Donations';
// import Events from './pages/Events';
// import Profile from './pages/Profile';
// import Networking from './pages/Networking';
// import StudentDashboard from './pages/StudentDashboard';
// import MentorshipProgram from './pages/MentorshipProgram';
// import InternshipBoard from './pages/InternshipBoard';
// import StaffDashboard from './pages/StaffDashboard';
// import ManageEvents from './pages/ManageEvents';
// import ManageJobPostings from './pages/ManageJobPostings';
// import ManageDonations from './pages/ManageDonations';
// import Reports from './pages/Reports';
// import AdminDashboard from './pages/AdminDashboard';
// import UserManagement from './pages/UserManagement';
// import RoleManagement from './pages/RoleManagement';
// import ManageContent from './pages/ManageContent';
// import SystemSettings from './pages/SystemSettings';
// import AuditLogs from './pages/AuditLogs';
// import BackupRestore from './pages/BackupRestore';
// import ErrorPage from './pages/ErrorPage';

// Mock function to get user role (replace with your actual authentication logic)
const getUserRole = () => {
  // Example: Get role from context, Redux, or localStorage
  return localStorage.getItem('userRole'); // e.g., 'alumni', 'student', 'staff', 'admin'
};

// Higher-Order Component (HOC) for role-based access control
const ProtectedRoute = ({ children, allowedRoles }) => {
  const userRole = getUserRole();

  if (!allowedRoles.includes(userRole)) {
    // Redirect to home page if user doesn't have the required role
    return <Navigate to="/" />;
  }

  return children;
};

// Define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
//     errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  // {
  //   path: '/faq',
  //   element: <FAQ />, 
  // },
  // {
  //   path: '/signup',
  //   element: <Signup />,
  // },
  // {
  //   path: '/forgot-password',
  //   element: <ForgotPassword />,
  // },
  // Alumni Routes
//   {
//     path: '/alumni/dashboard',
//     element: (
//       <ProtectedRoute allowedRoles={['alumni']}>
//         <AlumniDashboard />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: '/alumni/directory',
//     element: (
//       <ProtectedRoute allowedRoles={['alumni']}>
//         <AlumniDirectory />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: '/alumni/jobs',
//     element: (
//       <ProtectedRoute allowedRoles={['alumni']}>
//         <JobBoard />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: '/alumni/donations',
//     element: (
//       <ProtectedRoute allowedRoles={['alumni']}>
//         <Donations />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: '/alumni/events',
//     element: (
//       <ProtectedRoute allowedRoles={['alumni']}>
//         <Events />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: '/events/mentorship',
//     element: <MentorshipProgram />,
//   },
//   {
//     path: '/alumni/profile',
//     element: (
//       <ProtectedRoute allowedRoles={['alumni']}>
//         <Profile />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: '/alumni/networking',
//     element: (
//       <ProtectedRoute allowedRoles={['alumni']}>
//         <Networking />
//       </ProtectedRoute>
//     ),
//   },
//   // Student Routes
//   {
//     path: '/student/dashboard',
//     element: (
//       <ProtectedRoute allowedRoles={['student']}>
//         <StudentDashboard />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: '/student/mentorship',
//     element: (
//       <ProtectedRoute allowedRoles={['student']}>
//         <MentorshipProgram />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: '/student/internships',
//     element: (
//       <ProtectedRoute allowedRoles={['student']}>
//         <InternshipBoard />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: '/student/events',
//     element: (
//       <ProtectedRoute allowedRoles={['student']}>
//         <Events />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: '/student/profile',
//     element: (
//       <ProtectedRoute allowedRoles={['student']}>
//         <Profile />
//       </ProtectedRoute>
//     ),
//   },
//   // Staff Routes
//   {
//     path: '/staff/dashboard',
//     element: (
//       <ProtectedRoute allowedRoles={['staff']}>
//         <StaffDashboard />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: '/staff/events',
//     element: (
//       <ProtectedRoute allowedRoles={['staff']}>
//         <ManageEvents />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: '/staff/jobs',
//     element: (
//       <ProtectedRoute allowedRoles={['staff']}>
//         <ManageJobPostings />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: '/staff/donations',
//     element: (
//       <ProtectedRoute allowedRoles={['staff']}>
//         <ManageDonations />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: '/staff/reports',
//     element: (
//       <ProtectedRoute allowedRoles={['staff']}>
//         <Reports />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: '/staff/profile',
//     element: (
//       <ProtectedRoute allowedRoles={['staff']}>
//         <Profile />
//       </ProtectedRoute>
//     ),
//   },
//   // Admin Routes
//   {
//     path: '/admin/dashboard',
//     element: (
//       <ProtectedRoute allowedRoles={['admin']}>
//         <AdminDashboard />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: '/admin/users',
//     element: (
//       <ProtectedRoute allowedRoles={['admin']}>
//         <UserManagement />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: '/admin/roles',
//     element: (
//       <ProtectedRoute allowedRoles={['admin']}>
//         <RoleManagement />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: '/admin/content',
//     element: (
//       <ProtectedRoute allowedRoles={['admin']}>
//         <ManageContent />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: '/admin/settings',
//     element: (
//       <ProtectedRoute allowedRoles={['admin']}>
//         <SystemSettings />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: '/admin/logs',
//     element: (
//       <ProtectedRoute allowedRoles={['admin']}>
//         <AuditLogs />
//       </ProtectedRoute>
//     ),
//   },
//   {
//     path: '/admin/backup',
//     element: (
//       <ProtectedRoute allowedRoles={['admin']}>
//         <BackupRestore />
//       </ProtectedRoute>
//     ),
//   },
//   // Error Routes
//   {
//     path: '*',
//     element: <ErrorPage />,
//   },
]);

export default router;
import DashIcon from '../Assets/Images/icons/sidebar icons/superadmin/dashboard-icon.svg';
import ComplaintsIcon from '../Assets/Images/icons/sidebar icons/complainee/complaints.svg';
import EmployeesIcon from '../Assets/Images/icons/sidebar icons/admin/employees.svg';
import DepartmentsIcon from '../Assets/Images/icons/sidebar icons/admin/departments.svg';
import CategoriesIcon from '../Assets/Images/icons/sidebar icons/admin/categories.svg';

const adminSidebar = [
    {
        title: 'Dashboard',
        icon: DashIcon,
        link: '/dashboard'
    },
    {
        title: 'Employees',
        icon: EmployeesIcon,
        link: '/employees'
    },
    {
        title: 'Departments',
        icon: DepartmentsIcon,
        link: '/departments'
    },
    {
        title: 'Categories',
        icon: CategoriesIcon,
        link: '/categories'
    },
    {
        title: 'Complaints',
        icon: ComplaintsIcon,
        link: '/complaints'
    },
]

export default adminSidebar;
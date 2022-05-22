import DashIcon from '../Assets/Images/icons/sidebar icons/superadmin/dashboard-icon.svg';
import CustomersIcon from '../Assets/Images/icons/sidebar icons/superadmin/customers-icon.svg';
import KnowledgeIcon from '../Assets/Images/icons/sidebar icons/superadmin/knowledge-icon.svg';
import AnalyticsIcon from '../Assets/Images/icons/sidebar icons/superadmin/analytics-icon.svg';
import FeedbackIcon from '../Assets/Images/icons/sidebar icons/superadmin/feedback-icon.svg';
import BillingIcon from '../Assets/Images/icons/sidebar icons/superadmin/billing-icon.svg';
import SettingsIcon from '../Assets/Images/icons/sidebar icons/superadmin/settings-icon.svg';

const superadminSidebar = [
    {
        title: 'Dashboard',
        icon: DashIcon,
        link: '/dashboard'
    },
    {
        title: 'Customers',
        icon: CustomersIcon,
        link: '/customers'
    },
    {
        title: 'Knowledge Base',
        icon: KnowledgeIcon,
        link: '/knowledge-base'
    },
    {
        title: 'Analytics',
        icon: AnalyticsIcon,
        link: '/analytics'
    },
    {
        title: 'Feedback',
        icon: FeedbackIcon,
        link: '/feedback'
    },
    {
        title: 'Billing',
        icon: BillingIcon,
        link: '/billing'
    },
    {
        title: 'Settings',
        icon: SettingsIcon,
        link: '/settings'
    },
]

export default superadminSidebar;
export const STATS = [
  {
    label: 'Total Users',
    value: '1,280',
    icon: 'pi pi-users',
    color: 'blue',
  },
  {
    label: 'Active Users',
    value: '1,245',
    icon: 'pi pi-user-check',
    color: 'green',
  },
  { label: 'Blocked', value: '12', icon: 'pi pi-user-minus', color: 'red' },
  {
    label: 'Admin Accounts',
    value: '45',
    icon: 'pi pi-shield',
    color: 'purple',
  },
  {
    label: 'Guest Accounts',
    value: '23',
    icon: 'pi pi-id-card',
    color: 'orange',
  },
];

export const ACTIVITIES = [
  {
    type: 'Role Change',
    user: 'johndoe',
    action: 'Assigned "Faculty" role',
    time: '10 mins ago',
    icon: 'pi-key',
    iconColor: 'text-purple-500',
  },
  {
    type: 'Password Reset',
    user: 'admin_jane',
    action: 'Requested manual reset',
    time: '1 hour ago',
    icon: 'pi-refresh',
    iconColor: 'text-orange-500',
  },
  {
    type: 'Login',
    user: 'prof_smith',
    action: 'Logged in from MH, India',
    time: '2 hours ago',
    icon: 'pi-sign-in',
    iconColor: 'text-green-500',
  },
  {
    type: 'Role Removal',
    user: 'k.kumar',
    action: 'Removed "Registrar" role',
    time: '5 hours ago',
    icon: 'pi-trash',
    iconColor: 'text-red-500',
  },
];

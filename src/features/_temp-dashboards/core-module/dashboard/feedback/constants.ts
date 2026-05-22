export const KPIS = [
  {
    label: 'Total Templates',
    value: '24',
    sub: 'Feedback Forms',
    icon: 'pi-file',
    color: 'blue',
  },
  {
    label: 'Total Questions',
    value: '186',
    sub: 'Across Banks',
    icon: 'pi-question',
    color: 'indigo',
  },
  {
    label: 'Active Now',
    value: '4',
    sub: 'Live Feedback',
    icon: 'pi-bolt',
    color: 'green',
  },
  {
    label: 'Upcoming',
    value: '2',
    sub: 'Scheduled',
    icon: 'pi-calendar',
    color: 'orange',
  },
  {
    label: 'Closed',
    value: '18',
    sub: 'Past Events',
    icon: 'pi-lock',
    color: 'gray',
  },
];

export const STATUS_DATA = {
  labels: ['Active', 'Upcoming', 'Closed/Expired'],
  datasets: [
    {
      data: [4, 2, 18],
      backgroundColor: ['#10b981', '#f59e0b', '#6b7280'],
      hoverBackgroundColor: ['#059669', '#d97706', '#4b5563'],
    },
  ],
};

export const RESPONSE_DATA = {
  labels: ['Template A', 'Template B', 'Template C', 'Template D'],
  datasets: [
    {
      label: 'Responses Received',
      backgroundColor: '#6366f1',
      data: [650, 480, 720, 310],
    },
    {
      label: 'Target Audience',
      backgroundColor: '#e2e8f0',
      data: [800, 800, 800, 400],
    },
  ],
};

export const EVENTS = [
  {
    status: 'Ongoing',
    date: '2026-05-15 to 2026-05-30',
    title: 'End Semester Feedback - CS',
    icon: 'pi-play-circle',
    color: 'green',
  },
  {
    status: 'Upcoming',
    date: '2026-06-01 to 2026-06-15',
    title: 'Faculty Evaluation - Q2',
    icon: 'pi-calendar-plus',
    color: 'orange',
  },
  {
    status: 'Upcoming',
    date: '2026-07-10 to 2026-07-20',
    title: 'Campus Facility Survey',
    icon: 'pi-calendar-plus',
    color: 'blue',
  },
  {
    status: 'Past',
    date: '2026-04-01 to 2026-04-15',
    title: 'Mid-term Feedback - All Depts',
    icon: 'pi-history',
    color: 'gray',
  },
];

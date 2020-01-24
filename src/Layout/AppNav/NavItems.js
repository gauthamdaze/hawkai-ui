export const DashboardNav = [
    {
        icon: 'pe-7s-server',
        label: 'Data List',
        to: '#/dashboards/basic',
    },
    {
        icon: 'pe-7s-cloud-upload',
        label: 'Upload Files',
        to: '#/elements/navigation',
    },
];
export const AdministrationNav = [
    {
        icon: 'pe-7s-id',
        label: 'Groups',
        content: [
            {
                label: 'Groups',
                to: '#/elements/buttons-standard',
            },
            {
                label: 'Dropdowns',
                to: '#/elements/dropdowns',

            },
            {
                label: 'Icons',
                to: '#/elements/icons',
            },
            {
                label: 'Badges',
                to: '#/elements/badges-labels',
            },
            {
                label: 'Cards',
                to: '#/elements/cards',
            },
            {
                label: 'List Groups',
                to: '#/elements/list-group',
            },
            {
                label: 'Navigation Menus',
                to: '#/elements/navigation',
            },
            {
                label: 'Utilities',
                to: '#/elements/utilities',
            },
        ],
    },
    {
        icon: 'pe-7s-users',
        label: 'Users',
        content: [
            {
                label: 'Tabs',
                to: '#/components/tabs',
            },
            {
                label: 'Notifications',
                to: '#/components/notifications',
            },
            {
                label: 'Modals',
                to: '#/components/modals',
            },
            {
                label: 'Progress Bar',
                to: '#/components/progress-bar',
            },
            {
                label: 'Tooltips & Popovers',
                to: '#/components/tooltips-popovers',
            },
            {
                label: 'Carousel',
                to: '#/components/carousel',
            },
            {
                label: 'Maps',
                to: '#/components/maps',
            },
        ],
    }
];

export default [
    {
        path: '/',
        alias: '/dashboard',
        name: 'root',
        component: () => import('@/views/dashboard/index')
    },
    {
        path: '/project',
        name: 'project',
        component: () => import('@/views/project/index'),
        children: [
            {
                path: '',
                name: 'tabs',
                component: () => import('@/views/project/components/projectTabs'),
            },
            {
                path: ':id/subsystem',
                name: 'subsystem',
                component: () => import('@/views/project/components/dataView'),
                children: [
                    {
                        path: ':id/iteration',
                        name: 'iteration',
                        component: () => import('@/views/project/components/dataView'),
                    },
                ]
            }
        ]
    },
    {
        path: '/bug',
        name: 'bug',
        component: () => import('@/views/bug/index')
    },
    {
        path: '/execution',
        name: 'execution',
        component: () => import('@/views/execution/index')
    },
    {
        path: '/projectManagement',
        name: 'projectManagement',
        component: () => import('@/views/projectManagement/index')
    },
    {
        path: '/setting',
        name: 'setting',
        component: () => import('@/views/setting/index')
    },
]

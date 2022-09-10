
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
        component: () => import('@/views/project/index')
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

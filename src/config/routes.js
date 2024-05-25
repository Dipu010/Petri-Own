const routes = {
    dashboard: {
        label: 'About',
        uri: '/dashboard',
        slug: 'dashboard',
        children: []
    },
    simulation: {
        label: 'Editor',
        uri: '/dashboard/editor',
        slug: 'editor',
        children: []
    },
    quiz:{
        label: 'Quiz',
        uri: '/dashboard/quiz',
        slug: 'quiz',
        children: []
    }
}

const getRouteLabel = uri => {
    let routeMap = []
    Object.values(routes).forEach(r => {
        r.children.length ? r.children.forEach(c => routeMap.push({label:c.label,uri:c.uri})) : routeMap.push({label:r.label,uri:r.uri})
    })
    const routeMatch = routeMap.find(r => r.uri === uri)        
    return routeMatch !== undefined ? routeMatch.label : 0
}

export { routes, getRouteLabel }
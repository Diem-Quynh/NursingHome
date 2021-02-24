import { Breadcrumb } from "antd"
import { getBreadcrumbs, route as makeUrl } from 'themes/route'
import Link from 'next/link'
import _routes from 'themes/_routes.json'
import useBaseHook from 'themes/hooks/BaseHooks'
import { HomeFilled } from "@ant-design/icons"
interface Route {
    name: string,
}

const breadCrumbComponent = () => {
    const { router, t, redirect } = useBaseHook({ lang: ['menu'] })
    const getRouteName = () => {
        const routePath = router.pathname
        const routeData: any = _routes
        for (let routeName in routeData) {
            let routeElement = routeData[routeName]
            if (!routeElement.action) continue;
            if (routeElement.action.substr(5) === routePath) return routeName
        }
    }
    let breadCumbs = []
    const routeName = getRouteName()
    let routes: Route[] = getBreadcrumbs(routeName)
    if (routes[0] && routes[0].name != "frontend.admin.home") {
        routes.unshift({
            name: 'frontend.admin.home',
        })
    }
    for (let route of routes) {
        try {
            let linkProps = makeUrl(route.name)
            breadCumbs.push(<Breadcrumb.Item key={route.name}>
                <Link {...linkProps}>
                    <a>{ route.name == "frontend.admin.home" ? <HomeFilled /> : t(route.name) }</a>
                </Link>
            </Breadcrumb.Item>)
        }
        catch(e) {
            breadCumbs.push(<Breadcrumb.Item key={route.name}>
                {t(route.name)}
            </Breadcrumb.Item>)
        }
    }

    return <Breadcrumb>{breadCumbs}</Breadcrumb>

}

export default breadCrumbComponent
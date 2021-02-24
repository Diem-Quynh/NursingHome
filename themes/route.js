const UrlPattern = require('url-pattern');
const queryString = require('query-string');

import Router from 'next/router';
import routeConfig from './_routes'
import sidebar from './sidebar'
class Route {
    static makeUrl(name, params) {
        let routeInfo = routeConfig[name]
        if (!routeInfo) {
            //console.error(`Route ${name} not found`)
            throw Error(`Route ${name} not found`);
        }
        let pattern = new UrlPattern(routeInfo.url);
        let query = queryString.stringify(params)
        try {
            let asUrl = pattern.stringify(params) //link hiển thị trên trình duyệt
            let href = asUrl //link thật trong /pages
            if (routeInfo.action.substr(0, 6) === "pages/") {
                href = routeInfo.action.substr(5)
                if (href.indexOf('?') === -1) {
                    href += `?${query}`
                } else {
                    href += `&${query}`
                }
            }
            return {
                as: asUrl,
                href: href
            }

        } catch (e) {
            //console.error(e)
            throw e;
        }
    }

    static addQuery(query, shallow = true) {
        if (!process.browser) return;
        let asPath = window.location.pathname
        let oldQuery = Router.router.query
        let queryObj = {
            ...oldQuery,
            ...query
        }
        if (JSON.stringify(queryObj) == JSON.stringify(oldQuery)) return;
        let queryStringAppend = queryString.stringify(queryObj)
            /* if(queryStringAppend){
              Router.push({
                pathname: Router.router.pathname,
                query: queryObj,
              }, {
                pathname: asPath,
                query: queryObj
              }, {
                shallow: shallow,
              })
              Router.router.query = queryObj
            } */
        Router.push({
            pathname: Router.router.pathname,
            query: queryObj,
        }, {
            pathname: asPath,
            query: queryObj
        }, {
            shallow: shallow,
        })
    }

    static getSidebarSelecteds = (routeName, routes, routePaths = []) => {
        let sidebarSelectedName = routeConfig[routeName] ? routeConfig[routeName].sidebar : undefined
        if (!routes) routes = sidebar
        for (let route of routes) {
            if (route.routeName === sidebarSelectedName) {
                routePaths.push(route)

                return routePaths
            } else if (route.children) {
                let result = this.getSidebarSelecteds(sidebarSelectedName, route.children, [...routePaths, route])
                if (result && result.length) return result
            }
        }
        return [];
    }

    static getBreadcrumbs = (routeName) => {
        let result = []
        const route = routeConfig[routeName] ? routeConfig[routeName] : undefined
        if (route) {
            result.unshift(route);

            if (route.parent) {
                result = [...this.getBreadcrumbs(route.parent), ...result]
            }
        }
        return result
    }

}
const route = Route.makeUrl
const addQuery = Route.addQuery
const getBreadcrumbs = Route.getBreadcrumbs
const getSidebarSelecteds = Route.getSidebarSelecteds
export default route;
export {
    route,
    addQuery,
    getBreadcrumbs,
    getSidebarSelecteds
}

import React, { Fragment } from 'react';
import { Menu } from 'antd';
const { SubMenu } = Menu
import sidebar from 'themes/sidebar'
import { getSidebarSelecteds } from 'themes/route'
import _routes from 'themes/_routes.json'
import useBaseHook from 'themes/hooks/BaseHooks'
import usePermissionHook from 'themes/hooks/PermissionHook'

const MenuComponent = (props: any) => {
  const { router, t, redirect } = useBaseHook({ lang: ['menu'] })
  const {checkPermission} = usePermissionHook()
  const getRouteName = () => {
    const routePath = router.pathname
    const routeData: any = _routes
    for (let routeName in routeData) {
      let routeElement = routeData[routeName]
      if (!routeElement.action) continue;
      if (routeElement.action.substr(5) === routePath) return routeName
    }
  }

  const generateMenus = (data: any) => {
    return data.map((item: any) => {
      if (item.children) {
        if (item.type === "group") {
          let children = generateMenus(item.children)
          if (!children.length) return;
          return (
            <Menu.ItemGroup
              key={item.routeName}
              title={
                <Fragment>
                  {item.icon? item.icon: ''}
                  <span>{t(item.routeName)}</span>
                </Fragment>
              }
            >
              {children}
            </Menu.ItemGroup>
          );
        }
        else {
          return (
            <SubMenu
              key={item.routeName}
              title={
                <Fragment>
                  {item.icon? item.icon: ''}
                  <span>{t(item.routeName)}</span>
                </Fragment>
              }
            >
              {generateMenus(item.children)}
            </SubMenu>
          );
        }
      }
      if(!checkPermission(item.permissions)) return
      return (
        <Menu.Item key={item.routeName} onClick={() => redirect(item.routeName)}
        >
          {item.icon? item.icon: ''}
          <span>{t(item.routeName)}</span>
        </Menu.Item>
      );
    }).filter((menu:any) => menu);
  }

  const { theme, onCollapseChange, isMobile, tReady, ...otherProps } = props
  const currentRouteName = getRouteName()
  const breadcums = getSidebarSelecteds(currentRouteName)
  let routerNames = breadcums.map((breadcum: any) => breadcum.routeName)
  const selectedKeys = routerNames.pop()
  return <Menu
    mode="inline"
    theme={theme}
    defaultOpenKeys={routerNames}
    selectedKeys={selectedKeys}
    onClick={
      isMobile
        ? () => {
          onCollapseChange(true)
        }
        : undefined
    }
    {...otherProps}
  >
    {generateMenus(sidebar)}
  </Menu>
}

export default MenuComponent
import React from 'react';
import App, { Container } from 'next/app';
import { appWithTranslation } from 'themes/modules/I18n'
import { Provider } from 'react-redux'
import { makeStore, setStore } from 'themes/components/Store'
import nextCookie from 'next-cookies'
import withRedux from "next-redux-wrapper";
import Loading from 'themes/components/Loading'
import 'themes/less/custom-ant-theme.less';
import 'themes/less/home.less'
import 'themes/less/login.less'
import 'themes/less/admin.less'
import _ from 'lodash'

import Error403Page from 'themes/components/Errors/403'
import { ScrollToTopButton } from 'themes/components/Utils'
import { checkPermission, decToCrud } from 'themes/utils/Permission'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig();


class MyApp extends App {

  static async getInitialProps(AppContext) {
    const { Component, ctx } = AppContext

    //check permission
    const pagePermissions = Component.permissions
    const cookies = nextCookie(ctx)
    const userPermissions = _.get(cookies, "user.permissions", {})
    let resultPermission = {}
    let newComponent = Component


    if (pagePermissions) {
      resultPermission = checkPermission(pagePermissions, userPermissions, true);
      if (resultPermission != true) newComponent = Error403Page
    }

    const appProps = await App.getInitialProps({
      ...AppContext,
      Component: newComponent
    });

    // calls page's `getInitialProps` and fills `appProps.pageProps`
    ctx.store.dispatch(setStore("auth", cookies.user));
    ctx.store.dispatch(setStore("cookies", cookies));
    ctx.store.dispatch(setStore("publicRuntimeConfig", publicRuntimeConfig));
    let namespacesRequired = appProps.namespacesRequired || []

    return {
      ...resultPermission,
      ...appProps,
      auth: cookies.user,
      cookies: cookies,
      namespacesRequired: [...namespacesRequired, 'common', 'pages', 'menu'],
    }
  }

  render() {
    let { Component, pageProps, store, error, permissions } = this.props;
    return (
      <>
        <Loading />
        <Provider store={store}>
          {error ?
            <Error403Page permissions={permissions} />
            :
            <Component {...pageProps} />
          }
          <ScrollToTopButton />
        </Provider>
      </>
    );
  }
}

export default withRedux(makeStore)(appWithTranslation(MyApp))
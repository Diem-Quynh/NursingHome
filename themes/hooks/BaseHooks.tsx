import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { useTranslation } from 'themes/modules/I18n'
import { useDispatch, useSelector } from 'react-redux'
import { setStore as setStoreAction } from 'themes/components/Store'
import route from 'themes/route'
import _ from 'lodash'
import { notification } from 'antd'
interface BaseBook {
    useSelector: Function,
    router: any,
    t: Function,
    setStore: Function,
    getStore: Function,
    redirect: Function,
    getData: Function,
    notify: Function,
    getAuth: Function
    getCookies: Function,
    getPublicRuntimeConfig: Function
}
const useBaseHooks =  ({ lang = ['common', 'pages', 'errors'],} : { lang?: string[], } = {}): BaseBook => {
    const router = useRouter()
    const I18n = useTranslation(lang)
    const dispatch = useDispatch();

    const setStore = async (path: string, value: any): Promise<any> => {
        return dispatch(setStoreAction(path, value))
    }

    const getStore = (path: string): any => {
        return useSelector((state: any) => _.get(state, path))
    }

    const redirect = (routeName: string, query: string, shallow: boolean = false): void => {
        let nextRoute;
        try {
            nextRoute = route(routeName, query)
        }
        catch (e) {
            nextRoute = {
                href: routeName,
                as: routeName
            }
        }

        router.push(nextRoute.href, nextRoute.as, {
            shallow
        })
    }
    const getData = (obj: any, path: string, defaultValue: any = undefined): any => {
        let value = _.get(obj, path, defaultValue)
        if (value == null) return defaultValue
        return value
    }

    const notify = (message: string, description: string = '', type: "success" | "error" | "warning" = "success"): void => {
        notification[type]({
            message: message,
            description: description,
            duration: 4 //second
        });
    }

    const getAuth = (): any => {
        return useSelector((state: any) => state.auth)
    }
    const getCookies = (): any => {
        return useSelector((state: any) => state.cookies)
    }
    const getPublicRuntimeConfig = (): any => {
        return useSelector((state: any) => state.publicRuntimeConfig)
    }

    return {
        useSelector,
        router,
        t: I18n.t,
        setStore,
        getStore,
        redirect,
        getData,
        notify,
        getAuth,
        getCookies,
        getPublicRuntimeConfig
    };
}

useBaseHooks.getData =  (obj: any, path: string, defaultValue: any = undefined): any => {
    let value = _.get(obj, path, defaultValue)
    if (value == null) return defaultValue
    return value
}

export default useBaseHooks
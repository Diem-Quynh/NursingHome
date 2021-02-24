import { NProgress } from '@tanem/react-nprogress'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

/* Router.onRouteChangeStart = () => {
  console.log("vao...")
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  console.log("vao...2")
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};
 */
const Loading = () => {
    const router = useRouter()
    const [isRouteChanging, setIsRouteChanging] = useState(false)
    const onStart = () => {
        setIsRouteChanging(true)
    }
    const onEnd = () => {
        setIsRouteChanging(false)
    }
    useEffect(() => {
        router.events.on('routeChangeStart', onStart)
        router.events.on('routeChangeComplete', onEnd)
        router.events.on('routeChangeError', onEnd)
        return () => {
            router.events.off('routeChangeStart', onStart)
            router.events.off('routeChangeComplete', onEnd)
            router.events.off('routeChangeError', onEnd)
        }
    }, [])
    return <NProgress isAnimating={isRouteChanging} key="loading">
        {({ isFinished, progress, animationDuration }) => (
            <div
                style={{
                    opacity: isFinished ? 0 : 1,
                    pointerEvents: 'none',
                    transition: `opacity ${animationDuration}ms linear`,
                }}
            >
                <div
                    style={{
                        background: '#29d',
                        height: 2,
                        left: 0,
                        marginLeft: `${(-1 + progress) * 100}%`,
                        position: 'fixed',
                        top: 0,
                        transition: `margin-left ${animationDuration}ms linear`,
                        width: '100%',
                        zIndex: 1031,
                    }}
                >
                    <div
                        style={{
                            boxShadow: '0 0 10px #29d, 0 0 5px #29d',
                            display: 'block',
                            height: '100%',
                            opacity: 1,
                            position: 'absolute',
                            right: 0,
                            transform: 'rotate(3deg) translate(0px, -4px)',
                            width: 100,
                        }}
                    />
                </div>
            </div>
        )}
    </NProgress>
}

export default Loading
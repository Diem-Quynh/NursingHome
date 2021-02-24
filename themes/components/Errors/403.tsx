import useBaseHook from 'themes/hooks/BaseHooks'
import { Result, Button } from 'antd';
import { Object } from 'lodash';

const Error = ({ permissions } : { permissions?: [] }) => {
    const { t, router } = useBaseHook()
    let subTitle = ""
    if (permissions) {
        subTitle = t("pages:errors.403.detail") + 'root, '
        for (const iterator of permissions) {
            const permission = iterator['permission']
            const requirePermission = iterator['requirePermission']
            const userPermission = iterator['userPermission']
            subTitle = subTitle + t('common:or')+ ' ' + t("pages:errors.403.permissionDetail", {permission, requirePermission, userPermission})
        }
    }
    return <Result
        status="403"
        title={t("pages:errors.403.title")}
        subTitle={<div style={{ width:'80%', margin:'auto' }}>{t("pages:errors.403.description")}<br />{subTitle}</div>}
        extra={<Button type="primary" onClick={() => router.back()}>{t("back")}</Button>}
    />
}

Error.getInitialProps = () => {
    return {
        namespacesRequired: ['common', 'pages', 'menu']
    }
}
export default Error

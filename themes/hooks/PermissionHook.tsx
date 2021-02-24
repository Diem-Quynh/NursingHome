import useBaseHook from './BaseHooks'
import {checkPermission} from '../utils/Permission'

  
const PermissionHook = () => {
    const { getAuth } = useBaseHook()
    const auth = getAuth() || {}
    const userPermissions = auth.permissions || {}

    const getUserPermission = () => {
        return userPermissions
    }
    
    const _checkPermission = (permissions: any) => {
        return checkPermission(permissions, userPermissions)
    }
    return {
        getUserPermission,
        checkPermission: _checkPermission
    }
}

export default PermissionHook
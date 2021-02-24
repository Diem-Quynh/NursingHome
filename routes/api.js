const Route = require('@core/Route');
const ExtendMiddleware = require("@app/Middlewares/ExtendMiddleware");
const AuthApiMiddleware = require('@app/Middlewares/AuthApiMiddleware')
const { permission, permissionResource, permissionMethod } = require('@app/Middlewares/PermissionMiddleware')

Route.group(() => {
  Route.post("/login", "UserController.login").name('login')

  Route.group(() => {
    Route.put("/users/:id/updatePassword", "UserController.updatePassword").name('users.updatePassword').middleware([
      permission({ 'admin.users': 'U' }),
    ])
    Route.put("/user/:id/userUpdatePassword", "UserController.userUpdatePassword").name('users.userUpdatePassword')

    Route.resource("/userGroups", "UserGroupController").name('userGroups')
    Route.resource("/userPermissions", "UserPermissionController").name('userPermissions')
    Route.get("/userPermissions/:groupId/getPermission", "UserPermissionController.getByGroupId").name('userPermissions.getByGroupId')
    Route.put("/userGroupPermissions", "UserGroupPermissionController.update").name('userGroupPermissions.update')

    Route.resource("/users", "UserController").name('users')
    // .middleware([permissionResource(['admin.users'])])

    Route.resource("/rooms", "RoomController").name('rooms')
    Route.resource("/beds", "BedController").name('beds')
    Route.resource("/patients", "PatientController").name('patients')
    Route.resource("/doctorAssignments", "DoctorAssignmentController").name('doctorAssignments')
    Route.resource("/nurseAssignments", "NurseAssignmentController").name('nurseAssignments')
    Route.resource("/healthStatuses", "HealthStatusController").name('healthStatuses')

  }).middleware([AuthApiMiddleware])
}).middleware([ExtendMiddleware]).name('api')
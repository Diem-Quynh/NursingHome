const Route = require('@core/Route');
const AuthAdminMiddleware = require('@app/Middlewares/AuthAdminMiddleware')

Route.get("/admin/login", "pages/admin/login").name("frontend.admin.login")

Route.group(() => {
  Route.get("/", "pages/admin/dashboard").name("home").sidebar(`dashboard.index`)
  Route.get("/example/form", "pages/example/form").name("example.form")
  {
    let name = 'dashboard'
    Route.get(`/${name}`, `pages/admin/${name}`).name(`${name}.index`).sidebar(`${name}.index`)
  }

  {
    let name = 'users'
    Route.get(`/${name}`, `pages/admin/${name}`).name(`${name}.index`).sidebar(`${name}.index`)
    Route.get(`/${name}/create`, `pages/admin/${name}/create`).name(`${name}.create`).parent(`${name}.index`).sidebar(`${name}.index`)
    Route.get(`/${name}/:id/edit`, `pages/admin/${name}/edit`).name(`${name}.edit`).sidebar(`${name}.index`)
  }

  {
    let name = 'userGroups'
    Route.get(`/${name}`, `pages/admin/${name}`).name(`${name}.index`).sidebar(`${name}.index`)
    Route.get(`/${name}/create`, `pages/admin/${name}/create`).name(`${name}.create`).parent(`${name}.index`).sidebar(`${name}.index`)
    Route.get(`/${name}/:id/edit`, `pages/admin/${name}/edit`).name(`${name}.edit`).parent(`${name}.index`).sidebar(`${name}.index`)
    Route.get(`/${name}/:id/role`, `pages/admin/${name}/role`).name(`${name}.role`).parent(`${name}.index`).sidebar(`${name}.role`)
  }

  {
    let name = 'userPermissions'
    Route.get(`/${name}`, `pages/admin/${name}`).name(`${name}.index`).sidebar(`${name}.index`)
    Route.get(`/${name}/create`, `pages/admin/${name}/create`).name(`${name}.create`).parent(`${name}.index`).sidebar(`${name}.index`)
    Route.get(`/${name}/:id/edit`, `pages/admin/${name}/edit`).name(`${name}.edit`).parent(`${name}.index`).sidebar(`${name}.index`)
  }

  {
    let name = 'rooms'
    Route.get(`/${name}`, `pages/admin/${name}`).name(`${name}.index`).sidebar(`${name}.index`)
    Route.get(`/${name}/create`, `pages/admin/${name}/create`).name(`${name}.create`).parent(`${name}.index`).sidebar(`${name}.index`)
    Route.get(`/${name}/:id/edit`, `pages/admin/${name}/edit`).name(`${name}.edit`).sidebar(`${name}.index`)
  }

  {
    let name = 'beds'
    Route.get(`/${name}`, `pages/admin/${name}`).name(`${name}.index`).sidebar(`${name}.index`)
    Route.get(`/${name}/create`, `pages/admin/${name}/create`).name(`${name}.create`).parent(`${name}.index`).sidebar(`${name}.index`)
    Route.get(`/${name}/:id/edit`, `pages/admin/${name}/edit`).name(`${name}.edit`).sidebar(`${name}.index`)
  }

  {
    let name = 'patients'
    Route.get(`/${name}`, `pages/admin/${name}`).name(`${name}.index`).sidebar(`${name}.index`)
    Route.get(`/${name}/create`, `pages/admin/${name}/create`).name(`${name}.create`).parent(`${name}.index`).sidebar(`${name}.index`)
    Route.get(`/${name}/:id/edit`, `pages/admin/${name}/edit`).name(`${name}.edit`).sidebar(`${name}.index`)
  }

  {
    let name = 'doctorAssignments'
    Route.get(`/${name}`, `pages/admin/${name}`).name(`${name}.index`).sidebar(`${name}.index`)
    Route.get(`/${name}/create`, `pages/admin/${name}/create`).name(`${name}.create`).parent(`${name}.index`).sidebar(`${name}.index`)
    Route.get(`/${name}/:id/edit`, `pages/admin/${name}/edit`).name(`${name}.edit`).sidebar(`${name}.index`)
  }

  {
    let name = 'nurseAssignments'
    Route.get(`/${name}`, `pages/admin/${name}`).name(`${name}.index`).sidebar(`${name}.index`)
    Route.get(`/${name}/create`, `pages/admin/${name}/create`).name(`${name}.create`).parent(`${name}.index`).sidebar(`${name}.index`)
    Route.get(`/${name}/:id/edit`, `pages/admin/${name}/edit`).name(`${name}.edit`).sidebar(`${name}.index`)
  }

  {
    let name = 'healthStatuses'
    Route.get(`/${name}`, `pages/admin/${name}`).name(`${name}.index`).sidebar(`${name}.index`)
    Route.get(`/${name}/create`, `pages/admin/${name}/create`).name(`${name}.create`).parent(`${name}.index`).sidebar(`${name}.index`)
    Route.get(`/${name}/:id/edit`, `pages/admin/${name}/edit`).name(`${name}.edit`).sidebar(`${name}.index`)
  }

  {
    let name = 'statistics'
    Route.get(`/${name}/healthStatus`, `pages/admin/${name}/healthStatus`).name(`${name}.healthStatus`).sidebar(`${name}.index`)
  }

}).prefix('/admin').name("frontend.admin").middleware([AuthAdminMiddleware])

Route.get("/", "pages/admin/dashboard")

/*
Route.group(() => {
  const name = 'users'
  Route.get("/", `pages/admin/${name}`).name(`${name}.index`)
  Route.get("/create", `pages/admin/${name}/create`).name(`${name}.create`)
  Route.get("/:id/edit", `pages/admin/${name}/edit`).name(`${name}.edit`)
}).prefix('/users').middleware([AuthMiddleware]) */
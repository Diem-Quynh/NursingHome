
exports.seed = function (knex, Promise) {

    let permissions = [
        {
            key: "root",
            name: "Quyền Root",
            description: "Root",
            avalibleValue: 15,
            groupId: 2
        },
        {
            key: "admin.userGroups",
            name: "Quản lý nhóm tài khoản",
            description: "Cho phép tạo mới hoặc chỉnh sửa các nhóm tài khoản nhân viên.",
            avalibleValue: 15,
            groupId: 3
        },
        {
            key: "admin.users",
            name: "Quản lý tài khoản",
            description: "Cho phép tạo mới hoặc chỉnh sửa các tài khoản nhân viên.",
            avalibleValue: 15,
            groupId: 1
        },
        {
            key: "admin.rooms",
            name: "Quản lý phòng bệnh",
            description: "Cho phép tạo mới hoặc chỉnh sửa danh sách phòng bệnh.",
            avalibleValue: 15,
            groupId: 4
        },
        {
            key: "admin.beds",
            name: "Quản lý giường bệnh",
            description: "Cho phép tạo mới hoặc chỉnh sửa danh sách giường bệnh.",
            avalibleValue: 15,
            groupId: 4
        }
    ]

    // Deletes ALL existing entries
    return knex('user_permissions').del()
        .then(async () => {
            // Inserts seed entries
            await knex('user_permissions').insert(permissions);
        });
};
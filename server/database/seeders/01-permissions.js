module.exports = {
    up: (queryInterface) => {
        const adminPermissions = [
            'read_user',
            'create_user',
            'update_user',
            'delete_user',
            'read_video',
            'update_video',
            'download_video',
            'delete_video',
            'read_device',
            'create_device',
            'update_device',
            'delete_device',
            'read_schedule',
            'create_schedule',
            'update_schedule',
            'delete_schedule',
            'read_role',
            'update_role',
            'read_school',
            'create_school',
            'update_school',
            'delete_school',
            'read_subject',
            'create_subject',
            'update_subject',
            'delete_subject',
            'read_classroom',
            'create_classroom',
            'update_classroom',
            'delete_classroom',
            'read_class',
            'create_class',
            'update_class',
            'delete_class',
            'read_grade',
            'create_grade',
            'update_grade',
            'delete_grade',
            'read_area',
            'create_area',
            'update_area',
            'delete_area',
            'read_log',
        ];

        const supervisorPermissions = [
            'read_user',
            'create_user',
            'update_user',
            'delete_user',
            'read_video',
            'update_video',
            'read_device',
            'create_device',
            'update_device',
            'read_schedule',
            'create_schedule',
            'update_schedule',
            'delete_schedule',
            'read_role',
            'update_role',
            'read_school',
            'create_school',
            'update_school',
            'delete_school',
            'read_subject',
            'create_subject',
            'update_subject',
            'delete_subject',
            'read_classroom',
            'read_class',
            'read_grade',
            'read_area',
            'read_log',
        ];

        const schoolManagerPermissions = [
            'read_user',
            'create_user',
            'update_user',
            'delete_user',
            'read_video',
            'update_video',
            'read_device',
            'create_device',
            'update_device',
            'read_schedule',
            'create_schedule',
            'update_schedule',
            'delete_schedule',
            'read_role',
            'update_role',
            'read_school',
            'create_school',
            'update_school',
            'delete_school',
            'read_subject',
            'create_subject',
            'update_subject',
            'delete_subject',
            'read_classroom',
            'read_class',
            'read_grade',
            'read_area',
            'read_log',
        ];

        const teacherPermissions = [
            'read_user',
            'read_video',
            'read_device',
            'read_schedule',
            'read_role',
            'read_school',
            'read_subject',
            'read_classroom',
            'read_class',
            'read_grade',
            'read_area',
            'read_log',
        ];

        const data = [
            {
                role: 'admin',
                permissions: adminPermissions,
            },
            {
                role: 'supervisor',
                permissions: supervisorPermissions,
            },
            {
                role: 'school_manager',
                permissions: schoolManagerPermissions,
            },
            {
                role: 'teacher',
                permissions: teacherPermissions,
            },
            {
                role: 'business_unit_leader',
                permissions: adminPermissions,
            },
        ];

        const role_permissions = [];
        data.forEach((d) => {
            d.permissions.forEach((permission) => {
                const permissions = {
                    role: d.role,
                    permission,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    createdBy: 1,
                    updatedBy: 1,
                };
                role_permissions.push(permissions);
            });
        });
        return queryInterface.bulkInsert('permissions', role_permissions, {});
    },

    down: (queryInterface) =>
        queryInterface.bulkDelete('permissions', null, {}),
};

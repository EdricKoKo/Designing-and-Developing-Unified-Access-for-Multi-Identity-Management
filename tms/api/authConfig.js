const passportConfig = {
    credentials: {
        tenantName: 'logicticscloudai.onmicrosoft.com',
        clientID: '9cb77742-32e2-429d-9505-259f90a5c565',
    },
    policies: {
        policyName: 'B2C_1_SIGNINUP',
    },
    metadata: {
        b2cDomain: 'logicticscloudai.b2clogin.com',
        authority: 'login.microsoftonline.com',
        discovery: '.well-known/openid-configuration',
        version: 'v2.0',
    },
    settings: {
        isB2C: true,
        validateIssuer: false,
        passReqToCallback: true,
        loggingLevel: 'info',
        loggingNoPII: false,
    },
    protectedRoutes: {
        todolist: {
            endpoint: '/api/todolist',
            delegatedPermissions: {
                read: ['ToDoList.Read', 'ToDoList.ReadWrite'],
                write: ['ToDoList.ReadWrite'],
            },
        },
    },
};

module.exports = passportConfig;


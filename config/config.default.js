'use strict';

module.exports = appInfo => {
    const config = exports = {};

    /*关闭csrf验证*/
    exports.security = {
        csrf: false
    };

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1531119372900_3227';

    // add your config here
    config.middleware = [];

    /*MySQL 插件配置*/
    exports.mysql = {
        // 单数据库信息配置
        client: {
            // host
            host: '47.99.37.24',
            // 端口号
            port: '3306',
            // 用户名
            user: 'root',
            // 密码
            password: '123456',
            // 数据库名
            database: 'lvya',
        }
    };

    exports.httpcode = {
        ok: 200,
        noFound: 404,
        noAllow: 415,
        error: 500
    };
    exports.tips = {
        validateError: `参数不完整!`,
        loginError: `用户名或密码错误!`
    };
    return config;
};

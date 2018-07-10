'use strict';

const Controller = require('egg').Controller;
const createRule = {
    wcId: {type: `string`, required: true}
};


class userController extends Controller {
    async login() {
        const ctx = this.ctx;
        const httpCode = ctx.app.config.httpcode;
        const tips = ctx.app.config.tips;
        try {
            const param = ctx.request.body;

            ctx.validate(createRule);
            const response = await ctx.service.user.login(param);
            return ctx.body = {
                data: response,
                msg: null == response ? tips.loginError : ``,
                code: httpCode.ok
            };
        } catch (err) {
            return ctx.body = {
                data: null,
                msg: tips.validateError,
                code: httpCode.noAllow
            };
        }
    }
}

module.exports = userController;

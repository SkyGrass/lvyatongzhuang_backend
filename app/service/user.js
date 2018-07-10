const Service = require('egg').Service;

class userService extends Service {
    constructor(ctx) {
        super(ctx);
    }

    async login(param) {
        let query = Object.assign({
            wcId: ``
        }, param);
        const data = await this.app.mysql.get('user', query);
        return data;
    }
}

module.exports = userService;
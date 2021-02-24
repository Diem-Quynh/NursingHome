const { QueryBuilder } = require('objection');
const GetForGridTable = require('./GetForGridTable')

class ExtendQueryBuilder extends QueryBuilder {
    getForGridTable({ sorting = [], filters = [], pageSize = 50, page = 0 } = {}) {
        return GetForGridTable(this).exec({ sorting, filters, pageSize, page })
    }
}
module.exports = ExtendQueryBuilder
const { CategoryModel } = require("../models/category.model");
class CategoryService {
    static async createCategory(parent_id, category_name, status){
        return CategoryModel.create({
            parent_id,
            category_name,
            status
        }).then(data => data).catch(err => err.message)
    }
}
module.exports = { CategoryService }
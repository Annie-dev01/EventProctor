

module.exports = class DataRepo {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        const createdData = await this.model.create(data)
        return createdData
    }

    async save(instance) {
        return await instance.save()
    }

    async findOne(query, populate = "") {
        return await this.model.findOne(query).populate(populate)
    }

    async findAll(query, populate = "") {
        return await this.model.find(query).populate(populate)
    }

    async updateOne(query, update, others = {new: true}) {
        return await this.model.findOneAndUpdate(query, update, others)
    }

    async deleteOne(query) {
        return await this.model.findOneAndDelete(query)
    }
}

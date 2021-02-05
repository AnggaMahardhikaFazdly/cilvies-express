const CategoryModel = require('../model').category

module.exports = {
    retrieveAllCategory: async (req, res) => {
        try {
            const allCategory = await CategoryModel.findAll();
            res.json(allCategory);
        } catch (error) {
            res.sendStatus(500);
            console.log(error);
        }
    },
    retrieveById: async (req, res) => {
        const id = parseInt(req.params.id);
        const selectedCategory = await CategoryModel.findByPk(id);

        if (!selectedCategory) {
            res.status(404).send(`category with id ${id} was not found`);
        } else {
            res.json(selectedCategory);
        }
    },
    createCategory: async (req, res) => {
        const newCategory = {
            name: req.body.name,
        };
        await CategoryModel.create(newCategory);

        res.sendStatus(201);
    },
    updateCategory: async (req, res) => {
        const payload = req.body;

        const id = parseInt(req.params.id);
        await CategoryModel.update(payload, { where: { id: id } });

        res.json({ id, ...payload });
    },
    deleteCategory: async (req, res) => {
        const id = parseInt(req.params.id);
        await CategoryModel.destroy({ where: { id: id } });

        res.sendStatus(204);
    }
}
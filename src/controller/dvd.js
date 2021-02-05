const DvdModel = require('../model').dvd

module.exports = {
    retrieveAllDvd: async (req, res) => {
        try {
            const allDvd = await DvdModel.findAll();
            res.json(allDvd);
        } catch (error) {
            res.sendStatus(500);
            console.log(error);
        }
    },
    retrieveById: async (req, res) => {
        const id = parseInt(req.params.id);
        const selectedDvd = await DvdModel.findByPk(id);

        if (!selectedDvd) {
            res.status(404).send(`dvd with id ${id} was not found`);
        } else {
            res.json(selectedDvd);
        }
    },
    createDvd: async (req, res) => {
        const newDvd = {
            title: req.body.title,
            description: req.body.description,
            img_url: req.body.img_url,
            category: req.body.category,
            status: req.body.status,
        };
        await DvdModel.create(newDvd);

        res.sendStatus(201);
    },
    updateDvd: async (req, res) => {
        const payload = req.body;

        const id = parseInt(req.params.id);
        await DvdModel.update(payload, { where: { id: id } });

        res.json({ id, ...payload });
    },
    deleteDvd: async (req, res) => {
        const id = parseInt(req.params.id);
        await DvdModel.destroy({ where: { id: id } });

        res.sendStatus(204);
    }
}
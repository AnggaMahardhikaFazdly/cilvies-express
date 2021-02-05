module.exports = (sequelize, Sequelize) => {
    const Dvd = sequelize.define("dvd", {
        title: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.STRING,
        },
        img_url: {
            type: Sequelize.STRING,
        },
        category: {
            type: Sequelize.STRING,
        },
        status: {
            type: Sequelize.INTEGER,
        },
    });
    return Dvd;
}
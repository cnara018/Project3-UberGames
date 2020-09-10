module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define("Post", {
        trade: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gamename: {
            type: DataTypes.STRING,
            allowNull: false
        },
        platform: {
            type: DataTypes.STRING,
            allowNull: false
        },
        conditionofgame: {
            type: DataTypes.STRING,
            allowNull: false
        },
        developer: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gamedescription: {
            type: DataTypes.STRING,
            allowNull: false
        },
        genre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        esrbrating: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imageurl: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });
    Post.associate = models => {
        Post.belongsTo(models.User, {
            foreignKey: {
                allowNull: false,
                onDetele: "cascade"
   
            }
        });
    };
    return Post;
};
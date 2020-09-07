module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define("Profile", {
        displayname: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    Profile.associate = models => {
        Profile.belongsTo(models.User, {
            foreignKey: {
                allowNull: false,
                onDetele: "cascade"
            }
        });
    };
    return Profile;
};
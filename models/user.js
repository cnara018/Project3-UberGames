module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
                    type: DataTypes.STRING,
                    allowNull: false
                }
    });
    User.associate = models => {
        
        User.hasMany(models.Post, {
            onDetele: "cascade"
        });
        User.hasOne(models.Profile, {
            onDetele: "cascade"
        });
    };
    return User;
};
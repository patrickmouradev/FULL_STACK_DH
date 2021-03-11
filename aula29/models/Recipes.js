module.exports = (sequelize, DataType) => {
	const Recipes = sequelize.define(
		'Recipes', 
	{
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
			type: DataType.STRING,
		},
	email: {
			type: DataType.STRING,
		},
	message:{
			type: DataType.STRING,
		}
	},
    {
        tableName: 'recipes',
	});
	return Recipes;
};
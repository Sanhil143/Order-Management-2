const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('order_management', 'root', 'aashu@123', {
     host: 'localhost',
     dialect: 'mysql',
     logging: false  //disable :Executing (default): SELECT 1+1 AS result

})
try {
     sequelize.authenticate();
     console.log("mysql-database is connected")
}
catch (error) {
     console.error("Database is dis-connected", error);
}

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize
db.sequelize.sync({force:false})

db.customers = require('../models/customerModel')(sequelize, DataTypes)
db.orders = require('../models/orderModel')(sequelize, DataTypes)

// 1 to many relation

//one to one 
db.customers.hasOne(db.orders,{foreignKey:'customer_id'})
db.orders.belongsTo(db.customers,{foreignKey:'customer_id'})



module.exports = db
// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var Book = sequelize.define("book", {
  name: {
    type: Sequelize.STRING
  },

   email: {
    type: Sequelize.STRING
  },
 
  date: {
    type: Sequelize.STRING
  },

  phone: {
    type: Sequelize.STRING
  },
 
  address: {
    type: Sequelize.STRING
  },

  discount: {
    type: Sequelize.INTEGER
  },

  deposit: {
    type: Sequelize.INTEGER
  },

  mileage: {
    type: Sequelize.INTEGER
  },

  totalBal: {
    type: Sequelize.INTEGER
  },

  fullyPaid_Y_or_N: {
    type: Sequelize.STRING
  },

   message: {
    type: Sequelize.STRING
  },

   created_at: {
    type: Sequelize.DATE
  }
},
  {
  timestamps: false
});

// Syncs with DB
Book.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Book;


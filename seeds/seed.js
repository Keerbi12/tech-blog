const sequelize = require('../config/connection');
const { User, Blog, Comment } = require('../models');

const userData = require('./userData.json');
const blogData = require('./blogData.json');


const seedDatabase = async () => {
    await sequelize.sync({ force: true });
  
    const users = await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });

    const posts = await Blog.bulkCreate(blogData, {
      returning: true,
    });

    const comments = await Comment.bulkCreate(commentData, {
      returning: true,
    });
  
    process.exit(0);
  };
  
  seedDatabase();
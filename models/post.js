const db = require('./db')

const Post = db.sequelize.define('formularios', {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    }
})

// Post.sync({force: true})

module.exports = Post
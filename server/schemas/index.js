// this will collect "resolvers.js" and "typeDefs.js" and export them

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

module.exports = { typeDefs, resolvers };
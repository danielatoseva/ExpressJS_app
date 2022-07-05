const operationsContext = require("../models/dbcontext")
const Operation = operationsContext.operations;
const User = operationsContext.users;

exports.create = (operation) => {
    console.log(operation);
    Operation.create(operation);
}

exports.getAll = async () => {
    return await Operation.findAll();
    //предаване на promise през слоеве
}

exports.getAllWithUsers = async () => {
    return await Operation.findAll({
        include: {
            model: User,
            as: 'user',
            required: true
        }
    });
}


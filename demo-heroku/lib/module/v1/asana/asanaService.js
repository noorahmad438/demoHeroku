"use strict";

const asanaDao = require('./asanaDao');

//========================== Load Modules End ==============================================

function signUp(userInfo) {
    return asanaDao.signUp(userInfo);
}

function login(loginInfo) {
    let query = {};
    query.email = loginInfo.email;
    query.password = loginInfo.password
    return asanaDao.findByKey(query)
        .then(function(result) {
            if (result) {
                return result;
            } else {
                return false;
            }
        })
}

function createBoard(params) {
    return asanaDao.createBoard(params)
}

function createTask(params) {
    return asanaDao.createTask(params)
}

function isEmailExist(asanaInfo) {
    return asanaDao.findByKey({ email: asanaInfo.email })
        .then(function(result) {
            if (result) {
                return result;
            } else {
                return false;
            }
        })
}

function getList(params) {
    return asanaDao.getList(params)
}



//========================== Export Module Start ==============================

module.exports = {
    isEmailExist,
    signUp,
    login,
    createBoard,
    createTask,
    getList
};

//========================== Export Module End ===============================
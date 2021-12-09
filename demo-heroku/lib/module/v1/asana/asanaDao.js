"use strict";

//========================== Load Modules Start =======================

var mongoose = require("mongoose");
let BaseDao = require('../../../dao/baseDao');

const Asana = require('./asanaModel');
const asanaDao = new BaseDao(Asana);

//========================== Load Modules End ==============================================

function signUp(userInfo) {
    return asanaDao.findOne({ email: userInfo.email })
        .then(function(result) {
            if (!result) {
                var signUp = new asana(userInfo);
                return asanaDao.save(signUp);
            } else return { message: 'user already registered' };
        })

}

function login(loginInfo) {
    return asanaDao.findOne({ email: loginInfo.email, password: loginInfo.password })
        .then(function(result) {
            if (result) {
                return result;
            } else return { message: 'user not found' };
        })

}

function createBoard(params) {
    return asanaDao.save(params);
}

function createTask(params) {
    return asanaDao.save(params);
}


function getList(params) {
    let query = {};
    if (params.boardId) query.boardId = params.boardId;
    if (params.userId) query.userId = params.userId;
    return asanaDao.find(query);
}


//========================== Export Module Start ==============================

module.exports = {
    signUp,
    login,
    createBoard,
    createTask,
    getList

};

//========================== Export Module End ===============================
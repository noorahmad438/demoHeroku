/**
 * This file will have user request and response object mappings.
 */

"use strict";


function loginMapping(user) {
    var respObj = {
        "message": "Successfully Login",
        "accessToken": user.jwt,
        "userProfile": user
    }
    return respObj;
}

function signUpMapping(user) {
    var respObj = {
        "message": "New user added successfully",
        "userProfile": user
    }
    return respObj;
}


function createBoardMapping(user) {
    var respObj = {
        "message": "New board added successfully",
        "userProfile": user
    }
    return respObj;
}

function createTaskMapping(user) {
    var respObj = {
        "message": "New task added successfully",
        "userProfile": user
    }
    return respObj;
}

function listMapping(user) {
    var respObj = {
        "message": "List:",
        "userProfile": user
    }
    return respObj;
}



function logoutMapping() {
    var respObj = {
        "message": "user logged Out successfully",
    }
    return respObj;
}



module.exports = {
    loginMapping,
    signUpMapping,
    logoutMapping,
    createBoardMapping,
    createTaskMapping,
    listMapping,
}
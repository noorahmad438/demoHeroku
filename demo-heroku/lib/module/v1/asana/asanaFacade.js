"use strict";

const asanaService = require("./asanaService");
const asanaMapper = require("./asanaMapper");


//========================== Load Modules End ==============================================

function signUp(params) {
    return asanaService.signUp(params)
        .then(function(asana) {
            return asanaMapper.signUpMapping({ asana: asana });
        });
}

function login(params) {
    return asanaService.isEmailExist(params)
        .bind({})
        .then(function(isExist) {
            this.isExist = isExist;
            if (isExist) {
                return asanaService.login(params);
            } else {
                throw customExceptions.userNotFound();
            }
        })
        .then(function(response) {
            if (this.isExist) {
                if (response) {
                    if (response.status == 1) {
                        this.user = response;
                        this.user.isasana = 1;
                        var tokenObj = buildasanaTokenGenObj(response);
                        return jwtHandler.genasanaToken(tokenObj)
                    } else {
                        throw customExceptions.inactiveAccount();
                    }
                } else {
                    throw customExceptions.incorrectPass();
                }
            }
        })
        .then(function(response) {
            if (this.isExist) {
                let jwt = response;
                let redisObj = appUtils.createRedisValueObject(JSON.stringify({ asana: jwt }));
                redisClient.setValue(response, JSON.stringify(redisObj));
                return asanaMapper.loginMapping({
                    asana: this.user,
                    jwt: jwt
                });
            }
        })

}


function logout(accessToken) {
    return asanaService.delToken(accessToken)
        .then((result) => {
            return asanaMapper.logoutMapping();
        })
}

function getList(params) {
    return asanaService.getList(params)
}




function buildasanaTokenGenObj(asana) {
    var asanaObj = {};
    asanaObj.userId = asana._id;
    asanaObj.emailId = asana.email;
    return asanaObj;
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
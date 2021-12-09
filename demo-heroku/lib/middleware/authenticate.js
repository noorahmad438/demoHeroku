"use strict";

//========================== Load Modules Start ===========================
var Promise = require("bluebird");
const _ = require('lodash')
    //========================== Load internal Module =========================
var exceptions = require("../customException");
var redisClient = require('../redisClient/init');


//========================== Load Modules End =============================

var __verifyTok = function(acsTokn) {
    return redisClient.getValueAdmin(acsTokn)
        .then(function(tokenPayload) {
            return tokenPayload;
        })
        .catch(function(err) {
            throw err
        })
};

var autntctTkn = function(req, res, next) {

    var acsToken = req.get('accessToken');
    var isDashborad = req.get('isDashborad');
    __verifyTok(acsToken)
        .bind({})
        .then(function(tokenPayload) {
            if (!tokenPayload) {
                throw exceptions.ExpiredToken();

            }
            //req.body.userId = tokenPayload.userId;
            return tokenPayload;
        })
        .then(function(paylod) {
            if (paylod.responseMessage) throw new exceptions.sessionExpired();
            else next()
        })
        .catch(function(err) {
            next(err)
        })
}

//========================== Export Module Start ===========================

module.exports = {
    autntctTkn

};

//========================== Export Module End ===========================
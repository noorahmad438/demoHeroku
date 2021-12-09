var Promise = require('bluebird');
var redis = require('redis');

var client;
var _ = require("lodash");
const appConstants = require("../constant");
const config = require("../config");
var logger = require("../logger");
const customException = require('../customException');

var init = function() {
    client = redis.createClient(config.cfg.redis.port, config.cfg.redis.server)
    return client.onAsync("error")
        .then(function(err) {
            logger.info({ error: err });
        })
};

exports.setValue = function(key, value) {
    return client.setAsync(key, value)
        .then(function(resp) {
            if (resp) {
                logger.info({ "value": resp }, "_redisSetValue");
                return resp;
            }
        })
        .catch(function(err) {
            return err;
        })
};

exports.getValueAdmin = function(key) {
    client = redis.createClient();
    return client.getAsync('accessToken')
        .then(function(response) {
            response = JSON.parse(response);
            if (key == response.admin) return response;
            else throw customException.sessionExpired();
        }).catch(function(error) {
            return error;
        });
}

exports.getValue = function(key) {

    return client.getAsync(key)
        .then(function(res) {
            return res;
        })
        .catch(function(err) {
            return err;
        })
};

// exports.expire = function (key,) {
//     return client.expireAsync(key, 0).then(function (response) {
//        return response;
//     })
//        // logger.info({ expire: response }, '_expireToken');
// };

exports.getValueToken = async function(key) {
    let data = await client.getAsync("accessToken");
    if (data == JSON.stringify(key))
        return data;
    else
        throw customException.invalidToken()
}

exports.expire = function(key, ) {
    return client.expireAsync(key, 0).then(function(response) {
        return response;
        // logger.info({ expire: response }, '_expireToken');
    })
};

exports.delValue = function(key) {
    return client.delAsync(key)
        .then(function(resp) {
            return resp;
        })
        .catch(function(err) {
            throw err;
        })
}

init();
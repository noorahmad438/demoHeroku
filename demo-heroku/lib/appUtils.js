"use strict";

//========================== Load Modules Start ===========================

//========================== Load External Module =========================

var sha256 = require('sha256');
var bcrypt = require('bcrypt');
var randomstring = require("randomstring");
const redis = require('redis');
const client = redis.createClient();
//========================== Load Modules End =============================

//========================== Export Module Start ===========================
const createRedisValueObject = (user) => {
    client.set('accessToken', user);
    return client.get('accessToken');
}

/**
 * return user home
 * @returns {*}
 */
function getUserHome() {
    return process.env.HOME || process.env.HOMEPATH;
}

function getNodeEnv() {
    return process.env.NODE_ENV;
}

/**
 * returns if email is valid or not
 * @returns {boolean}
 */
function isValidEmail(email) {
    var pattern = /(([a-zA-Z0-9\-?\.?]+)@(([a-zA-Z0-9\-_]+\.)+)([a-z]{2,3}))+$/;
    return new RegExp(pattern).test(email);
}

/**
 * returns if zipCode is valid or not (for US only)
 * @returns {boolean}
 */
function isValidZipCode(zipcode) {
    var pattern = /^\d{5}(-\d{4})?$/;
    return new RegExp(pattern).test(zipcode);
}
/**
 * returns if zipCode is valid or not (for US only)
 * @returns {boolean}
 */
function createHashSHA256(pass) {
    return sha256(pass)
}

/**
 * returns random number for password
 * @returns {string}
 */
var getRandomPassword = function() {
    return getSHA256(Math.floor((Math.random() * 1000000000000) + 1));
};

var getSHA256 = function(val) {
    return sha256(val + "password");
};

var encryptHashPassword = function(password, salt) {
    return bcrypt.hashSync(password, salt);
}

// var isValidSize = function(sizeOfProduct) {
//     var pattern = /^[0-9]*ml$/;
//     return new RegExp(pattern).test(sizeOfProduct);

// }

// var isValidcostToClient = function(costToClient) {
//     var pattern = /^Rs[0-9]*$/;
//     return new RegExp(pattern).test(costToClient);
// }

// var isValidRRP = function(rrp) {
//     var pattern = /^Rs[0-9]*$/;
//     return new RegExp(pattern).test(rrp);
// }

// var isValidCommission = function(commission) {
//     var pattern = /^Rs[0-9]*$/;
//     return new RegExp(pattern).test(commission);
// }

var isValidObjectId = function(ProductId) {
    var pattern = /^[0-9a-fA-F]{24}$/;
    return new RegExp(pattern).test(ProductId);
}

var isValidImageFile = function (imageFile){
            var pattern =/(\.(jpg|png|gif|bmp))$/;
            return new RegExp(pattern).test(imageFile);
}
var generateSaltAndHashForPassword = function(password) {
    var encryptPassword = { salt: "", hash: "" };
    encryptPassword['salt'] = bcrypt.genSaltSync(10);
    encryptPassword['hash'] = bcrypt.hashSync(password, encryptPassword['salt']);
    return encryptPassword;
}


/**
 *
 * @param string
 * @returns {boolean}
 */
var stringToBoolean = function(string) {
    switch (string.toLowerCase().trim()) {
        case "true":
        case "yes":
        case "1":
            return true;
        case "false":
        case "no":
        case "0":
        case null:
            return false;
        default:
            return Boolean(string);
    }
}


/**
 *
 * @returns {string}
 * get random 6 digit number
 * FIX ME: remove hard codeing
 * @private
 */
function getRandomOtp() {
    //Generate Random Number
    return randomstring.generate({
        charset: 'numeric',
        length: 6
    });
}

function isValidPhone(phone, verifyCountryCode) {
    var reExp = verifyCountryCode ? /^\+\d{6,16}$/ : /^\d{6,16}$/;
    return reExp.test(phone)
}


function deleteRedisValueObject(accessToken) {

    let result = client.get('accessToken', function(err, reply) {
        let temp = JSON.parse(reply);
        if (temp) {
            if (temp.admin == accessToken) {
                return client.del('accessToken');
            }
        } else return client.del('accessToken');
        return result;
    });
}

function isValidObjectId(id) {

    if (ObjectId.isValid(id)) {
        if ((String)(new ObjectId(id)) === id)
            return true;
        return false;
    }
    return false;
}

//========================== Export Module Start ===========================

module.exports = {
    getUserHome,
    getNodeEnv,
    isValidEmail,
    isValidZipCode,
    createHashSHA256,
    getRandomPassword,
    encryptHashPassword,
    generateSaltAndHashForPassword,
    stringToBoolean,
    getRandomOtp,
    isValidPhone,
   // isValidVideo,
    isValidImageFile,
    // isValidVideo,
    createRedisValueObject,
    deleteRedisValueObject,
    isValidObjectId
};

//========================== Export Module End===========================
//========================== Load Modules Start ===========================

//========================== Load Internal Module =========================

// Load exceptions
var Exception = require("./model/Exception");
var constants = require("./constant");

//========================== Load Modules End =============================

//========================== Export Module Start ===========================

module.exports = {
    intrnlSrvrErr: function(err) {
        return new Exception(1, constants.MESSAGES.INTERNAL_SERVER_ERROR, err);
    },
    unauthorizeAccess: function(err) {
        return new Exception(2, constants.MESSAGES.UNAUTHORIZED_ACCESS_EXCEPTION, err)
    },
    alreadyRegistered: function(err) {
        return new Exception(3, constants.MESSAGES.UserAlrdyRegistered, err)
    },
    alreadyRegistered: function(err) {
        return new Exception(4, constants.MESSAGES.USER_ALREADY_REGISTERED, err)
    },
    alreadyFavrouites: function(err) {
        return new Exception(5, constants.MESSAGES.USER_alreadyFavrouites, err)
    },
    invalidEmail: function() {
        return new Exception(6, constants.MESSAGES.INVALID_EMAIL)
    },
    getCustomErrorException: function(errMsg, error) {
        return new Exception(7, errMsg, error);
    },
    invalidToken: function(err) {
        return new Exception(8, constants.MESSAGES.invalidToken, err)
    },
    ExpiredToken: function(err) {
        return new Exception(9, constants.MESSAGES.TOKEN_EXPIRED, err)
    },
    invalidInput: function(err) {
        return new Exception(10, constants.MESSAGES.invalidInput, err)
    },
    Invalid_Id: function(err) {
        return new Exception(11, constants.MESSAGES.Invalid_Id, err)
    },
    ValidPageNo: function(err) {
        return new Exception(12, constants.MESSAGES.ValidPageNo, err)
    },
    User_Verify: function(err) {
        return new Exception(13, constants.MESSAGES.User_Verify, err)
    },
    passdiff: function(err) {
        return new Exception(14, constants.MESSAGES.passdiff, err)
    },
    matchPassword: function(err) {
        return new Exception(15, constants.MESSAGES.PASSWORD_DO_NOT_MATCH, err)
    },
    incorrectPass: function(err) {
        return new Exception(16, constants.MESSAGES.INCORRECT_PASS, err)
    },
    sessionExpired: function(err) {
        return new Exception(17, constants.MESSAGES.TOKEN_EXPIRED, err)
    },
    userAlreadyRegistered: function(err) {
        return new Exception(18, constants.MESSAGES.USER_ALREADY_REGISTERED, err)
    },
    userNotFound: function(err) {
        return new Exception(19, constants.MESSAGES.USER_NOT_FOUND, err)
    },
    clientAlreadyRegistered: function(err) {
        return new Exception(20, constants.MESSAGES.CLIENT_ALREADY_REGISTERED, err)
    },
    clientNotFound: function(err) {
        return new Exception(21, constants.MESSAGES.CLIENT_NOT_FOUND, err)
    },
    alreadyRegistered: function(err) {
        return new Exception(3, constants.MESSAGES.USER_ALREADY_REGISTERED, err)
    },
    alreadyFavrouites: function(err) {
        return new Exception(3, constants.MESSAGES.USER_alreadyFavrouites, err)
    },
    invalidEmail: function() {
        return new Exception(4, constants.MESSAGES.INVALID_EMAIL)
    },
    getCustomErrorException: function(errMsg, error) {
        return new Exception(5, errMsg, error);
    },
    invalidToken: function(err) {
        return new Exception(6, constants.MESSAGES.invalidToken, err)
    },
    User_Verify: function(err) {
        return new Exception(6, constants.MESSAGES.User_Verify, err)
    },
    incorrectPass: function(err) {
        return new Exception(6, constants.MESSAGES.INCORRECT_PASS, err)
    },
    userAlreadyRegistered: function(err) {
        return new Exception(7, constants.MESSAGES.USER_ALREADY_REGISTERED, err)
    },
    userNotFound: function(err) {
        return new Exception(8, constants.MESSAGES.USER_NOT_FOUND, err)
    },
    clientAlreadyRegistered: function(err) {
        return new Exception(9, constants.MESSAGES.CLIENT_ALREADY_REGISTERED, err)
    },
    clientNotFound: function(err) {
        return new Exception(10, constants.MESSAGES.CLIENT_NOT_FOUND, err)
    },
    sessionExpired: function(err) {
        return new Exception(11, constants.MESSAGES.SESSION_EXPIRED, err)
    },
    stockAlreadyAvailable: function(err) {
        return new Exception(12, constants.MESSAGES.STOCK_AVAILABLE, err)
    },
    orderNotFound: function(err) {
        return new Exception(13, constants.MESSAGES.ORDER_NOT_FOUND, err)
    },
    ProductNotFound: function(err) {
        return new Exception(22, constants.MESSAGES.PRODUCT_NOT_EXIST, err)
    },
    emailExists: function(err) {
        return new Exception(11, constants.MESSAGES.EMAIL_EXISTS, err)
    },
    addressIdNotExists: function(err) {
        return new Exception(11, constants.MESSAGES.ADDRESS_NOT_EXISTS, err)
    },
    productExists: function(err) {
        return new Exception(11, constants.MESSAGES.PRODUCT_EXISTS, err)
    },
};

//========================== Export Module   End ===========================
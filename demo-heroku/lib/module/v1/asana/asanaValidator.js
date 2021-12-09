var _ = require("lodash");

var appUtils = require("../../../appUtils");
var constant = require("../../../constant");

var exceptions = require("../../../customException");

//========================== Load Modules End =============================

//========================== Export Module Start ===========================

var validateAdminLogin = function(req, res, next) {
    let { email, password } = req.body;
    var errors = [];
    email = _.toLower(email);

    if (_.isEmpty(email)) {
        errors.push({ fieldName: "email", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "email") });
    }
    if (!appUtils.isValidEmail(email)) {
        errors.push({ fieldName: "email", message: constant.MESSAGES.INVALID_EMAIL });
    }
    if (_.isEmpty(password)) {
        errors.push({ fieldName: "password", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "email") });
    }
    if (errors && errors.length > 0) {
        validationError(errors, next);
    }
    next();
};

var validateAdminCreate = function(req, res, next) {
    let { name, email, password } = req.body;
    var errors = [];
    email = _.toLower(email);

    if (_.isEmpty(name)) {
        errors.push({ fieldName: "name", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "name") });
    }
    if (_.isEmpty(email)) {
        errors.push({ fieldName: "email", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "email") });
    }
    if (!appUtils.isValidEmail(email)) {
        errors.push({ fieldName: "email", message: constant.MESSAGES.INVALID_EMAIL });
    }
    if (_.isEmpty(password)) {
        errors.push({ fieldName: "password", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "email") });
    }
    if (errors && errors.length > 0) {
        validationError(errors, next);
    }
    next();
};

var validateEmail = function(req, res, next) {
    let { email } = req.query;
    var errors = [];

    email = _.toLower(email);
    if (_.isEmpty(email)) {
        errors.push({ fieldName: "email", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "email") });
    }
    if (!appUtils.isValidEmail(email)) {
        errors.push({ fieldName: "email", message: constant.MESSAGES.INVALID_EMAIL });
    }
    if (errors && errors.length > 0) {
        validationError(errors, next);
    }
    next();
}

var validatePage = function(req, res, next) {
    if (errors && errors.length > 0) {
        validationError(errors, next);
    }
    next();
}

var validateBlockUser = function(req, res, next) {

    var { userId } = req.body;
    var errors = [];
    if (_.isEmpty(userId)) {
        errors.push({ fieldName: "userId", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "userId") });
    }
    if (errors && errors.length > 0) {
        validationError(errors, next);
    }
    next();
};

var validateGetUserPageList = function(req, res, next) {

    var { pageNo, count } = req.params;
    var errors = [];

    if (pageNo) {
        pageNo = req.body.pageNo = parseInt(pageNo);
    }

    if (count) {
        count = req.body.count = parseInt(count);
    }

    if (errors && errors.length > 0) {
        validationError(errors, next);
    }
    next();
};

var validateAddUser = function(req, res, next) {

    var { FirstName, LastName, email, BusinessName, Password } = req.body;
    var {} = req.headers;
    var errors = [];

    if (_.isEmpty(FirstName)) {

        errors.push({ fieldName: "FirstName", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "FirstName") });
    }

    if (_.isEmpty(LastName)) {
        errors.push({ fieldName: "LastName", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "LastName") });
    }

    if (_.isEmpty(email)) {
        errors.push({ fieldName: "email", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "email") });
    } else if (!appUtils.isValidEmail(email)) {
        errors.push({ fieldName: "email", message: constant.MESSAGES.invalidEmail });
    }

    if (_.isEmpty(Password)) {
        errors.push({ fieldName: "Password", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "Password") });
    }

    if (_.isEmpty(BusinessName)) {
        errors.push({ fieldName: "BusinessName", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "BusinessName") });
    }

    if (errors && errors.length > 0) {
        validationError(errors, next);
    }

    next();
}

var validateAddClient = function(req, res, next) {
    var { name, email, password } = req.body;
    var {} = req.headers;
    var errors = [];

    if (_.isEmpty(name)) {
        errors.push({ fieldName: "name", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "name") });
    }
    if (_.isEmpty(email)) {
        errors.push({ fieldName: "email", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "email") });
    } else if (!appUtils.isValidEmail(email)) {
        errors.push({ fieldName: "email", message: constant.MESSAGES.invalidEmail });
    }
    if (_.isEmpty(password)) {
        errors.push({ fieldName: "password", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "password") });
    }
    if (errors && errors.length > 0) {
        validationError(errors, next);
    }
    next();
}


var verification = (req, res, next) => {
    var { accessToken } = req.body;
    var errors = [];
    if (_.isEmpty(accessToken)) {
        errors.push({ fieldName: "accessToken", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "accessToken") });
    }
    if (errors && errors.length > 0) {
        validationError(errors, next);
    }
    next()

}

var resetPass = (req, res, next) => {
    var errors = [];
    var { email, newPassword, ReEnterNewPassword } = req.body;
    if (newPassword != ReEnterNewPassword) {
        errors.push({ fieldName: "newPassword", message: constant.MESSAGES.PASSWORD_DO_NOT_MATCH });
    }
    if (_.isEmpty(email)) {
        errors.push({ fieldName: "email", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "email") });
    } else if (!appUtils.isValidEmail(email)) {
        errors.push({ fieldName: "email", message: constant.MESSAGES.invalidEmail });
    }
    if (_.isEmpty(newPassword)) {
        errors.push({ fieldName: "newPassword", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "newPassword") });
    }
    if (_.isEmpty(ReEnterNewPassword)) {
        errors.push({ fieldName: "ReEnterNewPassword", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "ReEnterNewPassword") });
    }
    if (errors && errors.length > 0) {
        validationError(errors, next);
    }
    next()

}

var validateStocks = (req, res, next) => {
    var errors = [];
    var { ProductId, ProductName, costToclient, RPP, YourCommission } = req.body;
    if (_.isEmpty(ProductId)) {
        errors.push({ fieldName: "ProductId", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "ProductId") });
    }
    if (_.isEmpty(ProductName)) {
        errors.push({ fieldName: "ProductName", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "ProductName") });
    }
    if (_.isEmpty(costToclient)) {
        errors.push({ fieldName: "costToclient", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "costToclient") });
    }
    if (_.isEmpty(RPP)) {
        errors.push({ fieldName: "RPP", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "RPP") });
    }
    if (_.isEmpty(YourCommission)) {
        errors.push({ fieldName: "YourCommission", message: constant.MESSAGES.KEY_CANT_EMPTY.replace("{{key}}", "YourCommission") });
    }
    if (errors && errors.length > 0) {
        validationError(errors, next);
    }
    next()
}

var validationError = function(errors, next) {
    if (errors && errors.length > 0) {
        return next(exceptions.getCustomErrorException(constant.MESSAGES.VALIDATION_ERROR, errors))
    }
    next();
}

module.exports = {
    validateAdminLogin,
    validateGetUserPageList,
    validateBlockUser,
    validateEmail,
    validateAdminCreate,
    validateAddUser,
    validateAddClient,
    validatePage,
    verification,
    resetPass,
    validateStocks
};
//========================== Export module end ==================================
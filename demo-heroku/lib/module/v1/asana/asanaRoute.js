const asanaRouter = require("express").Router();


const middleware = require("../../../middleware");

const constants = require("../../../constant");

const asanaValidator = require('./asanaValidator');
const asanaFacade = require("./asanaFacade");
const uploadToS3 = require('../../../service/uploadToS3');


asanaRouter.route("/signup")
    .post([asanaValidator.validateAsanaCreate], function(req, res) {
        let { email, password } = req.body;
        //password = appUtils.createHashSHA256(password);
        asanaFacade.signUp({
                email,
                password
            })
            .then(function(result) {
                resHndlr.sendSuccess(res, result, req);
            })
            .catch(function(err) {
                resHndlr.sendError(res, err, req);
            })
    });

asanaRouter.route("/login")
    .post(middleware.authenticate.autntctTkn, [asanaValidator.validateAsanaLogin], function(req, res) {
        let { email, password } = req.body;
        asanaFacade.login({ email, password })
            .then(function(result) {
                resHndlr.sendSuccess(res, result, req);
            })
            .catch(function(err) {
                resHndlr.sendError(res, err, req);
            })
    });

asanaRouter.route("/logout")
    .get([], function(req, res) {
        let accessToken = req.headers.accesstoken;
        asanaFacade.logout({
            accessToken
        }).then(function(result) {
            resHndlr.sendSuccess(res, result, req);
        }).catch(function(err) {
            resHndlr.sendError(res, err, req);
        })
    });

asanaRouter.route("/createBoard")
    .post(middleware.authenticate.autntctTkn, [], function(req, res) {
        let { boardName, color } = req.body;
        asanaFacade.createBoard({
                boardName,
                color
            })
            .then(function(result) {
                resHndlr.sendSuccess(res, result, req);
            })
            .catch(function(err) {
                resHndlr.sendError(res, err, req);
            })
    });

asanaRouter.route("/listBoards")
    .get(middleware.authenticate.autntctTkn, [], function(req, res) {
        let { userId } = req.query
        return asanaFacade.getList({
                userId
            })
            .then(function(result) {
                resHndlr.sendSuccess(res, result, req);
            }).catch(function(err) {
                resHndlr.sendError(res, err, req);
            })
    });

asanaRouter.route("/createTask")
    .post(middleware.authenticate.autntctTkn, [], function(req, res) {
        let { boardId, taskName, currentStatus } = req.body;
        asanaFacade.createTask({
                boardId,
                taskName,
                currentStatus
            })
            .then(function(result) {
                resHndlr.sendSuccess(res, result, req);
            })
            .catch(function(err) {
                resHndlr.sendError(res, err, req);
            })
    });

asanaRouter.route("/listTasks")
    .get(middleware.authenticate.autntctTkn, [], function(req, res) {
        let { boardId } = req.query
        return asanaFacade.getList({
                boardId
            })
            .then(function(result) {
                resHndlr.sendSuccess(res, result, req);
            }).catch(function(err) {
                resHndlr.sendError(res, err, req);
            })
    });


module.exports = asanaRouter
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpStatus = require("http-status");
var UsersController = (function () {
    function UsersController(Users) {
        this.Users = Users;
    }
    UsersController.prototype.defaultResponse = function (data, statusCode) {
        if (statusCode === void 0) { statusCode = HttpStatus.OK; }
        return { data: data, statusCode: statusCode };
    };
    UsersController.prototype.errorResponse = function (message, statusCode) {
        if (statusCode === void 0) { statusCode = HttpStatus.BAD_REQUEST; }
        return this.defaultResponse({ error: message }, statusCode);
    };
    UsersController.prototype.getAll = function () {
        var _this = this;
        return this.Users.findAll({})
            .then(function (result) { return _this.defaultResponse(result); })
            .catch(function (error) { return _this.errorResponse(error.message); });
    };
    UsersController.prototype.getById = function (id) {
        var _this = this;
        return this.Users.findOne({ where: id })
            .then(function (result) { return _this.defaultResponse(result); })
            .catch(function (error) { return _this.errorResponse(error.message); });
    };
    UsersController.prototype.create = function (data) {
        var _this = this;
        return this.Users.create(data)
            .then(function (result) { return _this.defaultResponse(result, HttpStatus.CREATED); })
            .catch(function (error) { return _this.errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY); });
    };
    UsersController.prototype.update = function (data, id) {
        var _this = this;
        return this.Users.update(data, { where: id })
            .then(function (result) { return _this.defaultResponse(result); })
            .catch(function (error) { return _this.errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY); });
    };
    UsersController.prototype.delete = function (id) {
        var _this = this;
        return this.Users.destroy({ where: id })
            .then(function (result) { return _this.defaultResponse(result, HttpStatus.NO_CONTENT); })
            .catch(function (error) { return _this.errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY); });
    };
    return UsersController;
}());
exports.default = UsersController;
//# sourceMappingURL=users.js.map
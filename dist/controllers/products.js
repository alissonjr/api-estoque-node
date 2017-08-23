"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpStatus = require("http-status");
var ProductsController = (function () {
    function ProductsController(Products) {
        this.Products = Products;
    }
    ProductsController.prototype.defaultResponse = function (data, statusCode) {
        if (statusCode === void 0) { statusCode = HttpStatus.OK; }
        return { data: data, statusCode: statusCode };
    };
    ProductsController.prototype.errorResponse = function (message, statusCode) {
        if (statusCode === void 0) { statusCode = HttpStatus.BAD_REQUEST; }
        return this.defaultResponse({ error: message }, statusCode);
    };
    ProductsController.prototype.getAll = function () {
        var _this = this;
        return this.Products.findAll({})
            .then(function (result) { return _this.defaultResponse(result); })
            .catch(function (error) { return _this.errorResponse(error.message); });
    };
    ProductsController.prototype.getById = function (id) {
        var _this = this;
        return this.Products.findOne({ where: id })
            .then(function (result) { return _this.defaultResponse(result); })
            .catch(function (error) { return _this.errorResponse(error.message); });
    };
    ProductsController.prototype.create = function (data) {
        var _this = this;
        return this.Products.create(data)
            .then(function (result) { return _this.defaultResponse(result, HttpStatus.CREATED); })
            .catch(function (error) { return _this.errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY); });
    };
    ProductsController.prototype.update = function (data, id) {
        var _this = this;
        return this.Products.update(data, { where: id })
            .then(function (result) { return _this.defaultResponse(result); })
            .catch(function (error) { return _this.errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY); });
    };
    ProductsController.prototype.delete = function (id) {
        var _this = this;
        return this.Products.destroy({ where: id })
            .then(function (result) { return _this.defaultResponse(result, HttpStatus.NO_CONTENT); })
            .catch(function (error) { return _this.errorResponse(error.message, HttpStatus.UNPROCESSABLE_ENTITY); });
    };
    return ProductsController;
}());
exports.default = ProductsController;
//# sourceMappingURL=products.js.map
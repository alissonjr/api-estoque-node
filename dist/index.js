"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
app_1.default.listen(app_1.default.get('port'), function () {
    console.log("app is running on port " + app_1.default.get('port'));
});
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lambdaHandler = void 0;
function jsonResponse(obj, statusCode) {
    return {
        statusCode,
        body: JSON.stringify(obj),
        headers: {
            'content-type': 'application/json',
        }
    };
}
exports.lambdaHandler = async (event) => {
    return jsonResponse(event, 200);
};
//# sourceMappingURL=app.js.map
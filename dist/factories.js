"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var overrideDefaultValues = function (defaultRecord, updatedRecord) {
    return Object.keys(defaultRecord).reduce(function (accumulator, key) {
        var _a;
        return (__assign({}, accumulator, (_a = {}, _a[key] = updatedRecord[key] || defaultRecord[key], _a)));
    }, {});
};
exports.customerActivityFactory = function (values) {
    var defaultValues = {
        session_id: "testsession",
        activity_type: "PAGE_VIEW",
        customer_id: null,
        order_id: null,
        subscription_id: null,
        product_id: null,
        product_variant_id: null,
        status: "ok",
        error_message: null,
        path: null,
        referring_url: null,
        affiliate: null,
        utm_source: null,
        utm_medium: null,
        utm_term: null,
        utm_content: null,
        utm_campaign: null,
        context: null
    };
    return overrideDefaultValues(defaultValues, values);
};
//# sourceMappingURL=factories.js.map
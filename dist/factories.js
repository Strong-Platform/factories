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
exports.customer = function (values) {
    return overrideDefaultValues({
        id: null,
        email: "test@test.com",
        password: null,
        first_name: "First",
        last_name: "Last",
        created: new Date(),
        deleted: null,
        created_by: null,
        last_referring_url: null,
        last_referring_url_date: null,
        last_affiliate: null,
        last_affiliate_date: null,
        last_utm_source: null,
        last_utm_source_date: null,
        last_utm_medium: null,
        last_utm_medium_date: null,
        last_utm_term: null,
        last_utm_term_date: null,
        last_utm_content: null,
        last_utm_content_date: null,
        last_utm_campaign: null,
        last_utm_campaign_date: null
    }, values);
};
exports.customerActivityFactory = function (values) {
    return overrideDefaultValues({
        id: null,
        created_by: null,
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
    }, values);
};
//# sourceMappingURL=factories.js.map
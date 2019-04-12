"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customer = function (values) {
    return Object.assign({}, {
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
    return Object.assign({}, {
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
exports.apiSessionFactory = function (values) {
    return Object.assign({}, {
        userId: null,
        email: null
    }, values);
};
exports.userFactory = function (values) {
    return Object.assign({}, {
        id: null,
        email: null,
        password: null,
        first_name: "first",
        last_name: "last",
        email_verified: null,
        created: new Date(),
        modified: new Date()
    }, values);
};
exports.productFactory = function (values) {
    return Object.assign({}, {
        id: null,
        name: "Product",
        slug: "product",
        description: "a product",
        images: [],
        shipping_origin_id: null,
        shipping_calculation_type: "none",
        shipping_calculation_flat_rate_rule_id: null,
        created: new Date(),
        deleted: null,
        created_by: null
    }, values);
};
exports.productVariantFactory = function (values) {
    return Object.assign({}, {
        id: null,
        sku: "sku",
        description: "description",
        size: "medium",
        color: "green",
        style: "retro",
        images: [],
        product_id: null,
        price: 5.0,
        price_compare: 6.0,
        created: new Date(),
        deleted: null,
        created_by: null
    }, values);
};
//# sourceMappingURL=factories.js.map
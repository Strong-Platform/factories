import { CustomerActivity, Customer } from "@strong-platform/types";

const overrideDefaultValues = (defaultRecord: object, updatedRecord: object) =>
  Object.keys(defaultRecord).reduce(
    (accumulator, key) => ({
      ...accumulator,
      [key]: updatedRecord[key] || defaultRecord[key]
    }),
    {}
  );

export const customer = (values: object): Customer =>
  overrideDefaultValues(
    {
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
    },
    values
  ) as Customer;

export const customerActivityFactory = (values: object): CustomerActivity =>
  overrideDefaultValues(
    {
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
    },
    values
  ) as CustomerActivity;

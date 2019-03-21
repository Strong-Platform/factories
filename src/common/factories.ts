import { CustomerActivity } from "@strong-platform/types";

const overrideDefaultValues = (defaultRecord: object, updatedRecord: object) =>
  Object.keys(defaultRecord).reduce(
    (accumulator, key) => ({
      ...accumulator,
      [key]: updatedRecord[key] || defaultRecord[key]
    }),
    {}
  );

export const customerActivityFactory = (values: object): CustomerActivity => {
  const defaultValues = {
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
  return overrideDefaultValues(defaultValues, values) as CustomerActivity;
};

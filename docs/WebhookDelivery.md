
# WebhookDelivery

Payload delivered to your webhook URL when an event occurs.  **Verifying deliveries**: Paraph follows the [Standard Webhooks](https://standardwebhooks.com) spec. Each delivery carries three headers:  - `webhook-id` — unique UUID for this delivery (use to   deduplicate retries). - `webhook-timestamp` — Unix seconds when the delivery was   sent. Reject deliveries whose timestamp is too far from   now to guard against replays. - `webhook-signature` — `v1,<base64>` where `<base64>` is the   HMAC-SHA256 of `\"{webhook-id}.{webhook-timestamp}.{body}\"`   using your webhook\'s secret as the key.  Language libraries that implement the spec can verify deliveries in a few lines — see `@standard-webhooks/webhooks` on npm and equivalents for other runtimes.  Failed deliveries are retried up to 5 times with exponential backoff (1s, 2s, 4s, 8s, 16s). Each attempt has a 10-second timeout. After all retries are exhausted the delivery is marked as failed. 

## Properties

Name | Type
------------ | -------------
`event` | [WebhookEvent](WebhookEvent.md)
`timestamp` | Date
`data` | [WebhookDeliveryData](WebhookDeliveryData.md)

## Example

```typescript
import type { WebhookDelivery } from 'paraph'

// TODO: Update the object below with actual values
const example = {
  "event": null,
  "timestamp": null,
  "data": null,
} satisfies WebhookDelivery

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WebhookDelivery
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



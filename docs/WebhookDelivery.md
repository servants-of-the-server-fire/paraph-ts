
# WebhookDelivery

Payload delivered to your webhook URL when an event occurs.  Deliveries include an `X-Signature-256` header containing `sha256=<hex>` where `<hex>` is the HMAC-SHA256 of the request body using the webhook\'s secret as the key. Verify this to confirm the delivery came from Paraph.  Failed deliveries are retried up to 5 times with exponential backoff (1s, 2s, 4s, 8s, 16s). Each attempt has a 10-second timeout. After all retries are exhausted the delivery is marked as failed. 

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



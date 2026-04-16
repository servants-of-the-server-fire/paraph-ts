
# WebhookDeliveryData

Event-specific payload

## Properties

Name | Type
------------ | -------------
`request_id` | string
`template_id` | string
`signer_id` | string
`signer_label` | string
`recipient_email` | string

## Example

```typescript
import type { WebhookDeliveryData } from 'paraph'

// TODO: Update the object below with actual values
const example = {
  "request_id": null,
  "template_id": null,
  "signer_id": null,
  "signer_label": null,
  "recipient_email": null,
} satisfies WebhookDeliveryData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WebhookDeliveryData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



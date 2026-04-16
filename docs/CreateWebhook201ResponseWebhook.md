
# CreateWebhook201ResponseWebhook


## Properties

Name | Type
------------ | -------------
`id` | string
`url` | string
`events` | [Array&lt;WebhookEvent&gt;](WebhookEvent.md)
`active` | boolean
`created_at` | Date
`updated_at` | Date
`secret` | string

## Example

```typescript
import type { CreateWebhook201ResponseWebhook } from 'paraph'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "url": null,
  "events": null,
  "active": null,
  "created_at": null,
  "updated_at": null,
  "secret": null,
} satisfies CreateWebhook201ResponseWebhook

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateWebhook201ResponseWebhook
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



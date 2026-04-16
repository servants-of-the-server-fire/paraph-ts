
# AccountLimits


## Properties

Name | Type
------------ | -------------
`requests_per_month` | number
`signing_requests_per_month` | number
`max_templates` | number
`max_members` | number

## Example

```typescript
import type { AccountLimits } from 'paraph'

// TODO: Update the object below with actual values
const example = {
  "requests_per_month": null,
  "signing_requests_per_month": null,
  "max_templates": null,
  "max_members": null,
} satisfies AccountLimits

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AccountLimits
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



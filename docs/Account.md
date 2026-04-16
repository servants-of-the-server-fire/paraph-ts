
# Account


## Properties

Name | Type
------------ | -------------
`team_name` | string
`plan` | string
`sandbox_mode` | boolean
`api_key_name` | string
`limits` | [AccountLimits](AccountLimits.md)
`usage` | [AccountUsage](AccountUsage.md)

## Example

```typescript
import type { Account } from 'paraph'

// TODO: Update the object below with actual values
const example = {
  "team_name": null,
  "plan": null,
  "sandbox_mode": null,
  "api_key_name": null,
  "limits": null,
  "usage": null,
} satisfies Account

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Account
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



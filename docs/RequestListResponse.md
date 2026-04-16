
# RequestListResponse


## Properties

Name | Type
------------ | -------------
`requests` | [Array&lt;DocumentRequestSummary&gt;](DocumentRequestSummary.md)
`list_info` | [ListInfo](ListInfo.md)

## Example

```typescript
import type { RequestListResponse } from 'paraph'

// TODO: Update the object below with actual values
const example = {
  "requests": null,
  "list_info": null,
} satisfies RequestListResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RequestListResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)



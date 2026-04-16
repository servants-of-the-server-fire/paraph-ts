# AccountApi

All URIs are relative to *https://paraph.dev/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getAccount**](AccountApi.md#getaccount) | **GET** /account | Get account info |



## getAccount

> GetAccount200Response getAccount()

Get account info

Returns the current team\&#39;s plan, usage counters, and limits for the API key used in the request.

### Example

```ts
import {
  Configuration,
  AccountApi,
} from 'paraph';
import type { GetAccountRequest } from 'paraph';

async function example() {
  console.log("🚀 Testing paraph SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AccountApi(config);

  try {
    const data = await api.getAccount();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GetAccount200Response**](GetAccount200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Account info |  -  |
| **400** | Invalid input |  -  |
| **401** | Missing or invalid API key |  -  |
| **404** | Resource not found |  -  |
| **429** | Rate limit or quota exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


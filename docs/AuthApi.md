# AuthApi

All URIs are relative to *https://paraph.dev/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**register**](AuthApi.md#registeroperation) | **POST** /auth/register | Register a new account |



## register

> Register201Response register(registerRequest)

Register a new account

Creates a new user account and sends a verification email. The user must click the link in the email before they can log in. After verification, retrieve your API key from the web dashboard at https://paraph.dev.  Rate limited to 5 registrations per hour per IP address. 

### Example

```ts
import {
  Configuration,
  AuthApi,
} from 'paraph';
import type { RegisterOperationRequest } from 'paraph';

async function example() {
  console.log("🚀 Testing paraph SDK...");
  const api = new AuthApi();

  const body = {
    // RegisterRequest
    registerRequest: {"email":"dev@example.com","password":"s3curePa55word"},
  } satisfies RegisterOperationRequest;

  try {
    const data = await api.register(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **registerRequest** | [RegisterRequest](RegisterRequest.md) |  | |

### Return type

[**Register201Response**](Register201Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Account created — check email to verify |  * X-Request-Id -  <br>  |
| **400** | Invalid input |  -  |
| **403** | Action not permitted |  -  |
| **409** | Email already registered |  * X-Request-Id -  <br>  |
| **429** | Rate limit or quota exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


# RequestsApi

All URIs are relative to *https://paraph.dev/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**cancelRequest**](RequestsApi.md#cancelrequest) | **POST** /requests/{id}/cancel | Cancel request |
| [**createRequest**](RequestsApi.md#createrequestoperation) | **POST** /requests | Create request |
| [**downloadRequest**](RequestsApi.md#downloadrequest) | **GET** /requests/{id}/download | Download request PDF |
| [**getRequest**](RequestsApi.md#getrequest) | **GET** /requests/{id} | Get request detail |
| [**listRequests**](RequestsApi.md#listrequests) | **GET** /requests | List requests |



## cancelRequest

> RequestResponse cancelRequest(id)

Cancel request

Cancels all pending signers on the request and sets the request status to &#x60;cancelled&#x60;. Signers who have already signed are not affected. Only requests with status &#x60;pending&#x60; can be cancelled. 

### Example

```ts
import {
  Configuration,
  RequestsApi,
} from 'paraph';
import type { CancelRequestRequest } from 'paraph';

async function example() {
  console.log("🚀 Testing paraph SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RequestsApi(config);

  const body = {
    // string | Request ID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies CancelRequestRequest;

  try {
    const data = await api.cancelRequest(body);
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
| **id** | `string` | Request ID | [Defaults to `undefined`] |

### Return type

[**RequestResponse**](RequestResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Request cancelled |  -  |
| **404** | Resource not found |  -  |
| **409** | Invalid state transition |  -  |
| **400** | Invalid input |  -  |
| **401** | Missing or invalid API key |  -  |
| **429** | Rate limit or quota exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## createRequest

> RequestResponse createRequest(createRequestRequest, idempotencyKey)

Create request

Fills the template\&#39;s form fields and creates a request.  If &#x60;signers&#x60; is provided and the template has signature placements configured, each signer receives a signing link via email. To provide a signer\&#39;s signature directly (skipping the email), use &#x60;override_signature_url&#x60; in the signer object.  Omitting &#x60;signers&#x60; produces a fill-only PDF with no signing flow.  Use &#x60;GET /requests/{id}/download&#x60; to retrieve the filled or signed PDF. 

### Example

```ts
import {
  Configuration,
  RequestsApi,
} from 'paraph';
import type { CreateRequestOperationRequest } from 'paraph';

async function example() {
  console.log("🚀 Testing paraph SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RequestsApi(config);

  const body = {
    // CreateRequestRequest
    createRequestRequest: {"template_id":"d290f1ee-6c54-4b01-90e6-d701748f0851","fields":{"employee_name":"Jane Doe","start_date":"2026-04-01","department":"Engineering"}},
    // string | Optional. If provided, ensures the request is processed at most once within 24 hours. Retries with the same key and body return the original response without creating a duplicate. Using the same key with a different request body returns 409 Conflict.  (optional)
    idempotencyKey: idempotencyKey_example,
  } satisfies CreateRequestOperationRequest;

  try {
    const data = await api.createRequest(body);
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
| **createRequestRequest** | [CreateRequestRequest](CreateRequestRequest.md) |  | |
| **idempotencyKey** | `string` | Optional. If provided, ensures the request is processed at most once within 24 hours. Retries with the same key and body return the original response without creating a duplicate. Using the same key with a different request body returns 409 Conflict.  | [Optional] [Defaults to `undefined`] |

### Return type

[**RequestResponse**](RequestResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Request created |  -  |
| **400** | Invalid request or unfillable PDF |  -  |
| **409** | Invalid state transition |  -  |
| **429** | Rate limit or quota exceeded |  -  |
| **401** | Missing or invalid API key |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## downloadRequest

> Blob downloadRequest(id)

Download request PDF

Returns the filled PDF. If all signers have completed, signatures are applied to the PDF. If signing is still pending, you get the filled PDF without signatures. 

### Example

```ts
import {
  Configuration,
  RequestsApi,
} from 'paraph';
import type { DownloadRequestRequest } from 'paraph';

async function example() {
  console.log("🚀 Testing paraph SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RequestsApi(config);

  const body = {
    // string | Request ID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DownloadRequestRequest;

  try {
    const data = await api.downloadRequest(body);
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
| **id** | `string` | Request ID | [Defaults to `undefined`] |

### Return type

**Blob**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/pdf`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | PDF file |  * Content-Disposition - attachment; filename&#x3D;\&quot;generated.pdf\&quot; or \&quot;signed.pdf\&quot; <br>  |
| **404** | Resource not found |  -  |
| **400** | Invalid input |  -  |
| **401** | Missing or invalid API key |  -  |
| **429** | Rate limit or quota exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getRequest

> RequestResponse getRequest(id)

Get request detail

Returns the request with its field inputs and signer statuses.

### Example

```ts
import {
  Configuration,
  RequestsApi,
} from 'paraph';
import type { GetRequestRequest } from 'paraph';

async function example() {
  console.log("🚀 Testing paraph SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RequestsApi(config);

  const body = {
    // string | Request ID
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetRequestRequest;

  try {
    const data = await api.getRequest(body);
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
| **id** | `string` | Request ID | [Defaults to `undefined`] |

### Return type

[**RequestResponse**](RequestResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Request detail including inputs and signers |  -  |
| **404** | Resource not found |  -  |
| **400** | Invalid input |  -  |
| **401** | Missing or invalid API key |  -  |
| **429** | Rate limit or quota exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listRequests

> RequestListResponse listRequests(page, pageSize, status, from, to, metadataKey, metadataValue)

List requests

Returns all requests in your account, newest first.

### Example

```ts
import {
  Configuration,
  RequestsApi,
} from 'paraph';
import type { ListRequestsRequest } from 'paraph';

async function example() {
  console.log("🚀 Testing paraph SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new RequestsApi(config);

  const body = {
    // number (optional)
    page: 56,
    // number (optional)
    pageSize: 56,
    // RequestStatus | Filter by request status (optional)
    status: ...,
    // Date | Only return requests created on or after this timestamp (RFC 3339) (optional)
    from: 2013-10-20T19:20:30+01:00,
    // Date | Only return requests created on or before this timestamp (RFC 3339) (optional)
    to: 2013-10-20T19:20:30+01:00,
    // string | Filter by metadata key. Must be used together with metadata_value. (optional)
    metadataKey: metadataKey_example,
    // string | Filter by metadata value (exact match). Must be used together with metadata_key. (optional)
    metadataValue: metadataValue_example,
  } satisfies ListRequestsRequest;

  try {
    const data = await api.listRequests(body);
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
| **page** | `number` |  | [Optional] [Defaults to `1`] |
| **pageSize** | `number` |  | [Optional] [Defaults to `20`] |
| **status** | `RequestStatus` | Filter by request status | [Optional] [Defaults to `undefined`] [Enum: success, error, pending, cancelled] |
| **from** | `Date` | Only return requests created on or after this timestamp (RFC 3339) | [Optional] [Defaults to `undefined`] |
| **to** | `Date` | Only return requests created on or before this timestamp (RFC 3339) | [Optional] [Defaults to `undefined`] |
| **metadataKey** | `string` | Filter by metadata key. Must be used together with metadata_value. | [Optional] [Defaults to `undefined`] |
| **metadataValue** | `string` | Filter by metadata value (exact match). Must be used together with metadata_key. | [Optional] [Defaults to `undefined`] |

### Return type

[**RequestListResponse**](RequestListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated list of requests |  -  |
| **400** | Invalid input |  -  |
| **401** | Missing or invalid API key |  -  |
| **404** | Resource not found |  -  |
| **429** | Rate limit or quota exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


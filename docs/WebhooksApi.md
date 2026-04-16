# WebhooksApi

All URIs are relative to *https://paraph.dev/api/v1*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createWebhook**](WebhooksApi.md#createwebhookoperation) | **POST** /webhooks | Create webhook |
| [**deleteWebhook**](WebhooksApi.md#deletewebhook) | **DELETE** /webhooks/{id} | Delete webhook |
| [**getWebhook**](WebhooksApi.md#getwebhook) | **GET** /webhooks/{id} | Get webhook |
| [**listWebhooks**](WebhooksApi.md#listwebhooks) | **GET** /webhooks | List webhooks |
| [**testWebhook**](WebhooksApi.md#testwebhook) | **POST** /webhooks/{id}/test | Test webhook |
| [**updateWebhook**](WebhooksApi.md#updatewebhookoperation) | **PATCH** /webhooks/{id} | Update webhook |



## createWebhook

> CreateWebhook201Response createWebhook(createWebhookRequest)

Create webhook

Registers a URL to receive event notifications.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from 'paraph';
import type { CreateWebhookOperationRequest } from 'paraph';

async function example() {
  console.log("🚀 Testing paraph SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // CreateWebhookRequest
    createWebhookRequest: {"url":"https://example.com/webhook","events":["request.success","signer.signed"]},
  } satisfies CreateWebhookOperationRequest;

  try {
    const data = await api.createWebhook(body);
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
| **createWebhookRequest** | [CreateWebhookRequest](CreateWebhookRequest.md) |  | |

### Return type

[**CreateWebhook201Response**](CreateWebhook201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Webhook created |  -  |
| **400** | Invalid input |  -  |
| **429** | Rate limit or quota exceeded |  -  |
| **401** | Missing or invalid API key |  -  |
| **404** | Resource not found |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## deleteWebhook

> deleteWebhook(id)

Delete webhook

Permanently removes the webhook. No further deliveries will be sent.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from 'paraph';
import type { DeleteWebhookRequest } from 'paraph';

async function example() {
  console.log("🚀 Testing paraph SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies DeleteWebhookRequest;

  try {
    const data = await api.deleteWebhook(body);
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
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Webhook deleted |  -  |
| **404** | Resource not found |  -  |
| **400** | Invalid input |  -  |
| **401** | Missing or invalid API key |  -  |
| **429** | Rate limit or quota exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getWebhook

> WebhookResponse getWebhook(id)

Get webhook

Returns a single webhook.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from 'paraph';
import type { GetWebhookRequest } from 'paraph';

async function example() {
  console.log("🚀 Testing paraph SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies GetWebhookRequest;

  try {
    const data = await api.getWebhook(body);
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
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

[**WebhookResponse**](WebhookResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Webhook details |  -  |
| **404** | Resource not found |  -  |
| **400** | Invalid input |  -  |
| **401** | Missing or invalid API key |  -  |
| **429** | Rate limit or quota exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listWebhooks

> WebhookListResponse listWebhooks(page, pageSize)

List webhooks

Returns all webhooks registered in your account, newest first.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from 'paraph';
import type { ListWebhooksRequest } from 'paraph';

async function example() {
  console.log("🚀 Testing paraph SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // number (optional)
    page: 56,
    // number (optional)
    pageSize: 56,
  } satisfies ListWebhooksRequest;

  try {
    const data = await api.listWebhooks(body);
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

### Return type

[**WebhookListResponse**](WebhookListResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Paginated list of webhooks for the current group |  -  |
| **400** | Invalid input |  -  |
| **401** | Missing or invalid API key |  -  |
| **404** | Resource not found |  -  |
| **429** | Rate limit or quota exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## testWebhook

> testWebhook(id)

Test webhook

Sends a test event payload to the webhook URL. Use this to verify your endpoint is correctly receiving and processing webhook deliveries. 

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from 'paraph';
import type { TestWebhookRequest } from 'paraph';

async function example() {
  console.log("🚀 Testing paraph SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies TestWebhookRequest;

  try {
    const data = await api.testWebhook(body);
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
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Test delivery succeeded |  -  |
| **404** | Resource not found |  -  |
| **502** | Upstream delivery failed |  -  |
| **400** | Invalid input |  -  |
| **401** | Missing or invalid API key |  -  |
| **429** | Rate limit or quota exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## updateWebhook

> WebhookResponse updateWebhook(id, updateWebhookRequest)

Update webhook

Change the webhook URL, subscribed events, or active status. Omitted fields are left unchanged.

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from 'paraph';
import type { UpdateWebhookOperationRequest } from 'paraph';

async function example() {
  console.log("🚀 Testing paraph SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: bearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new WebhooksApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // UpdateWebhookRequest
    updateWebhookRequest: ...,
  } satisfies UpdateWebhookOperationRequest;

  try {
    const data = await api.updateWebhook(body);
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
| **id** | `string` |  | [Defaults to `undefined`] |
| **updateWebhookRequest** | [UpdateWebhookRequest](UpdateWebhookRequest.md) |  | |

### Return type

[**WebhookResponse**](WebhookResponse.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Updated webhook |  -  |
| **404** | Resource not found |  -  |
| **400** | Invalid input |  -  |
| **401** | Missing or invalid API key |  -  |
| **429** | Rate limit or quota exceeded |  -  |
| **500** | Internal server error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


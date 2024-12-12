const httpConfig = () => ({
  // Success responses
  OK_200: 200,
  CREATED_201: 201,
  ACCEPTED_202: 202,
  NO_CONTENT_204: 204,

  // Client error responses
  BAD_REQUEST_400: 400,
  UNAUTHORIZED_401: 401,
  FORBIDDEN_402: 403,
  NOT_FOUND_404: 404,
  METHOD_NOT_ALLOWED_405: 405,
  CONFLICT_409: 409,
  UNPROCESSABLE_ENTITY_422: 422,
  TOO_MANY_REQUESTS_429: 429,

  // Server error responses
  INTERNAL_SERVER_ERROR_500: 500,
  NOT_IMPLEMENTED_501: 501,
  BAD_GATEWAY_502: 502,
  SERVICE_UNAVAILABLE_503: 503,
  GATEWAY_TIMEOUT_504: 504,
});

export const HTTPSTATUS = httpConfig();

export type HttpStatusCode = (typeof HTTPSTATUS)[keyof typeof HTTPSTATUS];

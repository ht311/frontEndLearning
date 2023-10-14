/* eslint @typescript-eslint/no-explicit-any: 0 */
export const fetcher = async (
  resource: RequestInfo,
  init?: RequestInit,
): Promise<any> => {
  const response = await fetch(resource, init)

  //is error
  if (!response.ok) {
    const errorResponse = await response.json()
    const error = new Error(errorResponse.message ?? 'APIリクエストにてエラー')
    throw error
  }

  return response.json()
}

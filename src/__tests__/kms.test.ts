import { flattenKeys } from '../kms'

const mockPayload = `{
  "Tags" : [
    { "TagKey": "T1", "TagValue": "V1" },
    { "TagKey": "T2", "TagValue": "V2" },
    { "TagKey": "T3", "TagValue": "V3" }
  ]
}`

it('returns a flattened object with keys: values', () => {
  const mock = JSON.parse(mockPayload)
  const flattened = flattenKeys(mock)
  expect(flattened.T1).toBe('V1')
  expect(flattened.T2).toBe('V2')
  expect(flattened.T3).toBe('V3')
})

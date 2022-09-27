export const isNumber = (something: unknown): something is number =>
  typeof something === 'number'

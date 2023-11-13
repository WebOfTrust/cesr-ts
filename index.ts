import { create, all } from 'mathjs'

// TODO: Not sure this code belongs here in this context. Revisit when the time comes to configure the NPM package.
const config = {};
export const math = create(all, config);

console.log('TypeScript-native implementation of CESR primitives!')
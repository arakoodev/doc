```jsx title="/hash"
const password = “super-secure-pa$$word”;

const hash = await Bun.password.hash(password);
// => $argon2d$v=19$m=65536, t=2, p=1$tFq+9AVr1bfPxQdh...

const isMatch = await Bun.password.verify(password, hash);
// => true
```
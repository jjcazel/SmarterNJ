# My Smarter NJ Clone

I created this project in tandem with my submission for the [full-stack software engineer position](https://innovation.nj.gov/join/full-stack-software-engineer/?utm_source=All-hands+job+board&utm_medium=getro.com&gh_src=All-hands+job+board) at the State of New Jersey. I used the [Smarter NJ site](https://smarter.nj.gov/) as my template. I noticed that the `/news` page has some "dummy" text and the buttons weren't working. I addressed that in my app by fetching a [public news API](https://newsapi.ai/dashboard) and returning any news that matches the keyword, *"New Jersey"*.

I created this UI using React + Vite + TypeScript. I used standard functional components while using React hooks to either update styling classes conditionally or to fetch an API and manage the returned data. I'm hosting this on Github Pages and you can view my code [here](https://github.com/jjcazel/jjcazel.github.io).


## My code to fetch the News API

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

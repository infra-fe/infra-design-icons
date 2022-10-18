import { defineConfig } from 'father'

// const config = {
//   cjs: 'babel',
//   esm: { type: 'babel', importLibToEs: true },
//   preCommit: {
//     eslint: true,
//     prettier: true,
//   },
//   runtimeHelpers: true,
// };

// if (process.env.NODE_ENV !== 'ci') {
//   config.umd = {
//     globals: { react: 'window.React' },
//     minFile: true,
//     sourcemap: false,
//   };
// }



export default defineConfig({
  cjs: {
    transformer: 'babel',
    output: 'lib'
  },
  esm: {
    transformer: 'babel',
    output: 'es'
  },
  umd: process.env.NODE_ENV === 'ci' ? undefined : {
    entry: {
      'src/index': {}
    },
    output: 'dist',
    externals: {
      react: 'window.React',
    },
  }
});

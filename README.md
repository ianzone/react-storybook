# Toolchain

<!-- <a href=''><img src=''></a> -->

<table>
  <tr>
    <th>Tasks</th>
    <th>Tools</th>
    <th>Options</th>
  </tr>
  <tr>
    <td>Building</td>
    <td>
      <a href="https://www.typescriptlang.org/"><img src='https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&labelColor=grey'></a>
      <a href="https://lib.rsbuild.dev/zh/"><img src='https://img.shields.io/badge/Rslib-f28974?labelColor=grey&logo=rust'></a>
    </td>
    <td>
    </td>
  </tr>
  <tr>
    <td>Linting</td>
    <td>
      <a href="https://biomejs.dev/zh-cn/guides/getting-started/"><img src='https://img.shields.io/badge/Biome-blue?logo=biome&labelColor=grey'></a>
    </td>
    <td></td>
  </tr>
  <tr>
    <td>Testing</td>
    <td>
      <a href="https://storybook.js.org/docs"><img src='https://img.shields.io/badge/Storybook-FF4785?logo=storybook&labelColor=grey'></a>
      <a href="https://cn.vitest.dev/guide/"><img src='https://img.shields.io/badge/Vitest-729b1b?logo=Vitest&labelColor=grey'></a>
      <a href="https://testing-library.com/docs/react-testing-library/intro/"><img src='https://img.shields.io/badge/Testing_Library-E33332?logo=testinglibrary&labelColor=grey'></a>
    </td>
    <td>
      <a href="https://fakerjs.dev/api/"><img src='https://img.shields.io/badge/🪄-Faker-firebrick'></a>
    </td>
  </tr>
  <tr>
    <td>CI/CD</td>
    <td>
      <a href="https://github.com/evilmartians/lefthook/"><img src='https://img.shields.io/badge/Lefthook-FF1E1E?labelColor=grey&logo=lefthook'></a>
      <a href="https://semantic-release.gitbook.io/semantic-release"><img src='https://img.shields.io/badge/semantic-e10079?logo=semantic-release&labelColor=grey'></a>
    </td>
    <td>
    </td>
  </tr>
</table>

[Publish storybook](https://storybook.js.org/docs/sharing/publish-storybook)

# Build strategy
## Produce
- .js
- .d.ts
- .map
- .css

## Bundle dependencies?
Since package managers will download dependencies of dependencies, it's not necessary to bundle them. However, it's good to bundle if the lib is delivered via CDN.

## tsc caveats
[Path alias doesn't work in .d.ts files.](https://github.com/microsoft/TypeScript/issues/15479)
check https://github.com/microsoft/TypeScript/issues/16607
[css won't be copied to dist](https://stackoverflow.com/questions/59213489/include-css-files-in-tsc-typescript-compilation)
solution: use bundler to generate .d.ts files
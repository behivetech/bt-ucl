# Lerna Notes

## Run Tasks

### Build everything
```
npx lerna run build
```

### Run multiple tasks concurrently
```
npx lerna run test,build,lint
```

### Run a Task for a single Package
While developing you rarely run all the builds or all the tests. Instead, you often run things only against the projects you are changing. For instance, you can run the header tests like this:
```
npx lerna run test --scope=header
```

### Run Tasks Affected by a PR
You can also run a command for all the projects affected in your PR like this:
```
npx lerna run test --since=origin/main
```

### Run other tasks for build
```
npx lerna run build --scope=remixapp
npx lerna run build --ignore=header,footer
```

### Skipping Cached
```
npx lerna run build --skip-nx-cache
npx lerna run test --skip-nx-cache
```

## nx.json config
### Runtime Hash Inputs
Your targets can also depend on runtime values.

nx.json
```
{
  "targetDefaults": {
    "build": {
      "inputs": [{ "env": "MY_ENV_NAME" }, { "runtime": "node -v" }]
    }
  }
}
```

## Targets
Setting up target folders for diferent tasks...

nx.json
```
{
  ...
  "targetDefaults": {
    "build": {
      "dependsOn": [
        "^build"
      ],
      "outputs": [
        "{projectRoot}/dist",
        "{projectRoot}/build",
        "{projectRoot}/public/build"
      ]
    }
  }
}
```

## NPM Packaging
### "files" and .gitignore
// TODO: Need to look into this and put some documentation down on how to do it...

Lerna always publishes using npm's tooling, and it has a few built in ways to include or exclude files. The easiest way to configure which files are included in the published package are via the "files" property in package.json and .gitignore. See the npm documentation for more information on how npm recognizes files for publishing.

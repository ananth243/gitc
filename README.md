
## Run Locally

Clone the project

```bash
  git clone https://github.com/ananth243 project
```

Go to the project directory

```bash
  cd project
```

Install dependencies

```bash
  yarn add
```

Start the ts compilation

```bash
  yarn build:dev
```

In another terminal

```bash
 node dist/index.js -n reponame
 ```

## Optimizations

# PAT input can be taken like a password input. Currently PAT is visible as an input unlike passwords.
# Config file is not given admin priviliges yet


## Installation

Upon installing dependencies and compiling ts, create a file bin/index.js and place the following code:

```bash
  #!/usr/bin/env node
  require('../dist/index.js');
```

Finally run
```bash
  npm run link
```

```gitc --help```

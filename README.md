todo-cli
=================

A simple but powerful TODO CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@julianduque/todo-cli)](https://npmjs.org/package/@julianduque/todo-cli)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @julianduque/todo-cli
$ todo COMMAND
running command...
$ todo (--version)
@julianduque/todo-cli/1.1.1 darwin-x64 node-v16.17.0
$ todo --help [COMMAND]
USAGE
  $ todo COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`todo add [TASK]`](#todo-add-task)
* [`todo complete [ID]`](#todo-complete-id)
* [`todo delete [ID]`](#todo-delete-id)
* [`todo help [COMMAND]`](#todo-help-command)
* [`todo list`](#todo-list)
* [`todo ls`](#todo-ls)
* [`todo plugins`](#todo-plugins)
* [`todo plugins:install PLUGIN...`](#todo-pluginsinstall-plugin)
* [`todo plugins:inspect PLUGIN...`](#todo-pluginsinspect-plugin)
* [`todo plugins:install PLUGIN...`](#todo-pluginsinstall-plugin-1)
* [`todo plugins:link PLUGIN`](#todo-pluginslink-plugin)
* [`todo plugins:uninstall PLUGIN...`](#todo-pluginsuninstall-plugin)
* [`todo plugins:uninstall PLUGIN...`](#todo-pluginsuninstall-plugin-1)
* [`todo plugins:uninstall PLUGIN...`](#todo-pluginsuninstall-plugin-2)
* [`todo plugins update`](#todo-plugins-update)
* [`todo todos add [TASK]`](#todo-todos-add-task)
* [`todo todos complete [ID]`](#todo-todos-complete-id)
* [`todo todos delete [ID]`](#todo-todos-delete-id)
* [`todo todos list`](#todo-todos-list)

## `todo add [TASK]`

Add a new Task

```
USAGE
  $ todo add [TASK] [-c <value>]

FLAGS
  -c, --category=<value>  category to add

DESCRIPTION
  Add a new Task

ALIASES
  $ todo add

EXAMPLES
  $ todo add "Buy milk" --category=shopping
```

## `todo complete [ID]`

Complete a Task

```
USAGE
  $ todo complete [ID]

DESCRIPTION
  Complete a Task

ALIASES
  $ todo complete

EXAMPLES
  $ todo complete 42
```

## `todo delete [ID]`

Delete a Task

```
USAGE
  $ todo delete [ID]

DESCRIPTION
  Delete a Task

ALIASES
  $ todo delete

EXAMPLES
  $ todo delete 42
```

## `todo help [COMMAND]`

Display help for todo.

```
USAGE
  $ todo help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for todo.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `todo list`

List all the Tasks

```
USAGE
  $ todo list [-c <value>] [-d] [--columns <value> | -x] [--sort <value>] [--filter <value>] [--output
    csv|json|yaml |  | [--csv | --no-truncate]] [--no-header | ] [--json]

FLAGS
  -c, --category=<value>  category to filter
  -d, --completed         list completed tasks
  -x, --extended          show extra columns
  --columns=<value>       only show provided columns (comma-separated)
  --csv                   output is csv format [alias: --output=csv]
  --filter=<value>        filter property by partial string matching, ex: name=foo
  --no-header             hide table header from output
  --no-truncate           do not truncate output to fit screen
  --output=<option>       output in a more machine friendly format
                          <options: csv|json|yaml>
  --sort=<value>          property to sort by (prepend '-' for descending)

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List all the Tasks

ALIASES
  $ todo list
  $ todo ls

EXAMPLES
  $ todo list --category=shopping --completed
```

## `todo ls`

List all the Tasks

```
USAGE
  $ todo ls [-c <value>] [-d] [--columns <value> | -x] [--sort <value>] [--filter <value>] [--output
    csv|json|yaml |  | [--csv | --no-truncate]] [--no-header | ] [--json]

FLAGS
  -c, --category=<value>  category to filter
  -d, --completed         list completed tasks
  -x, --extended          show extra columns
  --columns=<value>       only show provided columns (comma-separated)
  --csv                   output is csv format [alias: --output=csv]
  --filter=<value>        filter property by partial string matching, ex: name=foo
  --no-header             hide table header from output
  --no-truncate           do not truncate output to fit screen
  --output=<option>       output in a more machine friendly format
                          <options: csv|json|yaml>
  --sort=<value>          property to sort by (prepend '-' for descending)

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List all the Tasks

ALIASES
  $ todo list
  $ todo ls

EXAMPLES
  $ todo ls --category=shopping --completed
```

## `todo plugins`

List installed plugins.

```
USAGE
  $ todo plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ todo plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `todo plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ todo plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ todo plugins add

EXAMPLES
  $ todo plugins:install myplugin 

  $ todo plugins:install https://github.com/someuser/someplugin

  $ todo plugins:install someuser/someplugin
```

## `todo plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ todo plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ todo plugins:inspect myplugin
```

## `todo plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ todo plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ todo plugins add

EXAMPLES
  $ todo plugins:install myplugin 

  $ todo plugins:install https://github.com/someuser/someplugin

  $ todo plugins:install someuser/someplugin
```

## `todo plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ todo plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ todo plugins:link myplugin
```

## `todo plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ todo plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ todo plugins unlink
  $ todo plugins remove
```

## `todo plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ todo plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ todo plugins unlink
  $ todo plugins remove
```

## `todo plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ todo plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ todo plugins unlink
  $ todo plugins remove
```

## `todo plugins update`

Update installed plugins.

```
USAGE
  $ todo plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

## `todo todos add [TASK]`

Add a new Task

```
USAGE
  $ todo todos add [TASK] [-c <value>]

FLAGS
  -c, --category=<value>  category to add

DESCRIPTION
  Add a new Task

ALIASES
  $ todo add

EXAMPLES
  $ todo todos add "Buy milk" --category=shopping
```

## `todo todos complete [ID]`

Complete a Task

```
USAGE
  $ todo todos complete [ID]

DESCRIPTION
  Complete a Task

ALIASES
  $ todo complete

EXAMPLES
  $ todo todos complete 42
```

## `todo todos delete [ID]`

Delete a Task

```
USAGE
  $ todo todos delete [ID]

DESCRIPTION
  Delete a Task

ALIASES
  $ todo delete

EXAMPLES
  $ todo todos delete 42
```

## `todo todos list`

List all the Tasks

```
USAGE
  $ todo todos list [-c <value>] [-d] [--columns <value> | -x] [--sort <value>] [--filter <value>] [--output
    csv|json|yaml |  | [--csv | --no-truncate]] [--no-header | ] [--json]

FLAGS
  -c, --category=<value>  category to filter
  -d, --completed         list completed tasks
  -x, --extended          show extra columns
  --columns=<value>       only show provided columns (comma-separated)
  --csv                   output is csv format [alias: --output=csv]
  --filter=<value>        filter property by partial string matching, ex: name=foo
  --no-header             hide table header from output
  --no-truncate           do not truncate output to fit screen
  --output=<option>       output in a more machine friendly format
                          <options: csv|json|yaml>
  --sort=<value>          property to sort by (prepend '-' for descending)

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List all the Tasks

ALIASES
  $ todo list
  $ todo ls

EXAMPLES
  $ todo todos list --category=shopping --completed
```
<!-- commandsstop -->

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
* [`todo help [COMMAND]`](#todo-help-command)
* [`todo plugins`](#todo-plugins)
* [`todo plugins:install PLUGIN...`](#todo-pluginsinstall-plugin)
* [`todo plugins:inspect PLUGIN...`](#todo-pluginsinspect-plugin)
* [`todo plugins:install PLUGIN...`](#todo-pluginsinstall-plugin-1)
* [`todo plugins:link PLUGIN`](#todo-pluginslink-plugin)
* [`todo plugins:uninstall PLUGIN...`](#todo-pluginsuninstall-plugin)
* [`todo plugins:uninstall PLUGIN...`](#todo-pluginsuninstall-plugin-1)
* [`todo plugins:uninstall PLUGIN...`](#todo-pluginsuninstall-plugin-2)
* [`todo plugins update`](#todo-plugins-update)

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
<!-- commandsstop -->

import {Command, Flags, CliUx} from '@oclif/core'
import {Todo} from '../../lib/todo'
import TodoDb from '../../lib/todo-db'

export default class TodosList extends Command {
  #todoDb = new TodoDb(this.config.dataDir);
  static aliases = ['list', 'ls']

  static description = 'List all the Tasks'
  static examples = [
    '<%= config.bin %> <%= command.id %> --category=shopping --completed',
  ]

  static flags = {
    category: Flags.string({char: 'c', description: 'category to filter'}),
    completed: Flags.boolean({char: 'd', description: 'list completed tasks'}),
    ...CliUx.ux.table.flags(),
  }

  public static enableJsonFlag = true;

  public async run(): Promise<Todo[]> {
    const {flags} = await this.parse(TodosList)

    let todos : Todo[] = []
    todos = flags.category || flags.completed ?
      this.#todoDb.byFilter({
        category: flags.category || undefined, completed: flags.completed ? 1 : undefined,
      }) :
      this.#todoDb.all()

    CliUx.ux.table(todos, {
      id: {
        minWidth: 2,
      },
      task: {
        minWidth: 25,
      },
      category: {},
      completed: {
        get: row => row.completed ? '✔' : '𐄂',
      },
    }, {
      printLine: this.log.bind(this),
      ...flags, // parsed flags
    })
    return todos
  }
}

import {Command, Flags, CliUx} from '@oclif/core'
import {Todo} from '../../lib/todo'
import TodoDb from '../../lib/todo-db'

export default class TodosAdd extends Command {
  #todoDb = new TodoDb(this.config.dataDir);
  static aliases = ['add']

  static description = 'Add a new Task'

  static examples = [
    '<%= config.bin %> <%= command.id %> "Buy milk" --category=shopping',
  ]

  static flags = {
    category: Flags.string({char: 'c', description: 'category to add'}),
  }

  static args = [{name: 'task'}]

  public async run(): Promise<void> {
    let task
    const {args, flags} = await this.parse(TodosAdd)
    if (!args.task) {
      task = await CliUx.ux.prompt('What task do you need to accomplish?')
    }

    this.#todoDb.add({
      task: task || args.task,
      category: flags.category || 'general',
      completed: 0,
    } as Todo)

    this.log('Task added successfully')
  }
}

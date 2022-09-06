import {Command, CliUx} from '@oclif/core'
import TodoDb from '../../lib/todo-db'

export default class TodosComplete extends Command {
  #todoDb = new TodoDb(this.config.dataDir);
  static aliases = ['complete']

  static description = 'Complete a Task'

  static examples = [
    '<%= config.bin %> <%= command.id %> 42',
  ]

  static args = [{name: 'id'}]

  public async run(): Promise<void> {
    const {args} = await this.parse(TodosComplete)
    let id = Number.parseInt(args.id, 10)
    if (!id) {
      id = await CliUx.ux.prompt('What is the ID of the task you want to complete?')
    }

    const todo = this.#todoDb.byId(id)
    if (!todo) {
      this.error(`No task found with ID ${id}`)
    }

    this.#todoDb.complete(id)
    this.log(`Task ${id} completed successfully`)
  }
}

import {Command, CliUx} from '@oclif/core'
import TodoDb from '../../lib/todo-db'

export default class TodosDelete extends Command {
  #todoDb = new TodoDb(this.config.dataDir);
  static aliases = ['delete']

  static description = 'Delete a Task'

  static examples = [
    '<%= config.bin %> <%= command.id %> 42',
  ]

  static args = [{name: 'id'}]

  public async run(): Promise<void> {
    const {args} = await this.parse(TodosDelete)
    let id = Number.parseInt(args.id, 10)
    if (!id) {
      id = await CliUx.ux.prompt('What is the ID of the task you want to delete?')
    }

    const todo = this.#todoDb.byId(id)
    if (!todo) {
      this.error(`No task found with ID ${id}`)
    }

    this.#todoDb.delete(id)
    this.log(`Task ${id} deleted successfully`)
  }
}

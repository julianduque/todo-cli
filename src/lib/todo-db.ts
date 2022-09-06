import BetterSqlite3 from 'better-sqlite3'
import path from 'node:path'
import {mkdirSync, existsSync} from 'node:fs'
import {Todo} from './todo'

interface IFilter {
  category?: string | undefined,
  completed?: number | undefined,
}

export default class TodoDb {
  #client : BetterSqlite3.Database;

  constructor(dataDir : string) {
    if (!existsSync(dataDir)) {
      mkdirSync(dataDir, {recursive: true})
    }

    this.#client = new BetterSqlite3(path.join(dataDir, 'todo.db'))
    this.setup()
  }

  setup() : void {
    this.#client.exec(`
      CREATE TABLE IF NOT EXISTS todo (
        id INTEGER PRIMARY KEY,
        task TEXT NOT NULL,
        category TEXT NOT NULL,
        completed BOOLEAN NOT NULL
      )
    `)
  }

  add(todo : Todo) : void {
    const insert = this.#client.prepare(`
      INSERT INTO todo (task, category, completed)
      VALUES (@task, @category, @completed)
    `)
    insert.run(todo)
  }

  all() : Todo[] {
    const stmt = this.#client.prepare('SELECT * FROM todo')
    return stmt.all() as Todo[]
  }

  byId(id : number) : Todo {
    const stmt = this.#client.prepare('SELECT * FROM todo WHERE id = @id')
    return stmt.get({id}) as Todo
  }

  byFilter(filter: IFilter) : Todo[] {
    let query = 'SELECT * FROM todo'

    if (filter.category && filter.completed) {
      query += ' WHERE category = @category AND completed = 1'
    } else if (filter.category) {
      query += ' WHERE category = @category'
    } else if (filter.completed) {
      query += ' WHERE completed = 1'
    }

    const stmt = this.#client.prepare(query)
    return stmt.all(filter) as Todo[]
  }

  complete(id : number) : void {
    const stmt = this.#client.prepare('UPDATE todo SET completed = 1 WHERE id = @id')
    stmt.run({id})
  }

  delete(id : number) : void {
    const strmt = this.#client.prepare('DELETE FROM todo WHERE id = @id')
    strmt.run({id})
  }
}

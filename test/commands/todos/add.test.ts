import {expect, test} from '@oclif/test'

describe.skip('todos/add', () => {
  test
  .stdout()
  .command(['add'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })
})

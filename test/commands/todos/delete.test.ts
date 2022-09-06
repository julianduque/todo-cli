import {expect, test} from '@oclif/test'

describe.skip('todos/delete', () => {
  test
  .stdout()
  .command(['delete'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })
})

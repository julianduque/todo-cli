import {expect, test} from '@oclif/test'

describe.skip('todos/list', () => {
  test
  .stdout()
  .command(['list'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })
})

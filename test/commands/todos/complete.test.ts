import {expect, test} from '@oclif/test'

describe.skip('todos/complete', () => {
  test
  .stdout()
  .command(['complete'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })
})


Flags.string({
  char: 'n',                    // shorter flag version
  description: 'name to print', // help description for flag
  hidden: false,                // hide from help
  multiple: false,              // allow setting this flag multiple times
  env: 'MY_NAME',               // default to value of environment variable
  options: ['a', 'b'],          // only allow the value to be from a discrete set
  parse: input => 'output',     // instead of the user input, return a different value
  default: 'world',             // default value if flag not passed (can be a function that returns a string or undefined)
  required: false,              // make flag required (this is not common and you should probably use an argument instead)
  dependsOn: ['extra-flag'],    // this flag requires another flag
  exclusive: ['extra-flag'],    // this flag cannot be specified alongside this other flag
})
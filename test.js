const test = require('ava');
const jsxToJson = require('.');

test('main', (t) => {
  // Supported JSX syntax
  t.deepEqual(jsxToJson(''), []);
  t.deepEqual(jsxToJson('Test'), ['Test']);
  t.deepEqual(jsxToJson('<>Test</>'), [['Fragment', null, 'Test']]);
  t.deepEqual(jsxToJson('<Test></Test>'), [['Test', {}]]);
  t.deepEqual(jsxToJson('<Test>Test</Test>'), [['Test', {}, 'Test']]);
  t.deepEqual(jsxToJson('<Test><Test /></Test>'), [['Test', {}, ['Test', {}]]]);
  t.deepEqual(jsxToJson('<Test />'), [['Test', {}]]);
  t.deepEqual(jsxToJson('<Test test />'), [['Test', { test: true }]]);
  t.deepEqual(jsxToJson('<Test test="test" />'), [['Test', { test: 'test' }]]);
  t.deepEqual(jsxToJson('<Test test={`test`} />'), [
    ['Test', { test: 'test' }],
  ]);
  t.deepEqual(jsxToJson('<Test test={`test ${1}`} />'), [
    ['Test', { test: 'test 1' }],
  ]);
  t.deepEqual(jsxToJson('<Test test={`test ${["Test"]}`} />'), [
    ['Test', { test: 'test Test' }],
  ]);
  t.deepEqual(jsxToJson('<Test test={test} />'), [['Test', { test: 'test' }]]);
  t.deepEqual(jsxToJson('<Test test={1} />'), [['Test', { test: 1 }]]);
  t.deepEqual(jsxToJson('<Test test={false} />'), [['Test', { test: false }]]);
  t.deepEqual(jsxToJson('<Test test={["Test"]} />'), [
    ['Test', { test: ['Test'] }],
  ]);

  // Unsupported syntax
  t.throws(() => jsxToJson('<Test test={3 + 3} />'), {
    instanceOf: SyntaxError,
  });

  t.throws(() => jsxToJson('<Test>{test}</Test>'), {
    instanceOf: SyntaxError,
  });

  t.throws(() => jsxToJson('<Test test={...xxx} />'), {
    instanceOf: SyntaxError,
  });

  t.throws(() => jsxToJson('<!-- HTML Comment -->'), {
    instanceOf: SyntaxError,
  });
});

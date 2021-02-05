const Parser = require('junitxml-to-javascript');

/**
 * Determine how many test files passed and output to console.
 * This can be extended to send the same data elsewhere, ex: slack, LMS
 */

const branch = process.argv[3] || 'branch';
const username = process.argv[2] || branch;

new Parser()
  .parseXMLFile(__dirname + '/../reports/junit/junit.xml')
  .then((report) => {
    const { testsuites } = report;
    let numSuites = testsuites.length;
    let failedSuites = [];
    let passedSuites = [];
    testsuites.forEach((suite) => {
      const { name, succeeded: numPassed, tests: numTests } = suite;
      if (numPassed === numTests) {
        passedSuites.push(name);
      } else {
        failedSuites.push(name);
      }
    });

    if (passedSuites.length === numSuites) {
      notifyPass(username, numSuites);
    } else {
      notifyFail(username, numSuites, passedSuites, failedSuites);
    }
  })
  .catch((err) => {
    console.error(err.message);
    process.exit(1);
  });

const notifyPass = (username, numSuites) => {
  console.log(`Yay! ${username} passed all ${numSuites} tests!`);
};

const notifyFail = (username, numSuites, passedSuites, failedSuites) => {
  console.log(`${passedSuites.length} / ${numSuites} passed for ${username}`);
  console.log('Failing tests:');
  failedSuites.forEach((name) => console.log(name));
};

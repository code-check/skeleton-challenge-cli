"use strict";

const expect = require("chai").expect;
const codecheck = require("codecheck");
const app = codecheck.consoleApp(process.env.APP_COMMAND);

// TODO: Add tests that you want the applicant to see here.
//       We recommend all test case suites to fulfill the RISES mnemonic.
//       (Readable, Independent, Small, Exhaustive, Speedy)

describe("{{feature description here}}", () => {

  before(() => {
    // TODO: any data / state preparation scripts here.
  });

  it("{{meaningful description of expected behavior}}", () => {
    return app.codecheck("{{enter input here (CLI args)}}")
    .then( result => {
      expect(result.stdout).to.be.ok;
      expect(result.stdout[0]).to.be.ok.and.a('string');
    });
  });

  it("outputs header in the expected format when {{description of condition}}", () => {
    return app.codecheck("{{args}}")
    .then( result => {
      let actualInput = result.stdout[0].trim();
      let expectedInput = "node"
      expect(actualInput).to.contain(expectedInput);
    });
  });

  // TODO: {{more it()s here...}}

});

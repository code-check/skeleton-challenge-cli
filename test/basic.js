"use strict";

const expect = require("chai").expect;
const codecheck = require("codecheck");
const app = codecheck.consoleApp(process.env.APP_COMMAND);

// TODO: all `{{}}` must be populated before the tests will run successfully.
//       We recommend all test case suites to fulfill the RISES mnemonic.
//       (Readable, Independent, Small, Exhaustive, Speedy)

describe(`CLI`, () => {

  before(() => {
    // TODO: any data / state preparation scripts here.
  });

  // TODO: enter name of feature below. (ex: Cache feature)
  describe("{{feature}}", () => {
    // TODO: fill it() text with  meaningful description of the expected behavior.
    it(`outputs a non-empty string when {{description of condition}}`, () => {
      // TODO: enter CLI command args below.
      return app.codecheck("{{args}}")
      .then( result => {
        expect(result.stdout).to.be.ok;
        expect(result.stdout[0]).to.be.ok.and.a('string');
      });
    });

    it(`outputs header in the expected format when {{description of condition}}`, () => {
      return app.codecheck("{{args}}")
      .then( result => {
        let actualHeader = result.stdout[0].trim();
        let expectedHeader = "Subject,Mean"
        expect(actualHeader).to.equal(expectedHeader);
      });
    });

    // {{more unique it()s here...}}

  });

  describe(`{{another feature}}`, () => {

    // {{more unique it()s here...}}

  });
});

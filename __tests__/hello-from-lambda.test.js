// Import all functions from hello-from-lambda.js
const lambda = require("../index.js");
const event = require("../event.json");

// This includes all tests for helloFromLambdaHandler()
describe("Test for hello-from-lambda", function () {
  // This test invokes helloFromLambdaHandler() and compare the result
  it("Verifies successful response", async () => {
    // Invoke helloFromLambdaHandler()
    const result = await lambda.lambdaHandler(event, {
      functionName: "foobar",
    });
    /* 
            The expected result should match the return from your Lambda function.
            e.g. 
            if you change from `const message = 'Hello from Lambda!';` to `const message = 'Hello World!';` in hello-from-lambda.js
            you should change the following line to `const expectedResult = 'Hello World!';`
        */
    const expectedResult = {
      body: '{"message":"hello world"}',
      statusCode: 200,
    };
    // Compare the result with the expected result
    expect(result).toEqual(expectedResult);
  });
});

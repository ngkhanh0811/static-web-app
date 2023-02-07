module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "Test get api";

    context.res = {
        // status: 200, /* Defaults to 200 */
        // cu phap chay api: swa start src --api-location api
        body: responseMessage
    };
}

module.exports = async function (context, req) {
    context.res.json({
        text: "Hello from the API"
    })
}
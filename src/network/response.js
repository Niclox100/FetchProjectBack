exports.success = function(req, res, response, status, logMessage) {
    res.status(status || 200).send(response)
    console.log(logMessage)
}

exports.error = function(req, res, message, status, errorDetails) {
    console.error(errorDetails);
    res.status(status || 500).send({
        "error:": message,
        "body": ""
    })
}
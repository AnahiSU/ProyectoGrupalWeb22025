async function hola(req, res) {
    res.status(200).json({success:true, message: "bievenido al proyecto de los tributos del 11", })
}

module.exports = {
    hola,
}
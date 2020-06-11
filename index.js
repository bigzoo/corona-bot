/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.stats = (req, res) => {
    const location = req.body.text;
    let message = `Retrieving ${location} Corona Stats!`;
    res.status(200).send(message);
  };
  
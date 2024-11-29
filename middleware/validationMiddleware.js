exports.validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    const message = error.details.map((err) => err.message).join(', ');
    return res.status(400).json({ message });
  }
  next();
};

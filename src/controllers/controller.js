const mockPostResponse = require("../../data/mock-data");

exports.getPosts = (req, res) => {
	return res.status(200).json({ data: mockPostResponse })
};

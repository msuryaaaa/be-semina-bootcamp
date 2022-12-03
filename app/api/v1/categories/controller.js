const {
	getAllCategories,
	getOneCategories,
	createCategories,
	updateCategories,
	deleteCategories,
} = require('../../../services/mongoose/categories');

// buat function create
const create = async (req, res, next) => {
	try {
		const { name } = req.body;

		const result = await createCategories(req);

		res.status(201).json({
			data: result,
		});
	} catch (err) {
		next(err);
	}
};

// menampilkan data categories
const index = async (req, res, next) => {
	try {
		const result = await getAllCategories(req);
		res.status(200).json({
			data: result,
		});
	} catch (err) {
		next(err);
	}
};

// menampilkan data by id
const find = async (req, res, next) => {
	try {
		const result = await getOneCategories(req);
		res.status(200).json({
			data: result,
		});
	} catch (err) {
		next(err);
	}
};

// update data categories by id
const update = async (req, res, next) => {
	try {
		const result = await updateCategories(req);
		res.status(200).json({
			data: result,
		});
	} catch (err) {
		next(err);
	}
};

// hapus data categories by id
const destroy = async (req, res, next) => {
	try {
		const result = await deleteCategories(req);
		res.status(200).json({
			data: result,
		});
	} catch (err) {
		next(err);
	}
};

// Export fungsi create pada controller categories
module.exports = {
	create,
	index,
	find,
	update,
	destroy,
};

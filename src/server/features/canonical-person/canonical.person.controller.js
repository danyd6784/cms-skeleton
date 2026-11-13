import canonicalPersonService from "./canonical.person.service.js";
//The controller parses input, calls services and sends responses
const getAll = async (req, res, next) => {
    try {
        let results = null;
        const { query, limit = 50, offset = 0 } = req.query;

        if (query) {
            results = await canonicalPersonService.search({
                query,
                limit,
                offset,
            });
        } else {
            results = await canonicalPersonService.getAll({ limit, offset });
        }
        res.json(results);
    } catch (error) {
        next(error);
    }
};

const getById = async (req, res, next) => {
    try {
        let results = null;
        results = await canonicalPersonService.getCanonicalPerson(req.params.id)
        res.json(results);
    } catch (error) {
        next(error)
    }
}

const create = async (req, res, next) => {
    try{
        let results = null
        results = await canonicalPersonService.createCanonicalPerson(req.body)
        res.status(201).json(results);
    }catch (error) {
        next(error);
    }
}
export default { getAll, getById, create };

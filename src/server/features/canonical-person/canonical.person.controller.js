import canonicalPersonService from "canonical.person.service";
//The controller parses input, calls services and sends responses
const getAll = async (req, res, next) => {
    try {
        const results = null;
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
export default { getAll };

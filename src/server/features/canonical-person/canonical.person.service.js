import canonicalPersonRepository from "./canonical.person.repository.js";

const getAll = async ({ limit = 50, offset = 0 }) => {
    const pageSize = Number(limit);
    const pageOffset = Number(offset);

    if (!Number.isInteger(pageSize) || pageSize < 1 || pageSize > 100) {
        throw new Error("Invalid page size");
    }

    if (!Number.isInteger(pageOffset) || pageOffset < 0) {
        throw new Error("Invalid page offset");
    }

    return canonicalPersonRepository.getAll({
        limit: pageSize,
        offset: pageOffset,
    });
};

export default { getAll };

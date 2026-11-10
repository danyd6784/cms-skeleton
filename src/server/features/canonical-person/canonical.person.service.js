import canonicalPersonRepository from "./canonical.person.repository.js";

const validatePagination = ({limit = 50, offset = 0}) => {
    const pageSize = Number(limit);
    const pageOffset = Number(offset);

    if (!Number.isInteger(pageSize) || pageSize < 1 || pageSize > 100){
        throw new Error("Invalid page size");
    }
    if (!Number.isInteger(pageOffset) || pageOffset < 0){
        throw new Error("Invalid page offset");
    }
    return {
        limit: pageSize,
        offset: pageOffset
    }
}

const getAll = async ({ limit = 50, offset = 0 }) => {
    const pagination = validatePagination({limit, offset});
    return canonicalPersonRepository.getAll(pagination);
};

const search = async ({query, limit = 50, offset = 0}) => {
    const pagination = validatePagination({limit, offset});
    if (typeof query !== "string" || !query.trim()) {
        throw new Error("Search query is required")
    }
    return canonicalPersonRepository.search({
        query: query.trim(),
        ...pagination
    });
}

export default { getAll, search };

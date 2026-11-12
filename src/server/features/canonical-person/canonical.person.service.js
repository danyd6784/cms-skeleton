import canonicalPersonRepository from "./canonical.person.repository.js";

export const createCanonicalPersonService = (repository) => {

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
        return repository.getAll(pagination);
    };
    
    const search = async ({query, limit = 50, offset = 0}) => {
        const pagination = validatePagination({limit, offset});
        if (typeof query !== "string" || !query.trim()) {
            throw new Error("Search query is required")
        }
        return repository.search({
            query: query.trim(),
            ...pagination
        });
    };
    
    const validateCanonicalPersonInformation = ({fname, mname, lname, pfx, sfx}) => {
        if (typeof fname !== "string" || !fname.trim()) {
            throw new Error("Invalid first name")
        }
        if (mname != null && typeof mname !== "string") {
            throw new Error("Invalid middle name");
        }
        if (typeof lname !== "string" || !lname.trim()) {
            throw new Error("Invalid last name")
        }
        if (pfx != null && typeof pfx !== "string") {
            throw new Error("Invalid prefix");
        }
        if (sfx != null && typeof sfx !== "string") {
            throw new Error("Invalid suffix");
        }

        return {
            firstName: fname.trim(),
            middleName: mname?.trim() || null,
            lastName: lname.trim(),
            prefix: pfx?.trim() || null,
            suffix: sfx?.trim() || null
        }
    }

    const createCanonicalPerson = async (personData) => {
        const canonicalPersonInformation = validateCanonicalPersonInformation(personData);
        return repository.insert(canonicalPersonInformation);
    }

    return {getAll, search, createCanonicalPerson};
}

const canonicalPersonService = createCanonicalPersonService(canonicalPersonRepository);

export default canonicalPersonService;

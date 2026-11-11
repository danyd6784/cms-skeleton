import test, { mock } from "node:test"
import assert from "node:assert"
import canonicalPersonService, { createCanonicalPersonService } from "../src/server/features/canonical-person/canonical.person.service.js"

//Test Failures
test("getAll rejects an invalid page size", async () => {
    await assert.rejects(
        canonicalPersonService.getAll({limit: 0}),
        { message: "Invalid page size" }
    )
});
test("getAll rejects a negative page offset", async () => {
    await assert.rejects(
        canonicalPersonService.getAll({offset: -1}),
        { message: "Invalid page offset" }
    )
});
test("search rejects an empty query", async () => {
    await assert.rejects(
        canonicalPersonService.search({query: ""}),
        { message: "Search query is required" }
    )
});

//Limit testing
test("getAll accepts maximum page size", async () => {
    let receivedArguments;
    const mockRepository = {
        getAll: async (pagination) => {
            receivedArguments = pagination;
            return [];
        }
    };
    const service = createCanonicalPersonService(mockRepository);

    await service.getAll({limit: 100});

    assert.deepEqual(
        receivedArguments,
        { limit: 100, offset: 0 }
    );
});

test("getAll passes validated pagination to repository", async () => {
    let receivedArguments;

    const mockRepository = {
        getAll: async (pagination) => {
            receivedArguments = pagination;
            return [
                {canonical_person_id: 1, created_at: "2026-01-01"},
                {canonical_person_id: 2, created_at: "2026-01-02"}
            ]
        }
    }

    const service = createCanonicalPersonService(mockRepository);

    const results = await service.getAll({
        limit: "25",
        offset: "10"
    });

    assert.deepEqual(receivedArguments, {
        limit: 25,
        offset: 10
    })

    assert.equal(results.length, 2);
})


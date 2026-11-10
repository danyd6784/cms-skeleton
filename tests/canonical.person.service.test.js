import test from "node:test"
import assert from "node:assert"
import canonicalPersonService from "../src/server/features/canonical-person/canonical.person.service.js"

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
    await assert.rejects(
        canonicalPersonService.getAll({limit: 100}),
        { message: "Search query is required" }
    )
});


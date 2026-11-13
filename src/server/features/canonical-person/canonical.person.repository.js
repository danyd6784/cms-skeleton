import pool from "../../db/database.js";

const getAll = async ({ limit, offset }) => {
    const result = await pool.query(
        `
        SELECT
            canonical_person_id,
            first_name,
            middle_name,
            last_name,
            prefix,
            suffix,
            created_at,
            updated_at
        FROM canonical_person
        ORDER BY canonical_person_id
        LIMIT $1 OFFSET $2;
        `,
        [limit, offset],
    );

    return result.rows;
};

const search = async ({ query, limit, offset }) => {
    const result = await pool.query(
        `
        SELECT
            canonical_person_id,
            first_name,
            middle_name,
            last_name,
            prefix,
            suffix,
            created_at,
            updated_at
        FROM canonical_person
        WHERE first_name ILIKE $1
            OR middle_name ILIKE $1
            OR last_name ILIKE $1
        ORDER BY canonical_person_id
        LIMIT $2 OFFSET $3;
        `,
        [`%${query}%`, limit, offset],
    );

    return result.rows;
};

const getCanonicalPersonByID = async(personData) => {
    const result = await pool.query(
        `
        SELECT *
        FROM canonical_person
        WHERE canonical_person_id = $1
        `,
        [personData.id]
    )
    return result.rows;
}

const insert = async(personData) => {
    const result = await pool.query(
        `
        INSERT INTO canonical_person
        (first_name, middle_name, last_name, prefix, suffix)
        VALUES($1, $2, $3, $4, $5)

        RETURNING canonical_person_id, first_name, middle_name,
          last_name, prefix, suffix, created_at, updated_at;
        `,
        [
            personData.firstName,
            personData.middleName,
            personData.lastName,
            personData.prefix,
            personData.suffix
        ]
    )
    return result.rows[0];
}

export default { getAll, search, getCanonicalPersonByID, insert };

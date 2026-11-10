import pool from "../../db/database.js";

const getAll = async ({ limit, offset }) => {
    const result = await pool.query(
        `
      SELECT canonical_person_id, created_at
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
        SELECT canonical_person_id, created_at
        FROM canonical_person
        WHERE first_name ILIKE $1
        ORDER BY canonical_person_id
        LIMIT $2 OFFSET $3;
        `,
        [`%${query}%`, limit, offset],
    );

    return result.rows;
};

export default { getAll, search };

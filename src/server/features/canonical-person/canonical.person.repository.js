import pool from "../../db/database.js";

const getAll = async ({ limit, offset }) => {
    const result = await pool.query(
        `
      SELECT person_id, created_at
      FROM canonical_person
      ORDER BY person_id
      LIMIT $1 OFFSET $2;
    `,
        [limit, offset],
    );

    return result.rows;
};

export default { getAll };

CREATE TABLE CANONICAL_PERSON (
    canonical_person_id         BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    first_name                  TEXT,
    middle_name                 TEXT,
    last_name                   TEXT,
    prefix                      TEXT,
    suffix                      TEXT,
    created_at                  TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at                  TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE PERSON_RECORD (
    person_record_id            BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    canonical_person_id         BIGINT REFERENCES CANONICAL_PERSON(canonical_person_id),
    first_name                  TEXT,
    middle_name                 TEXT,
    last_name                   TEXT,
    prefix                      TEXT,
    suffix                      TEXT,
    address_line_1              TEXT,
    address_line_2              TEXT,
    city                        TEXT,
    state                       TEXT,
    postal_code                 TEXT,
    phone_number                TEXT,
    email                       TEXT,
    is_primary                  BOOLEAN,
    created_at                  TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at                  TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE PERSON_MATCH (
    person_match_id             BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    person_record_a_id          BIGINT REFERENCES PERSON_RECORD(person_record_id),
    person_record_b_id          BIGINT REFERENCES PERSON_RECORD(person_record_id),
    method                      TEXT,
    confidence                  DECIMAL,
    created_at                  TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE PERSON_MATCH_REVIEW (
    person_match_review_id      BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    person_match_id             BIGINT REFERENCES PERSON_MATCH(person_match_id),
    decision                    TEXT,
    reviewed_by                 BIGINT,
    reviewed_at                 TIMESTAMP,
    notes                       TEXT
);

CREATE TABLE CASES (
    case_id                     BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    case_number                 TEXT,
    case_type                   TEXT,
    status                      TEXT,
    filed_at                    TIMESTAMP,
    closed_at                   TIMESTAMP,
    created_at                  TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at                  TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE CASE_PARTICIPANT_HISTORY (
    case_participant_history_id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    case_id                     BIGINT REFERENCES CASES(case_id),
    person_record_id            BIGINT REFERENCES PERSON_RECORD(person_record_id),
    role                        TEXT,
    effective_from              TIMESTAMP,
    effective_to                TIMESTAMP,
    created_at                  TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at                  TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE EVENTS (
    event_id                    BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    case_id                     BIGINT REFERENCES CASES(case_id),
    event_type                  TEXT,
    status                      TEXT,
    scheduled_at                TIMESTAMP,
    completed_at                TIMESTAMP,
    created_at                  TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at                  TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE EVENT_PARTICIPANT (
    event_participant_id        BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    event_id                    BIGINT REFERENCES EVENTS(event_id),
    person_record_id            BIGINT REFERENCES PERSON_RECORD(person_record_id),
    role                        TEXT,
    created_at                  TIMESTAMPTZ  NOT NULL DEFAULT CURRENT_TIMESTAMP
);

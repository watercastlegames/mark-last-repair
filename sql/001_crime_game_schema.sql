/* CASE 01 - 마크의 마지막 수리 / Microsoft SQL Server */
SET XACT_ABORT ON;

CREATE TABLE CrimeUsers (
  user_id BIGINT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  google_sub VARCHAR(64) NOT NULL,
  display_name NVARCHAR(80) NOT NULL,
  avatar_url NVARCHAR(500) NULL,
  created_at DATETIME2 NOT NULL CONSTRAINT DF_CrimeUsers_Created DEFAULT SYSUTCDATETIME(),
  CONSTRAINT UQ_CrimeUsers_GoogleSub UNIQUE (google_sub)
);

CREATE TABLE CrimeCases (
  case_id INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  slug VARCHAR(80) NOT NULL,
  version_no INT NOT NULL,
  title NVARCHAR(120) NOT NULL,
  is_active BIT NOT NULL CONSTRAINT DF_CrimeCases_Active DEFAULT 1,
  created_at DATETIME2 NOT NULL CONSTRAINT DF_CrimeCases_Created DEFAULT SYSUTCDATETIME(),
  CONSTRAINT UQ_CrimeCases_SlugVersion UNIQUE (slug, version_no)
);

CREATE TABLE CrimeAttempts (
  attempt_id BIGINT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  user_id BIGINT NOT NULL,
  case_id INT NOT NULL,
  status VARCHAR(20) NOT NULL CONSTRAINT DF_CrimeAttempts_Status DEFAULT 'in_progress',
  phase VARCHAR(40) NOT NULL CONSTRAINT DF_CrimeAttempts_Phase DEFAULT 'ROUND_INTRO',
  current_round TINYINT NOT NULL CONSTRAINT DF_CrimeAttempts_Round DEFAULT 1,
  penalty_ms INT NOT NULL CONSTRAINT DF_CrimeAttempts_Penalty DEFAULT 0,
  questions_used TINYINT NOT NULL CONSTRAINT DF_CrimeAttempts_Questions DEFAULT 0,
  solved BIT NULL,
  started_at DATETIME2 NOT NULL CONSTRAINT DF_CrimeAttempts_Started DEFAULT SYSUTCDATETIME(),
  updated_at DATETIME2 NOT NULL CONSTRAINT DF_CrimeAttempts_Updated DEFAULT SYSUTCDATETIME(),
  completed_at DATETIME2 NULL,
  official_time_ms BIGINT NULL,
  CONSTRAINT FK_CrimeAttempts_User FOREIGN KEY (user_id) REFERENCES CrimeUsers(user_id),
  CONSTRAINT FK_CrimeAttempts_Case FOREIGN KEY (case_id) REFERENCES CrimeCases(case_id),
  CONSTRAINT UQ_CrimeAttempts_UserCase UNIQUE (user_id, case_id),
  CONSTRAINT CK_CrimeAttempts_Status CHECK (status IN ('in_progress','completed')),
  CONSTRAINT CK_CrimeAttempts_Round CHECK (current_round BETWEEN 1 AND 4)
);

CREATE TABLE CrimeAttemptEvents (
  event_id BIGINT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  attempt_id BIGINT NOT NULL,
  seq_no INT NOT NULL,
  event_type VARCHAR(40) NOT NULL,
  round_no TINYINT NULL,
  payload_json NVARCHAR(MAX) NULL,
  server_at DATETIME2 NOT NULL CONSTRAINT DF_CrimeEvents_At DEFAULT SYSUTCDATETIME(),
  CONSTRAINT FK_CrimeEvents_Attempt FOREIGN KEY (attempt_id) REFERENCES CrimeAttempts(attempt_id),
  CONSTRAINT UQ_CrimeEvents_Seq UNIQUE (attempt_id, seq_no)
);

CREATE TABLE CrimeOpenedClues (
  attempt_id BIGINT NOT NULL,
  round_no TINYINT NOT NULL,
  clue_id VARCHAR(40) NOT NULL,
  opened_at DATETIME2 NOT NULL CONSTRAINT DF_CrimeOpenedClues_At DEFAULT SYSUTCDATETIME(),
  CONSTRAINT PK_CrimeOpenedClues PRIMARY KEY (attempt_id, round_no, clue_id),
  CONSTRAINT FK_CrimeOpenedClues_Attempt FOREIGN KEY (attempt_id) REFERENCES CrimeAttempts(attempt_id)
);

CREATE TABLE CrimeCompanionHints (
  attempt_id BIGINT NOT NULL,
  round_no TINYINT NOT NULL,
  companion_id VARCHAR(30) NOT NULL,
  comment_text NVARCHAR(300) NOT NULL,
  question_text NVARCHAR(150) NOT NULL,
  ai_source VARCHAR(20) NOT NULL CONSTRAINT DF_CrimeHints_Source DEFAULT 'fallback',
  created_at DATETIME2 NOT NULL CONSTRAINT DF_CrimeHints_At DEFAULT SYSUTCDATETIME(),
  CONSTRAINT PK_CrimeCompanionHints PRIMARY KEY (attempt_id, round_no, companion_id),
  CONSTRAINT FK_CrimeHints_Attempt FOREIGN KEY (attempt_id) REFERENCES CrimeAttempts(attempt_id)
);

CREATE TABLE CrimeQuestions (
  question_id BIGINT IDENTITY(1,1) NOT NULL PRIMARY KEY,
  attempt_id BIGINT NOT NULL,
  round_no TINYINT NOT NULL,
  question_no TINYINT NOT NULL,
  source_companion_id VARCHAR(30) NULL,
  question_text NVARCHAR(150) NOT NULL,
  answer_category VARCHAR(20) NULL,
  answer_source VARCHAR(20) NULL,
  penalty_ms INT NOT NULL CONSTRAINT DF_CrimeQuestions_Penalty DEFAULT 60000,
  reserved_at DATETIME2 NOT NULL CONSTRAINT DF_CrimeQuestions_Reserved DEFAULT SYSUTCDATETIME(),
  committed_at DATETIME2 NULL,
  CONSTRAINT FK_CrimeQuestions_Attempt FOREIGN KEY (attempt_id) REFERENCES CrimeAttempts(attempt_id),
  CONSTRAINT UQ_CrimeQuestions_RoundNo UNIQUE (attempt_id, round_no, question_no),
  CONSTRAINT CK_CrimeQuestions_Category CHECK (answer_category IS NULL OR answer_category IN ('YES','NO','MAYBE','IRRELEVANT'))
);

CREATE TABLE CrimeFinalAnswers (
  attempt_id BIGINT NOT NULL PRIMARY KEY,
  answer_json NVARCHAR(MAX) NOT NULL,
  solved BIT NOT NULL,
  submitted_at DATETIME2 NOT NULL CONSTRAINT DF_CrimeFinalAnswers_At DEFAULT SYSUTCDATETIME(),
  CONSTRAINT FK_CrimeFinalAnswers_Attempt FOREIGN KEY (attempt_id) REFERENCES CrimeAttempts(attempt_id)
);

CREATE INDEX IX_CrimeAttempts_Ranking ON CrimeAttempts(case_id, status, solved, questions_used, official_time_ms, completed_at);
CREATE INDEX IX_CrimeQuestions_AttemptRound ON CrimeQuestions(attempt_id, round_no);

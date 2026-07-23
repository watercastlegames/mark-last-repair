/* 기존에 001을 먼저 적용한 서버에서만 1회 실행 */
IF COL_LENGTH('CrimeAttempts', 'updated_at') IS NULL
BEGIN
  ALTER TABLE CrimeAttempts ADD updated_at DATETIME2 NULL;
  UPDATE CrimeAttempts SET updated_at = started_at WHERE updated_at IS NULL;
  ALTER TABLE CrimeAttempts ALTER COLUMN updated_at DATETIME2 NOT NULL;
  ALTER TABLE CrimeAttempts ADD CONSTRAINT DF_CrimeAttempts_Updated DEFAULT SYSUTCDATETIME() FOR updated_at;
END;

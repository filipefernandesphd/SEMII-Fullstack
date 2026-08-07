import assert from "node:assert/strict";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";

import { findRepositoryRoot } from "./check-content.mjs";

test("finds a checkout root without ignored operational files", async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), "content-root-"));
  t.after(() => rm(root, { recursive: true, force: true }));

  for (const marker of [
    "course.config.json",
    "course.config.schema.json",
    "schedule.schema.json",
  ]) {
    await writeFile(path.join(root, marker), "{}\n");
  }

  const nested = path.join(root, "2026.2", "aula-00", "slides");
  await mkdir(nested, { recursive: true });

  assert.equal(await findRepositoryRoot(nested), root);
});

test("does not accept a directory with only course.config.json", async (t) => {
  const root = await mkdtemp(path.join(os.tmpdir(), "content-root-"));
  t.after(() => rm(root, { recursive: true, force: true }));

  for (const marker of [
    "course.config.json",
    "course.config.schema.json",
    "schedule.schema.json",
  ]) {
    await writeFile(path.join(root, marker), "{}\n");
  }

  const incomplete = path.join(root, "nested");
  await mkdir(incomplete);
  await writeFile(path.join(incomplete, "course.config.json"), "{}\n");

  assert.equal(await findRepositoryRoot(incomplete), root);
});

// The Tired Dark Lord: A 100-Word Villain Monologue
// Writes the monologue to /output/entry.txt (pure Node standard library).
import { mkdirSync, writeFileSync } from "node:fs";

const MONOLOGUE =
  "Come in. Mind the third step \u2014 it sighs louder than my prisoners do, " +
  "and I've stopped oiling it. Thirty years I've kept this pass: nine tolls, " +
  "one stamp, one wax seal. Sit. The kettle's on; the rebellion can wait till " +
  "the tea's poured \u2014 it always does. You want the crown? Second drawer, " +
  "under the unanswered letters. Take it. Only sign the ledger first. Someone " +
  "must keep the roads lit, the grain full, the border held. I've held it " +
  "since your grandfather learned to lie. Swing, then. I'll shut my " +
  "eyes. Not for mercy. The lamplight hurts them now.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MONOLOGUE, "utf8");

const words = MONOLOGUE.trim().split(/\s+/).length;
console.log(`wrote /output/entry.txt (${MONOLOGUE.length} chars, ${words} words)`);

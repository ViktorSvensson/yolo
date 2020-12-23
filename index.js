/**
 * @author     Carl Viktor Svensson
 * @license    Apache License 2.0
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND.
 */

/**
 * Attempts to execute the provided function, and silently
 * ignores any errors thrown during execution. If the
 * function executes successfully, the output (if any) is
 * returned.
 *
 * @export
 * @template T
 * @param {() => T} f
 * @returns T
 */
function yolo(f) {
  try {
    return f();
  } catch (_a) {}
}
module.exports = yolo;

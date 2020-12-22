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
 * Checklist to see if this is for you:
 *
 * 1. I want to run some code
 * 2. I give no less than zero nasty words about any errors
 * 3. Give me whatever is returned or keep quiet
 *
 * ```javascript
 * import yolo from "@floss/yolo";
 * const response = yolo(function () {
 *   let result;
 *   // here lies some dark stuff...
 *   return result
 * });
 * console.log(response);
 * // Alt 1. undefined (if an error was thrown)
 * // Alt 2. anything (if your code was somehow error-free)
 * ```
 *
 * @template T
 * @param {() => T} f
 * @returns T
 */
module.exports = function yolo(f) {
  try {
    return f();
  } catch {}
};

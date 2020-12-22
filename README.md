# @floss/yolo

Checklist to see if this is for you:

1. I want to run some code
2. I give no less than zero nasty words about any errors
3. Give me whatever is returned or keep quiet

```javascript
import yolo from "@floss/yolo";
const response = yolo(function () {
  let result;
  // here lies some dark stuff...
  return result
});
console.log(response); 
// Alt 1. undefined (if an error was thrown)
// Alt 2. anything (if your code was somehow error-free)
```

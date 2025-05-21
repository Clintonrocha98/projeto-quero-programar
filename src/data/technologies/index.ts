import { cssLinks } from "./css";
import { goLinks } from "./go";
import { htmlLinks } from "./html";
import { javaLinks } from "./java";
import { javascriptLinks } from "./javascript";
import { phpLinks } from "./php";
import { pythonLinks } from "./python";
import { typescriptLinks } from "./typescript";

const technologiesData = {
  "javascript": {
    title: "javascript",
    resources: javascriptLinks
  },
  "css": {
    title: "css",
    resources: cssLinks
  },
  "html": {
    title: "html",
    resources: htmlLinks
  },
  "php": {
    title: "php",
    resources: phpLinks
  },
  "typescript": {
    title: "typescript",
    resources: typescriptLinks
  },
  "python": {
    title: "python",
    resources: pythonLinks
  },
  "go": {
    title: "go",
    resources: goLinks
  },
  "java": {
    title: "java",
    resources: javaLinks
  }
}

export { technologiesData };
import fsPromises from "node:fs/promises";

console.log("mkdir _site");
if (await fsPromises.mkdir("_site/", { recursive: true }) === undefined) {
    console.log("  already exists");
}

console.log("cp assets/ _site/");
await fsPromises.cp("assets/", "_site/", { recursive: true });

console.log("finished");

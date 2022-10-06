import * as fs from "node:fs";

const contr = new AbortController();

const { signal } = contr;

fs.writeFile(
  "message.txt",
  "Hello World ",
  { encoding: "utf-8", signal },
  (error) => {
    if (error) {
      console.error(error);
      return;
    }
    console.log("File created");
  }
);

// // contr.abort(); Se viene chiamato il metodo abort() ci il file rimane vuoto e ci viene dato l'errore abort

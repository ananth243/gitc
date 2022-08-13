import { existsSync, readFile, writeFile, unlinkSync } from "fs";
import * as readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";
import { createRepository } from "./createRepository";

export async function getPAT(
  repo: string,
  pvt: true | undefined,
  homepage: string | undefined,
  description: string | undefined,
  purge: true | undefined
) {
  try {
    const exists = existsSync("config.json");
    if(purge && exists) unlinkSync("./config.json");
    let auth: string | void;
    if (!exists) {
      const rl = readline.createInterface({ input, output });
      rl.question(
        "Please enter a PAT that has create private repository rights:\n",
        (PAT) => {
          auth = PAT;
          rl.close();
          writeFile("config.json", JSON.stringify({ PAT: auth }), () => {});
          createRepository(auth, repo, pvt, homepage, description);
        }
      );
    } else {
      readFile("config.json", (err, data) => {
        if (err) throw err;
        auth = JSON.parse(data.toString()).PAT;
        createRepository(auth, repo, pvt, homepage, description);
      });
    }
  } catch (error) {
    console.error(error);
  }
}

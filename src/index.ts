import { options } from "./interfaces";
import { program } from "commander";
import { getPAT } from "./util/getPAT";

program
  .name("gitc")
  .description("CLI to create a GitHub Repository")
  .version("1.0.0");

program
  .option("-p,--private")
  .requiredOption("-n,--name <string>", "Repository must have a name")
  .option("-d,--description <string>")
  .option("-hp,--homepage <string>")
  .option('-rm,--remove');

program.parse();

const {
  private: pvt,
  name: repo,
  description,
  homepage,
  remove:purge
}: options = program.opts();

getPAT(repo, pvt, homepage, description, purge);

import { Octokit } from "octokit";

export async function createRepository(
  auth: string | void,
  repo: string,
  pvt: true | undefined,
  homepage: string | undefined,
  description: string | undefined
) {
  try {
    const body = {
      name: repo,
      private: pvt ? true : false,
      homepage,
      description,
    };
    const octokit = new Octokit({
      auth,
    });
    const response = await octokit.request("POST /user/repos", body);
    if (response.status !== 201) throw Error("Could not create repository");
    const { ssh_url, html_url, svn_url } = response.data;
    // Add data to console
    console.log(`\x1b[31mRepository created at ${svn_url}.`, "\x1b[0m");
    console.log(`\x1b[34mReponame: ${body.name}`, "\x1b[0m");
    console.log(`\x1b[34mPrivate: ${body.private}`, "\x1b[0m");
    if (description)
      console.log(`\x1b[34mDescription: ${body.description}`, "\x1b[0m");
    if (homepage) console.log(`\x1b[34mHomepage: ${body.homepage}`, "\x1b[0m");
    console.log(`ssh: ${ssh_url}`);
    console.log(`git: ${html_url}`);
  } catch (error) {
    console.error(error);
  }
}

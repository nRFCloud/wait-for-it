# Contributing to `@nrfcloud/wait-for-it`

This is a published library
([`@nrfcloud/wait-for-it`](https://jsr.io/@nrfcloud/wait-for-it) on JSR). The
sections below cover the development setup, how to test your changes, and how a
new version gets released.

## Development setup

1. Ensure you
   [have GitHub push access](https://nordicsemi.atlassian.net/wiki/spaces/MFLT/pages/1727136233/Nordic+Engineering+Tools+Setup+go+eng-tools#nRFCloud-Organization).
1. Get your environment set up by running `npm ci`
1. Make your changes locally in a git clone of the repo in your own branch.
1. As you go, commit along the way so that you get type checking, testing, etc.
   to run.

## Testing

Run `npm test` for the unit tests. They run on Node.js' built-in test runner
(`node --test`) directly against the TypeScript sources.

> [!NOTE]  
> If something in this section does not work, check out the commands in
> [`.github/workflows/test-and-release.yaml`](.github/workflows/test-and-release.yaml),
> which installs dependencies and runs the tests for every commit.

## Squash your commits

1. Finally, create a commit that packages up all the changes.
1. Use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
   (e.g. `fix:`, `feat:`, etc.) to prefix the title.
1. Reference any applicable Jira tickets (e.g. `NPE-123`) in the commit message.
1. Push your branch and create a pull request.
1. Get the code reviewed.
1. Once approved and CI passes, rebase or squash away!

## Releasing a new version

1. [`semantic-release` in the Test&Release workflow](.github/workflows/test-and-release.yaml)
   takes care of determining the next version from the conventional commits,
   creating a new GitHub release and publishing the package to
   [JSR](https://jsr.io/@nrfcloud/wait-for-it).

Once a new version is published, consumers can bump the dependency to pick it
up.

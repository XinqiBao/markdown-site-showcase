import path from "path"
import { FilePath } from "./path"
import { globby } from "globby"

export function shouldUseGitIgnore(): boolean {
  return process.env.QUARTZ_USE_GITIGNORE !== "false"
}

export function toPosixPath(fp: string): string {
  return fp.split(path.sep).join("/")
}

export async function glob(
  pattern: string,
  cwd: string,
  ignorePatterns: string[],
): Promise<FilePath[]> {
  const fps = (
    await globby(pattern, {
      cwd,
      ignore: ignorePatterns,
      gitignore: shouldUseGitIgnore(),
    })
  ).map(toPosixPath)
  return fps as FilePath[]
}

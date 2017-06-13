/**
 *    Copyright 2017 PeopleWare n.v.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const GitInfo = require("../GitInfo");
const util = require("./_util");

const thisGitRepoRoot = "../../";
const someBranchNames = ["", null, undefined, "simple_branch-name", "nested/branch/name"];
//noinspection SpellCheckingInspection
const aSha = "b557eb5aabebf72f84ae9750be2ad1b7b6b43a4b";

describe("GitInfo", function() {
  describe("constructor", function() {
    const path = thisGitRepoRoot;
    someBranchNames.forEach(branch => {
      const sha = aSha;
      it("should return a GitInfo with the  expected properties for "
        + "path === \"" + path + "\""
        + "sha === \"" + sha + "\""
        + "branch === \"" + branch + "\"",
        function() {
          util.validateConditions(GitInfo.constructorContract.pre, [path, sha, branch]);
          const result = new GitInfo(path, sha, branch);
          util.validateConditions(GitInfo.constructorContract.post, [path, sha, branch, result]);
          util.validateInvariants(result);
        });
    });
  });
});

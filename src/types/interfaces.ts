export interface Branch {
  id: string;
  target: string;
}

export interface Commit {
  id: string;
  root?: boolean;
  parents: string[];
}

export interface Head {
  id: string;
  target: string;
}

export interface GitTree {
  HEAD: Head;
  commits: Commit[];
  branches: Branch[];
}

class Tree {
  constructor() {
    this.root = new Node();
  }

  add(word) {
    let current = this.root;
    for (let i = 0; i < word.length; i++) {
      const c = word[i];
      const node = new Node(c);

      if (!this.children[c]) {
        current.addChild(node);
        current = node;

        if (i < word.length - 1)
          node.setExists(false);
      } else {
        current = current.children[c];

        if (i === word.length - 1)
          node.setExists(true);
      }
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.exists = true;
    this.children = {};
  }

  setExists(bool) {
    this.exists = bool;
  }

  addChild(node) {
    const value = node.value;
    if (value && !this.children[value])
      this.children[value] = node;
  }
}

// construct tree letter by letter
// create ghost letters for words that cannot be constructed letter by letter yet
// remove ghost status if letter shows up

// do DFS and record longest word until end
const recursiveDFS = function (node) {
  let longest = '';
  let children = node.children.values();
  children = children.filter(child => child.exists);

  if (children.length === 0)
    return node.value;

  const longestChildren = children.map(child =>
    node.value + recursiveDFS(child) // can use array for O(1) if this is O(n)
  );

  for (const child in longestChildren) {
    if (child.length > longest.length) {
      longest = child;
    }
  }
  return longest;
};

const longestWord = function (words) {
  const tree = new Tree();

  for (const word in words)
    tree.add(word);

  // dfs find longest
  return recursiveDFS(tree.root);
};
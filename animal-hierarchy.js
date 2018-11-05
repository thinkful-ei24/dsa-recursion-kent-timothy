const animalHierarchy = [
  { id: 'Animals', parent: null },
  { id: 'Mammals', parent: 'Animals' },
  { id: 'Dogs', parent:'Mammals' },
  { id: 'Cats', parent:'Mammals' },
  { id: 'Golden Retriever', parent: 'Dogs' },
  { id: 'Husky', parent:'Dogs' },
  { id: 'Bengal', parent:'Cats' }
];

// ==============================
function traverse(animalHierarchy, parent) {
  let node = {};
  animalHierarchy.filter(item => item.parent === parent)
    .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
  return node;
}

const result = JSON.stringify(traverse(animalHierarchy, null));
console.log(result);

// traverse(animalHierarchy, null)
// traverse(animalHierarchy, 'Animals')
// traverse(animalHierarchy, 'Mammals')
// traverse(animalHierarchy, 'Dogs')
// traverse(animalHierarchy, 'Golden Retriever')
// returns {}
// return {"Golden Retriever": {}}
// traverse(animalHierarchy, 'Husky')
// returns {}
// return {"Husky": {}}
// traverse(animalHierarchy, 'Cats')
// traverse(animalHierarchy, 'Bengal')
// returns {}
// return {"Bengal": {}}
// return {"Dogs": {"Golden Retriever": {}, "Husky": {}}, "Cats": {"Bengal": {}}}
// return {"Mammals": {"Dogs": {"Golden Retriever": {}, "Husky": {}}, "Cats": {"Bengal": {}}}}

// return {"Animals": {"Mammals": {"Dogs": {"Golden Retriever": {}, "Husky": {}}, "Cats": {"Bengal": {}}}}}
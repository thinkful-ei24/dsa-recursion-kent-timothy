const animalHierarchy = [
  {id: 'Animals', parent: null},
  {id: 'Mammals', parent: 'Animals'},
  {id: 'Dogs', parent:'Mammals' },
  {id: 'Cats', parent:'Mammals' },
  {id: 'Golden Retriever', parent: 'Dogs'},
  {id: 'Husky', parent:'Dogs' },
  {id: 'Bengal', parent:'Cats' }
];

const facebookHierarchy = [
  { id:'Zuckerberg', parent: null },
  { id:'Schroepfer', parent: 'Zuckerberg' },
  { id:'Bosworth', parent: 'Schroepfer' },
  { id:'Steve', parent: 'Bosworth' },
  { id:'Kyle', parent: 'Bosworth' },
  { id:'Andra', parent: 'Bosworth' },
  { id:'Zhao', parent: 'Schroepfer' },
  { id:'Richie', parent: 'Zhao' },
  { id:'Sofia', parent: 'Zhao' },
  { id:'Jen', parent: 'Zhao' },
  { id:'Schrage', parent: 'Zuckerberg' },
  { id:'VanDyck', parent: 'Schrage' },
  { id:'Sabrina', parent: 'VanDyck' },
  { id:'Michelle', parent: 'VanDyck' },
  { id:'Josh', parent: 'VanDyck' },
  { id:'Swain', parent: 'Schrage' },
  { id:'Blanch', parent: 'Swain' },
  { id:'Tom', parent: 'Swain' },
  { id:'Joe', parent: 'Swain' },
  { id:'Sandberg', parent: 'Zuckerberg' },
  { id:'Goler', parent: 'Sandberg' },
  { id:'Eddie', parent: 'Goler' },
  { id:'Julie', parent: 'Goler' },
  { id:'Annie', parent: 'Goler' },
  { id:'Hernandez', parent: 'Sandberg' },
  { id:'Rowi', parent: 'Hernandez' },
  { id:'Inga', parent: 'Hernandez' },
  { id:'Morgan', parent: 'Hernandez' },
  { id:'Moissinac', parent: 'Sandberg' },
  { id:'Amy', parent: 'Moissinac' },
  { id:'Chuck', parent: 'Moissinac' },
  { id:'Vinni', parent: 'Moissinac' },
  { id:'Kelley', parent: 'Sandberg' },
  { id:'Eric', parent: 'Kelley' },
  { id:'Ana', parent: 'Kelley' },
  { id:'Wes', parent: 'Kelley' },
];

function traverse(organization, parent = null){
  let node = {};
  organization.filter(item => item.parent === parent)
    .forEach(item => node[item.id] = traverse(organization, item.id));

  return node;
}

function printOrganization(object, tabs = 0){
  const indentation = '    '.repeat(tabs);

  // base case
  if(!Object.keys(object).length){
    return;
  }

  // general case 
  Object.keys(object).forEach(key => {
    console.log(`${indentation}${key}`);
    printOrganization(object[key], tabs + 1);
  })
}

printOrganization(traverse(animalHierarchy));
printOrganization(traverse(facebookHierarchy));


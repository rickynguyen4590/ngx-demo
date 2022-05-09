export const loadFromJS = async () => {
  const result = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  console.log('Load From JS', result);
  return result;
};

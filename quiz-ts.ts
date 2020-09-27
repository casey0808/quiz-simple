// * 当我们在业务中从后端获取数据后，需要处理和使用数据。
// * 给下这段的代码加上 TypeScript 类型声明，以便更好地使用数据。

// * ---------------- 请补充……




const getData = async (): Promise<string> =>
  await fetch('https://jsonplaceholder.typicode.com/todos/').then((response) => response.json());

getData().then((e) => console.log(e));

// * ---------------- TS 的示例

// * 如果你没用过 TS，可以试着快速学习一下

{
  // * TS 类型声明
  type MyObj = {
    id: string;
    name: string;
  };

  // * 最基本的 TS == JS 加上 类型
  const getId = (obj: MyObj): string => obj.id;

  const id = getId({ id: 'user02', name: 'LC' });
  console.log(id.startsWith('user'));
}

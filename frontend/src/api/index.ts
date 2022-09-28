export const fetchChores = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          title: 'Task 1',
          status: 'active'
        },
        {
          title: 'Task 2',
          status: 'active'
        },
        {
          title: 'Task 3',
          status: 'active'
        },
        {
          title: 'Task 4',
          status: 'active'
        }
      ]);
    }, 750)
  })
}
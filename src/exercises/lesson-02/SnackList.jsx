function SnackList() {
  const snacks = [
    {
      name: 'Bread',
      rank: '5',
    },
    {
      name: 'Cheese',
      rank: '4',
    },
    {
      name: 'Orange',
      rank: '3',
    },
    {
      name: 'Cookies',
      rank: '2',
    },
    {
      name: 'Chocolate',
      rank: '1',
    },
  ];

  const sortedSnack = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <ol>
      {sortedSnack.map((element) => (
        <li key={element.rank}>{element.name}</li>
      ))}
    </ol>
  );
}

export default SnackList;

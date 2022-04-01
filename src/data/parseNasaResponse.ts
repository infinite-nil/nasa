import { Item } from "~/types";

const reducePredicate = (acc, cur) => [
  ...acc,
  { ...cur.data[0], image: cur.links[0].href },
];

const sortPredicate = (a, b) => {
  const firstDate = new Date(a.date_created);
  const secondDate = new Date(b.date_created);

  return firstDate.getTime() - secondDate.getTime();
};

function generateGraphData(data: Item[]) {
  const flatData = data.reduce(reducePredicate, []).sort(sortPredicate);
  const map = {};

  flatData.forEach((item) => {
    const date = item.date_created.split("T")[0];

    if (!map[date]) {
      map[date] = {
        count: 1,
        date,
        image: item.image,
      };
    } else {
      map[date].count++;
    }
  });

  return Object.values(map);
}

export { generateGraphData };

import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Center, Title } from "~/ui/components";
import { fetchNasaData } from "~/services";
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

export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { query } = useRouter();
  const renderData = generateGraphData(data.items);

  console.log(">>>", renderData);

  return (
    <Center height="calc(100vh - 58px)" width="100%" direction="column">
      <Center direction="column" width="400px">
        <Title>{query.term}</Title>
      </Center>
      <Center width="100vw" height="400px">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={renderData}>
            <XAxis dataKey="date" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area dataKey="count" />
          </AreaChart>
        </ResponsiveContainer>
      </Center>
    </Center>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  const data = await fetchNasaData(query.term as string);

  if (data.ok) {
    return {
      props: {
        data: data.data.collection,
      },
    };
  }

  return {
    props: {
      error: "Something went wrong",
    },
  };
}

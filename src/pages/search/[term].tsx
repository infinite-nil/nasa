import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { Center, Title } from "~/ui/components";
import { fetchNasaData } from "~/services";
import { Item } from "~/types";

function generateGraphData(data: Item[]) {
  const map = {};

  return [map];
}

export default function Home({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { query } = useRouter();
  const renderData = generateGraphData(data.items);

  return (
    <Center height="100vh" width="100%">
      <Center direction="column" width="400px">
        <Title>{query.term}</Title>
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

import { InferGetServerSidePropsType, GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { Center, Graph, Title, Error } from "~/ui/components";
import { fetchNasaData } from "~/services";
import { generateGraphData } from "~/data";

export default function Search({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { query } = useRouter();

  return (
    <Center height="calc(100vh - 58px)" width="100%" direction="column">
      <Center direction="column" width="400px">
        <Title>{query.term}</Title>
        {data.length < 1 && <Error>Something went wrong</Error>}
      </Center>
      {data.length > 0 && <Graph data={data} />}
    </Center>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { query } = context;
  const data = await fetchNasaData(query.term as string);

  if (data.ok) {
    return {
      props: {
        data: generateGraphData(data.data.collection.items),
      },
    };
  }

  return {
    props: {
      error: "Something went wrong",
    },
  };
}

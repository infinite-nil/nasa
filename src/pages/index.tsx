import { Center, SearchInput, Title } from "~/ui/components";

export default function Home() {
  return (
    <Center height="100vh" width="100%">
      <Center direction="column" width="400px">
        <Title>Nasa search</Title>
        <SearchInput />
      </Center>
    </Center>
  );
}

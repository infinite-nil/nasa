import { useRouter } from "next/router";
import { Button, Center, SearchInput, Title } from "~/ui/components";
import { useSearch } from "~/hooks";
import { FormEvent } from "react";

export default function Home() {
  const router = useRouter();
  const { query, setQuery } = useSearch();

  function navigateToSearchPage(query: string) {
    if (query) {
      router.push(`/search/${query}`);
    }
  }

  function handleSearchInputChange(event: FormEvent<HTMLInputElement>) {
    setQuery(event.currentTarget.value);
  }

  return (
    <Center height="100vh" width="100%">
      <Center direction="column" width="400px">
        <Title>Nasa search</Title>
        <Center width="100%">
          <SearchInput
            onChange={handleSearchInputChange}
            onPressEnter={() => navigateToSearchPage(query)}
          />
          <Button onClick={() => navigateToSearchPage(query)} disabled={!query}>
            Search
          </Button>
        </Center>
      </Center>
    </Center>
  );
}

import { InputHTMLAttributes } from "react";
import { Input, Wrapper } from "./search-input.styles";

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>;

const SearchInput = (props: SearchInputProps) => {
  return (
    <Wrapper>
      <Input type="search" {...props} />
    </Wrapper>
  );
};

export { SearchInput };

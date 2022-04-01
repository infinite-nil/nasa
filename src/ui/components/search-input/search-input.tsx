import { InputHTMLAttributes } from "react";
import { useKey } from "react-use";
import { Input, Wrapper } from "./search-input.styles";

type SearchInputProps = InputHTMLAttributes<HTMLInputElement> & {
  onPressEnter: () => void;
};

const SearchInput = ({ onPressEnter, ...props }: SearchInputProps) => {
  useKey("Enter", onPressEnter, {}, [onPressEnter]);

  return (
    <Wrapper>
      <Input type="search" {...props} />
    </Wrapper>
  );
};

export { SearchInput };

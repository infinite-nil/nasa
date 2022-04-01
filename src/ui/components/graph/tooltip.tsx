import { Image, Label, Wrapper } from "./tooltip.styles";

function GraphTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    const data = payload[0];

    return (
      <Wrapper>
        <Label>{label}</Label>
        <Image src={data.payload.image} />
      </Wrapper>
    );
  }
}

export { GraphTooltip };

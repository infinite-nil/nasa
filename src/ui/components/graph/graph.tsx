import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Center } from "~/ui/components";
import { GraphTooltip } from './tooltip'

function Graph({ data }) {
  return (
    <Center width="100vw" height="400px">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip content={GraphTooltip} />
          <Area dataKey="count" />
        </AreaChart>
      </ResponsiveContainer>
    </Center>
  );
}

export { Graph };

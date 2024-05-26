import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function BasicPie() {
    return (
        <PieChart
            colors={["#9f86c0", "#cdb4db", "#ffc8dd"]} // Use palette
            series={[
                {
                    data: [
                        { id: 0, value: 10, label: "series A" },
                        { id: 1, value: 15, label: "series B" },
                        { id: 2, value: 20, label: "series C" },
                    ],
                    innerRadius: 30,
                    outerRadius: 100,
                    paddingAngle: 5,
                    cornerRadius: 5,
                    startAngle: -90,
                    endAngle: 180,
                    // cx: 150,
                    // cy: 150,
                },
            ]}
            width={400}
            height={200}
        />
    );
}

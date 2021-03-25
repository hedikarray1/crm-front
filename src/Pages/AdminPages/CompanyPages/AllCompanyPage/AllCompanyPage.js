import React from "react";
import EnhancedTable from "../../../../Components/Tables/CustomTable";
import "./AllCompanyPage.css";

const rows = [
  { name: "Cupcake", calories: 305, fat: 3.7 },
  { name: "Donut", calories: 452, fat: 25.0 },
  { name: "Eclair", calories: 262, fat: 16.0 },
  { name: "Frozen yoghurt", calories: 159, fat: 6.0 },
  { name: "Gingerbread", calories: 356, fat: 16.0 },
  { name: "Honeycomb", calories: 408, fat: 3.2 },
];

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Dessert (100g serving)",
  },
  { id: "calories", numeric: true, disablePadding: false, label: "Calories" },
  { id: "fat", numeric: true, disablePadding: false, label: "Fat (g)" },
];

export default function AllCompanyPage() {
  return (
    <div className="main-container">
      <EnhancedTable
        rows={rows}
        headCells={headCells}
        title="Entrepries"
        alignRow="center"
        alignhead="center"
      ></EnhancedTable>
    </div>
  );
}

import { styled } from "@mui/joy";

export const CanvasGridWrapper = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  width: "75%",
  overflowY: "auto",
  backgroundColor: "#f5f5f5", // Light gray background
  backgroundImage: `
    linear-gradient(to right, #e0e0e0 1px, transparent 1px),
    linear-gradient(to bottom, #e0e0e0 1px, transparent 1px)
  `,
  backgroundSize: "120px 60px",
  "& .header": {
    display : 'flex',
    justifyContent: 'space-between',
    marginLeft : '3.75rem',
    marginRight: '3rem',
    marginTop: '2.5rem',
    fontSize: '1.125rem',
    fontWeight: 600
  }
}));

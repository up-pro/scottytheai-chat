import { CircularProgress, Dialog } from "@mui/material";
import useLoading from "../hooks/useLoading";

export default function Loading() {
  const { isLoading } = useLoading()
  return (
    <Dialog open={isLoading}>
      <CircularProgress />
    </Dialog>
  )
}
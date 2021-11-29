import { FC } from "react";
import { Pagination, PaginationProps } from "@mui/material";
import { Box } from "@mui/system";

export const PhotoGalleryPagination: FC<PaginationProps> = (props) => {
  return (
    <Box mt={2} display="flex" justifyContent="center">
      <Pagination
        count={10}
        variant="outlined"
        shape="rounded"
        {...props}
        // onChange={(_, page) => {
        //   setCurrentPage(page);
        // }}
      />
    </Box>
  );
};

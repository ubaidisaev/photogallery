import { FC } from "react";
import { Modal, ModalProps } from "@mui/material";
import { Box } from "@mui/system";

interface PhotoGalleryModalProps extends ModalProps {
  modalPhotoUrl: string;
}

export const PhotoGalleryModal: FC<Omit<PhotoGalleryModalProps, 'children'>> = ({
  open,
  onClose,
  modalPhotoUrl,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ padding: 0, textAlign: "center", width: 600, margin: "auto" }}>
        <img alt="modal" width="600" height="600" src={modalPhotoUrl} />
      </Box>
    </Modal>
  );
};

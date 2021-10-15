import {
  Box,
  Container,
  Dialog,
  DialogContent,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import AddButton from '../components/AddButton';
import TagsForm from '../components/tags/TagsForm';
import TagsList from '../components/tags/TagsList';
import tagsService from '../services/tags';

const TagsPage = () => {
  const [openForm, setOpenForm] = useState(false);
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    if (!openForm) {
      const loadTags = async () => {
        const response = await tagsService.find();
        setTags(response);
      };
      loadTags();
    }
  }, [openForm]);

  return (
    <>
      <Container>
        <Box paddingTop="20px">
          <Typography variant="h4">Tags</Typography>
        </Box>
        <TagsList items={tags} />
      </Container>
      <AddButton onClick={() => setOpenForm(true)} />
      <Dialog open={openForm} onClose={() => setOpenForm(false)}>
        <DialogContent>
          <TagsForm setOpenForm={setOpenForm} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TagsPage;

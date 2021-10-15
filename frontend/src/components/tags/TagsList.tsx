import { GridColumns } from '@mui/x-data-grid';
import React from 'react';
import { List } from '../List';

interface TagsListProps {
  items: Tag[];
}

const columns: GridColumns = [
  {
    field: 'tag',
    headerName: 'Tag',
  },
];

const formatItem = (tag: Tag) => {
  return {
    id: tag.id,
    tag: tag.tag,
  };
};

export function TagsList({ items }: TagsListProps) {
  return <List items={items} formatItem={formatItem} columns={columns} />;
}

export default TagsList;

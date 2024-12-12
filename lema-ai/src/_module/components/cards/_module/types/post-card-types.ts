export type TPostCardProps = {
  title: string;
  content: string;
  onDelete: (id: string) => void;
  id: string;
};

export type TAddNewPostCardProps = {
  onOpen: () => void;
};

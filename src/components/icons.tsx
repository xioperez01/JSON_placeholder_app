import {
  ArrowDownAZ,
  ArrowUpAZ,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  Eye,
  Loader2,
  LucideProps,
  NotebookPen,
  Users,
  type Icon as LucideIcon,
} from "lucide-react";

export type Icon = typeof LucideIcon;

export const Icons = {
  users: Users,
  posts: NotebookPen,
  spinner: (props: LucideProps) => (
    <Loader2 className="animate-spin" {...props} />
  ),
  view: Eye,
  backToPage: ChevronsLeft,
  asc: ArrowUpAZ,
  desc: ArrowDownAZ,
  next: ChevronLeft,
  prev: ChevronRight,
};

import { cn } from "@/components/utils"
import {
  Pagination as BasePagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./base"

interface PaginationProps {
  current: number
  nos: number
  range?: number
  onClick: (page: number) => void
}

export function Pagination({ current, nos, range = 3, onClick }: PaginationProps) {


  function getPageNumbers(current: number, nos: number, range: number) {
    const halfRange = Math.floor(range / 2);
    let startPage = Math.max(current - halfRange, 1);
    const endPage = Math.min(startPage + range - 1, nos);

    if (endPage - startPage + 1 < range) {
      startPage = Math.max(endPage - range + 1, 1);
    }

    return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
  }

  const pages = getPageNumbers(current, nos, range)

  return (
    <BasePagination >
      <PaginationContent>
        <PaginationItem >
          <PaginationPrevious
            className={cn({ 'cursor-not-allowed': current === 1 })}
            onClick={current === 1 ? undefined : () => onClick(current - 1)}
          />
        </PaginationItem>
        {
          pages.map((value) => (
            <PaginationItem key={value}>
              <PaginationLink isActive={current === value} onClick={() => onClick(value)}
              >{value}</PaginationLink>
            </PaginationItem>
          ))
        }
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem >
          <PaginationNext
            className={cn({ 'cursor-not-allowed': current >= nos })}
            onClick={current >= nos ? undefined : () => onClick(current + 1)} />
        </PaginationItem>
      </PaginationContent>
    </BasePagination>
  )
}

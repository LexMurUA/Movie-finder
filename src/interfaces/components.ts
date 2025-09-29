import type React from 'react';

export interface PaginationProps {
  totalPages: number,
}
export interface PaginationButtonProps {
  page:number
  current:number 
  onClick:React.Dispatch<React.SetStateAction<number>>;
}

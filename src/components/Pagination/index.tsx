import React from "react";
import * as styles from "./styles.module.scss";

type Props = {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange?: (value: number) => void;
};

const Pagination: React.FC<Props> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const canGoBack = currentPage > 1;
  const canGoNext = currentPage < totalPages;

  const handlePrev = () => {
    if (canGoBack) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (canGoNext) onPageChange(currentPage + 1);
  };

  return (
    <div className={styles.pagination}>
      <button onClick={handlePrev} disabled={!canGoBack}>
        ← Anterior
      </button>
      <span>
        Página <strong>{currentPage}</strong> de <strong>{totalPages}</strong>
      </span>
      <button onClick={handleNext} disabled={!canGoNext}>
        Siguiente →
      </button>

      {onItemsPerPageChange && (
        <select
          className={styles.select}
          value={itemsPerPage}
          onChange={(e) => onItemsPerPageChange(Number(e.target.value))}
        >
          <option value={2}>2 por página</option>
          <option value={5}>5 por página</option>
          <option value={10}>10 por página</option>
        </select>
      )}
    </div>
  );
};

export default Pagination;

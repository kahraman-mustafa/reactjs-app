// src/components/BlogFilterBar/BlogFilterBar.tsx

import React from "react";
import styles from "./BlogFilterBar.module.css";

type SortOrder = "newest" | "oldest";
type ViewType = "list" | "catalog";

interface BlogFilterBarProps {
  selectedTag: string;
  onTagChange: (tag: string) => void;
  tagOptions: string[];
  sortOrder: SortOrder;
  onSortOrderChange: (order: SortOrder) => void;
  viewType: ViewType;
  onViewTypeChange: (type: ViewType) => void;
}

const BlogFilterBar: React.FC<BlogFilterBarProps> = ({
  selectedTag,
  onTagChange,
  tagOptions,
  sortOrder,
  onSortOrderChange,
  viewType,
  onViewTypeChange,
}) => {
  return (
    <div className={styles.filterBar}>
      <div className={styles.filterGroup}>
        <label htmlFor="tagSelect">Etikete Göre Filtrele:</label>
        <select
          id="tagSelect"
          value={selectedTag}
          onChange={(e) => onTagChange(e.target.value)}
        >
          <option value="">Hepsi</option>
          {tagOptions.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.filterGroup}>
        <label htmlFor="sortSelect">Sıralama:</label>
        <select
          id="sortSelect"
          value={sortOrder}
          onChange={(e) => onSortOrderChange(e.target.value as SortOrder)}
        >
          <option value="newest">Yeniden Eskiye</option>
          <option value="oldest">Eskiden Yeniye</option>
        </select>
      </div>

      <div className={styles.filterGroup}>
        <label>Görünüm:</label>
        <button
          type="button"
          className={viewType === "list" ? styles.active : ""}
          onClick={() => onViewTypeChange("list")}
        >
          Liste
        </button>
        <button
          type="button"
          className={viewType === "catalog" ? styles.active : ""}
          onClick={() => onViewTypeChange("catalog")}
        >
          Katalog
        </button>
      </div>
    </div>
  );
};

export default BlogFilterBar;

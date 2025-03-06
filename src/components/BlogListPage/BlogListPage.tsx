// src/components/BlogListPage/BlogListPage.tsx

import React, {useMemo, useState} from "react";
import {Post, samplePosts} from "../../data/samplePosts.ts";
import BlogFilterBar from "../BlogFilterBar/BlogFilterBar.tsx";
import BlogItem from "../BlogItem/BlogItem.tsx";
import styles from "./BlogListPage.module.css";

type SortOrder = "newest" | "oldest";
type ViewType = "list" | "catalog";

const BlogListPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");
  const [viewType, setViewType] = useState<ViewType>("list");

  // Etiketleri toplu olarak alalım
  const tagOptions = useMemo<string[]>(() => {
    const allTags = samplePosts.flatMap((p) => p.tags);
    return Array.from(new Set(allTags));
  }, []);

  // Filtre ve sıralama uygulayalım
  const filteredPosts = useMemo<Post[]>(() => {
    let posts = [...samplePosts];

    if (selectedTag) {
      posts = posts.filter((p) => p.tags.includes(selectedTag));
    }

    if (sortOrder === "newest") {
      posts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } else {
      posts.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    }

    return posts;
  }, [selectedTag, sortOrder]);

  return (
    <div className={styles.blogListPage}>
      <h2>Blog Yazıları</h2>

      <BlogFilterBar
        selectedTag={selectedTag}
        onTagChange={setSelectedTag}
        tagOptions={tagOptions}
        sortOrder={sortOrder}
        onSortOrderChange={setSortOrder}
        viewType={viewType}
        onViewTypeChange={setViewType}
      />

      <div className={`${styles.blogList} ${styles[viewType]}`}>
        {filteredPosts.map((post) => (
          <BlogItem key={post.id} post={post} viewType={viewType} />
        ))}
      </div>
    </div>
  );
};

export default BlogListPage;

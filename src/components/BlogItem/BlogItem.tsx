// src/components/BlogItem/BlogItem.tsx

import React from "react";
import {Link} from "react-router-dom";
import {Post} from "../../data/samplePosts.ts";
import styles from "./BlogItem.module.css";

type ViewType = "list" | "catalog";

interface BlogItemProps {
  post: Post;
  viewType: ViewType;
}

const BlogItem: React.FC<BlogItemProps> = ({post, viewType}) => {
  return (
    <div className={`${styles.blogItem} ${styles[viewType]}`}>
      {viewType === "catalog" && post.coverImage && (
        <img
          src={post.coverImage}
          alt={post.title}
          className={styles.blogItemCover}
        />
      )}

      <div className={styles.blogItemContent}>
        <h3 className={styles.blogItemTitle}>{post.title}</h3>

        <div className={styles.blogItemTags}>
          {post.tags.map((tag) => (
            <span key={tag} className={styles.blogItemTag}>
              {tag}
            </span>
          ))}
        </div>

        <p className={styles.blogItemExcerpt}>{post.excerpt}</p>

        <small className={styles.blogItemMeta}>
          {post.author.name} - {new Date(post.createdAt).toLocaleDateString()}
        </small>

        <Link to={`/blog/${post.id}`} className={styles.blogItemLink}>
          Yazıyı Oku
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;

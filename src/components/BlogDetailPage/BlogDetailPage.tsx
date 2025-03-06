// src/components/BlogDetailPage/BlogDetailPage.tsx

import React from "react";
import {Link, useParams} from "react-router-dom";
import {samplePosts} from "../../data/samplePosts.ts";
import styles from "./BlogDetailPage.module.css";

const BlogDetailPage: React.FC = () => {
  const {postId} = useParams<{postId: string}>();
  const post = samplePosts.find((p) => p.id.toString() === postId);

  if (!post) {
    return <div>Yazı bulunamadı.</div>;
  }

  return (
    <div className={styles.blogDetailPage}>
      {post.coverImage && (
        <div className={styles.blogDetailCover}>
          <img src={post.coverImage} alt={post.title} />
        </div>
      )}

      <div className={styles.blogDetailTags}>
        {post.tags.map((tag) => (
          <span className={styles.blogDetailTag} key={tag}>
            {tag}
          </span>
        ))}
      </div>

      <h1 className={styles.blogDetailTitle}>{post.title}</h1>

      <div className={styles.blogDetailMeta}>
        <div className={styles.authorInfo}>
          {post.author.profilePic && (
            <img
              src={post.author.profilePic}
              alt={post.author.name}
              className={styles.authorPic}
            />
          )}
          <span className={styles.authorName}>{post.author.name}</span>
        </div>
        <div className={styles.dateInfo}>
          <p>Oluşturma: {new Date(post.createdAt).toLocaleString()}</p>
          <p>Son Düzenleme: {new Date(post.updatedAt).toLocaleString()}</p>
        </div>
      </div>

      <div
        className={styles.blogDetailContent}
        dangerouslySetInnerHTML={{__html: post.content}}
      />

      <div className={styles.blogDetailNavigation}>
        <Link to="/">Ana Sayfa</Link>
        <Link to="/blog">Blog Listesi</Link>
      </div>
    </div>
  );
};

export default BlogDetailPage;

import React, {useMemo, useState} from "react";
import {Col, Row} from "react-bootstrap";
import {samplePosts} from "../../data/samplePosts.ts";
import BlogFilterBar from "../BlogFilterBar/BlogFilterBar.tsx";
import BlogItem from "../BlogItem/BlogItem.tsx";

const BlogListPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState("");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [viewType, setViewType] = useState<"list" | "catalog">("list");

  // Filtre
  const tagOptions = useMemo(() => {
    const allTags = samplePosts.flatMap((p) => p.tags);
    return Array.from(new Set(allTags));
  }, []);

  // Sıralama
  const filteredPosts = useMemo(() => {
    let posts = [...samplePosts];
    if (selectedTag) {
      posts = posts.filter((p) => p.tags.includes(selectedTag));
    }
    if (sortOrder === "newest") {
      posts.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    } else {
      posts.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
    }
    return posts;
  }, [selectedTag, sortOrder]);

  return (
    // Container'ı Layout'ta zaten kullanıyorsak, burada
    // ek bir Container yerine boş bir fragment veya div kullanılabilir.
    <>
      <h2 className="mb-4">Blog Yazıları</h2>

      <BlogFilterBar
        selectedTag={selectedTag}
        onTagChange={setSelectedTag}
        tagOptions={tagOptions}
        sortOrder={sortOrder}
        onSortOrderChange={setSortOrder}
        viewType={viewType}
        onViewTypeChange={setViewType}
      />

      {viewType === "list" && (
        <div className="d-flex flex-column gap-3">
          {filteredPosts.map((post) => (
            <BlogItem key={post.id} post={post} viewType="list" />
          ))}
        </div>
      )}

      {viewType === "catalog" && (
        <Row xs={1} md={2} xl={3} className="g-4">
          {filteredPosts.map((post) => (
            <Col key={post.id}>
              <BlogItem post={post} viewType="catalog" />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default BlogListPage;

import React from "react";
import {Button, Card} from "react-bootstrap";
import {Link} from "react-router-dom";

type ViewType = "list" | "catalog";

interface Author {
  name: string;
  profilePic?: string;
}
interface Post {
  id: number;
  title: string;
  tags: string[];
  author: Author;
  createdAt: string;
  updatedAt: string;
  coverImage?: string;
  excerpt: string;
}

interface BlogItemProps {
  post: Post;
  viewType: ViewType;
}

const BlogItem: React.FC<BlogItemProps> = ({post, viewType}) => {
  // "list" veya "catalog" moduna göre Card'ı yatay (list) / dikey (catalog) yapabiliriz.
  // React-Bootstrap'te "horizontal" parametresi yok, ama "d-flex flex-row" ekleyebiliriz.
  const cardClasses = viewType === "list" ? "d-flex flex-row" : "";

  return (
    <Card className={`h-100 border-0 shadow-sm ${cardClasses}`}>
      {post.coverImage && (
        <Card.Img
          variant={viewType === "list" ? "left" : "top"} // "left" yok, ama custom
          src={post.coverImage}
          style={viewType === "list" ? {width: "30%", objectFit: "cover"} : {}}
        />
      )}

      <Card.Body>
        <Card.Title>{post.title}</Card.Title>

        {/* Etiketler */}
        <div className="mb-2">
          {post.tags.map((tag) => (
            <span key={tag} className="badge bg-secondary me-1">
              {tag}
            </span>
          ))}
        </div>

        {/* Excerpt */}
        <Card.Text>{post.excerpt}</Card.Text>

        {/* Meta bilgi */}
        <small className="text-muted d-block mb-2">
          {post.author.name} – {new Date(post.createdAt).toLocaleDateString()}
        </small>

        <Button as={Link as any} to={`/blog/${post.id}`} variant="outline-primary">
          Yazıyı Oku
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BlogItem;

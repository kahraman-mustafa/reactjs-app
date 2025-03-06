import DOMPurify from "dompurify";
import React from "react";
import {Badge, Button, Col, Container, Image, Row} from "react-bootstrap";
import {Link, useParams} from "react-router-dom";
import {samplePosts} from "../../data/samplePosts.ts";

const BlogDetailPage: React.FC = () => {
  const {postId} = useParams<{postId: string}>();
  const post = samplePosts.find((p) => p.id.toString() === postId);

  if (!post) {
    return (
      <Container className="my-5">
        <h4>Yazı bulunamadı.</h4>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      {/* Opsiyonel kapak resmi */}
      {post.coverImage && (
        <Row className="mb-4">
          <Col>
            <Image
              src={post.coverImage}
              alt={post.title}
              fluid
              className="rounded mb-3"
            />
          </Col>
        </Row>
      )}

      {/* Etiketler */}
      <Row className="mb-2">
        <Col>
          {post.tags.map((tag) => (
            <Badge bg="secondary" className="me-1" key={tag}>
              {tag}
            </Badge>
          ))}
        </Col>
      </Row>

      {/* Başlık */}
      <Row>
        <Col>
          <h1 className="mb-3">{post.title}</h1>
        </Col>
      </Row>

      {/* Yazar & Tarih info */}
      <Row className="mb-3">
        <Col md={6} className="d-flex align-items-center">
          {post.author.profilePic && (
            <Image
              src={post.author.profilePic}
              alt={post.author.name}
              roundedCircle
              width={40}
              height={40}
              className="me-2"
            />
          )}
          <span className="fw-bold">{post.author.name}</span>
        </Col>
        <Col md={6} className="text-md-end text-muted">
          <small>
            Oluşturma: {new Date(post.createdAt).toLocaleString()}
            <br />
            Son Düzenleme: {new Date(post.updatedAt).toLocaleString()}
          </small>
        </Col>
      </Row>

      {/* İçerik (HTML içerik) */}
      <Row className="mb-3">
        <Col>
          {/* Sanitize the content before rendering */}
          <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(post.content)}} />
        </Col>
      </Row>

      {/* Navigasyon butonları */}
      <Row>
        <Col>
          <Button as={Link as any} to="/" variant="secondary" className="me-2">
            Ana Sayfa
          </Button>
          <Button as={Link as any} to="/blog" variant="outline-secondary">
            Blog Listesi
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogDetailPage;
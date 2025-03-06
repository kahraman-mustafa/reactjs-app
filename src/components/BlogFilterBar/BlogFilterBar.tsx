import React from "react";
import {Button, ButtonGroup, Col, Form, Row} from "react-bootstrap";

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
    <Form className="mb-4">
      <Row className="g-3 align-items-end">
        {/* Etiket Seçimi */}
        <Col xs={12} sm={4}>
          <Form.Group controlId="tagSelect">
            <Form.Label>Etikete Göre Filtrele</Form.Label>
            <Form.Select
              value={selectedTag}
              onChange={(e) => onTagChange(e.target.value)}
            >
              <option value="">Hepsi</option>
              {tagOptions.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </Col>

        {/* Sıralama */}
        <Col xs={12} sm={4}>
          <Form.Group controlId="sortSelect">
            <Form.Label>Sıralama</Form.Label>
            <Form.Select
              value={sortOrder}
              onChange={(e) => onSortOrderChange(e.target.value as SortOrder)}
            >
              <option value="newest">Yeniden Eskiye</option>
              <option value="oldest">Eskiden Yeniye</option>
            </Form.Select>
          </Form.Group>
        </Col>

        {/* Görünüm */}
        <Col xs={12} sm={4}>
          <Form.Label>Görünüm</Form.Label>
          <ButtonGroup className="d-block">
            <Button
              variant={viewType === "list" ? "primary" : "outline-primary"}
              onClick={() => onViewTypeChange("list")}
            >
              Liste
            </Button>
            <Button
              variant={viewType === "catalog" ? "primary" : "outline-primary"}
              onClick={() => onViewTypeChange("catalog")}
            >
              Katalog
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    </Form>
  );
};

export default BlogFilterBar;

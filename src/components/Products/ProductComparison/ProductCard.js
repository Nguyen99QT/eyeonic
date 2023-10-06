import React from "react";
import { Card, Button, Image } from "semantic-ui-react";
import "../Product.scss";

const ProductCard = ({
  product,
  addToCompare,
  removeFromCompare,
  selected,
}) => (
  <Card key={product.Img.ID}>
    <Image size="medium" src={product.Img.Src.img1} />
    <Card.Content verticalAlign="middle">
      <Card.Header>
        {product.Img.Color} {product.Img.ID}
      </Card.Header>
      <Card.Description>{product.Img.Brand.Name}</Card.Description>
      <Card.Description>${product.Img.Price}</Card.Description>

      <Card.Content extra>
        {selected && selected.includes(product) ? (
          <Button color="red" onClick={() => removeFromCompare(product)}>
            Remove
          </Button>
        ) : (
          <Button color="blue" onClick={() => addToCompare(product)}>
            Compare
          </Button>
        )}
      </Card.Content>
    </Card.Content>
  </Card>
);

export default ProductCard;

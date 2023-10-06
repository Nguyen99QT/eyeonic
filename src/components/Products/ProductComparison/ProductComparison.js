import React, { useState } from "react";
import { Grid, Card, Table, Label } from "semantic-ui-react";
import ProductCard from "./ProductCard";
import "./../Product.scss";

// const style = {
//   h1: {
//     marginTop: "3em"
//   },
//   h2: {
//     margin: "4em 0em 2em"
//   },
//   h3: {
//     marginTop: "2em",
//     padding: "2em 0em"
//   },
//   last: {
//     marginBottom: "300px"
//   }
// };


const ProductComparison = ({ products }) => {
  
  const [selectedItems, setSelectedItems] = useState([]);

  const addToCompare = (item) => {
    setSelectedItems((selectedItems) => [...selectedItems, item]);
  };

  const removeFromCompare = (item) => {
    const filteredItems = selectedItems.filter(
      (product) => product.Img.ID !== item.Img.ID
    );
    setSelectedItems((selectedItems) => filteredItems);
  };

  return (
    <div className="compare">
      <h1>Compare Products</h1>
      {selectedItems.length > 0 && (
        <Table definition>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell></Table.HeaderCell>
              {selectedItems.map((el) => (
                <Table.HeaderCell key={el.Img.ID}>
                  {el.Img.Color} {el.Img.ID}
                </Table.HeaderCell>
              ))}
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Label color="orange" ribbon>
                  Brand
                </Label>
              </Table.Cell>
              {selectedItems.map((el) => (
                <Table.Cell key={el.Img.ID}>{el.Img.Brand.Name}</Table.Cell>
              ))}
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Label color="pink" ribbon>
                  Type
                </Label>
              </Table.Cell>
              {selectedItems.map((el) => (
                <Table.Cell key={el.Img.ID}>{el.Img.Type.name}</Table.Cell>
              ))}
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Label color="orange" ribbon>
                  Price
                </Label>
              </Table.Cell>
              {selectedItems.map((el) => (
                <Table.Cell key={el.Img.ID}>${el.Img.Price}</Table.Cell>
              ))}
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Label color="teal" ribbon>
                  Gender
                </Label>
              </Table.Cell>
              {selectedItems.map((el) => (
                <Table.Cell key={el.Img.ID}>{el.Img.Gender}</Table.Cell>
              ))}
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Label color="pink" ribbon>
                  Year
                </Label>
              </Table.Cell>
              {selectedItems.map((el) => (
                <Table.Cell key={el.Img.ID}>{el.Img.Year}</Table.Cell>
              ))}
            </Table.Row>
          </Table.Body>
        </Table>
      )}
      
      <Grid columns={selectedItems.length} stackable padded divided>
        <Card.Group className="G-Card">
          {products.map((product) => (
            <ProductCard
              key={product.Img.ID}
              product={product}
              selected={selectedItems}
              addToCompare={addToCompare}
              removeFromCompare={removeFromCompare}
            />
          ))}
        </Card.Group>
      </Grid>
    </div>
  );
};

export default ProductComparison;

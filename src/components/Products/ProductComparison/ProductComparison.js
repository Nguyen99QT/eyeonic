import React, { useState } from "react";
import { Grid, Card, Table, Label } from "semantic-ui-react";
import ProductCard from "./ProductCard";
import "./../Product.scss";
import ScrollCache from "../../ScrollToTop/ScrollToTop";

import Pagination from "../../Pagination/Pagination";
import { Row } from "react-bootstrap";

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

  const PER_PAGE = 8;
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  };
  const offSet = currentPage * PER_PAGE;
  const currentPageData = products.slice(offSet, offSet + PER_PAGE);
  const pageCount = Math.ceil(products.length / PER_PAGE);

  return (
    <div className="compare">
      <ScrollCache/>
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
          {currentPageData.map((product) => (
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
      <Row>
        <Pagination pageCount={pageCount} handlePageClick={handlePageClick} />
      </Row>
    </div>
  );
};

export default ProductComparison;

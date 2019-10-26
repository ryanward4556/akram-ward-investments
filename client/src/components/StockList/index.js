import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

var pStyle = {
  fontSize: "16px",
  fontFamily: "arial",
  lineHeight: "130%",
  marginTop: "0",
  marginLeft: "3rem"
}

var h3Style = {
  fontFamily: "Orbitron",
  fontSize: "18px",
  marginLeft: "3rem"
}

var aLinkStyle = {
  fontFamily: "Orbitron",
  color: "green",
  marginLeft: "3rem"
}

var articleHighlight = {
  color: "darkgreen"
}

var spaceStyle = {
  fontSize: "4px"
}

export function StockList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

export function StockListItem({
  thumbnail = "https://placehold.it/300x300",
  title,
  text,
  sentiment,
  source,
  date,
  href
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3 style={h3Style}>{title}</h3>
            <p style={spaceStyle}>&nbsp;</p>
            <p style={pStyle}><strong style={articleHighlight}>Article Summary:</strong> {text}</p>
            <p style={spaceStyle}>&nbsp;</p>
            <p style={pStyle}><strong style={articleHighlight}>Article Sentiment:</strong> {sentiment}</p>
            <p style={spaceStyle}>&nbsp;</p>
            <p style={pStyle}><strong style={articleHighlight}>Article Source:</strong> {source}</p>
            <p style={spaceStyle}>&nbsp;</p>
            <p style={pStyle}><strong style={articleHighlight}>Article Date:</strong> {date}</p>
            <p style={spaceStyle}>&nbsp;</p>
            <a rel="noreferrer noopener" target="_blank" href={href} style={aLinkStyle} >
              Go to article!
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}

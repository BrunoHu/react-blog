import React, { Component } from 'react';
import { PageHeader, Menu, Layout, Button } from 'antd';
import './Article.css';
import { Link } from "react-router-dom";

import MarkdownRender  from './MarkdownRender'
import MarkdownData from '../data/Welcome.md';

class Article extends Component {

  constructor() {
    super();
    this.state = { markdown: '' };
  }

  componentWillMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    fetch(MarkdownData).then(res => res.text()).then(text => this.setState({ markdown: text }));
  }

  render() {
    const { markdown } = this.state;
    return <MarkdownRender source={markdown} />;
  }
}

export default Article;
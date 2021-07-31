import React, { Component } from "react";
import {
  LinearIndeterminate,
  renderHTML,
} from "./utility/utility.component.js";

import { apiDomain } from "./constants/constants.component";

export default class SinglePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      objData: [],
    };
    this.getSingle = this.getSingle.bind(this);
  }
  /**
   *
   * @param {slug} props
   */
  componentDidMount(props) {
    var apiEndPost =
      apiDomain +
      "/wp-admin/admin-ajax.php?action=get_page&slug=" +
      this.props.slug;
    fetch(apiEndPost)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          isLoading: false,
          objData: result.data.content,
        });
      });
  }
  /**
   * GET WP Page
   *
   */
  getSingle() {
    return (
      <>
        <div>{renderHTML(this.state.objData)}</div>
      </>
    );
  }

  /**
   * GET Render Method
   *
   */
  render() {
    return (
      <>
        {this.state.isLoading && <LinearIndeterminate />}
        {!this.state.isLoading && this.getSingle()}
      </>
    );
  }
}

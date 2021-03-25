import React, { Component } from "react";
import {
  Row,
  Button,
  ButtonDropdown,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  CustomInput,
  Collapse,
} from "reactstrap";

import { Colxx, Separator } from "../../CustomBootstrap/CustomBootstrap";

import {
  DataListIcon,
  ThumbListIcon,
  ImageListIcon,
} from "../../../assets/svg";
class ListPageHeading extends Component {
  constructor(props) {
    super();
    this.state = {
      dropdownSplitOpen: false,
      displayOptionsIsOpen: false,
    };
  }

  toggleDisplayOptions = () => {
    this.setState((prevState) => ({
      displayOptionsIsOpen: !prevState.displayOptionsIsOpen,
    }));
  };
  toggleSplit = () => {
    this.setState((prevState) => ({
      dropdownSplitOpen: !prevState.dropdownSplitOpen,
    }));
  };

  render() {
    const { displayMode, changeDisplayMode, heading } = this.props;

    const { displayOptionsIsOpen } = this.state;
    return (
      <Row>
        <Colxx xxs="12">
          <h1>{heading}</h1>

          <div className="mb-2">
            <Button
              color="empty"
              className="pt-0 pl-0 d-inline-block d-md-none"
              onClick={this.toggleDisplayOptions}
            >
              option d'affichage
              <i className="simple-icon-arrow-down align-middle" />
            </Button>
            <Collapse
              isOpen={displayOptionsIsOpen}
              className="d-md-block"
              id="displayOptions"
            >
              <span className="mr-3 d-inline-block float-md-left">
                <a
                  href="#/"
                  className={`mr-2 view-icon ${
                    displayMode === "thumblist" ? "active" : ""
                  }`}
                  onClick={() => changeDisplayMode("thumblist")}
                >
                  <ThumbListIcon />
                </a>
                <a
                  href="#/"
                  className={`mr-2 view-icon ${
                    displayMode === "imagelist" ? "active" : ""
                  }`}
                  onClick={() => changeDisplayMode("imagelist")}
                >
                  <ImageListIcon />
                </a>
              </span>
            </Collapse>
          </div>
        </Colxx>
      </Row>
    );
  }
}

export default ListPageHeading;

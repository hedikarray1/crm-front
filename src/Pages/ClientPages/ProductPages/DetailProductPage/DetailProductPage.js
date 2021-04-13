import React from "react";
import {
  Row,
  Card,
  CardTitle,
  CardBody,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  TabContent,
  TabPane,
  Badge,
  CardHeader,
  Table,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
} from "reactstrap";
import { NavLink } from "react-router-dom";

import classnames from "classnames";
import GlideComponentThumbs from "../../../../Components/carousel/GlideComponentThumbs";
import {
  Colxx,
  Separator,
} from "../../../../Components/CustomBootstrap/CustomBootstrap";
import { connect } from "react-redux";

function DetailProductPage(props) {
  const { product, token } = props;

  return (
    <div className="col-md-12">
      <Row>
        <Colxx xxs="12">
          <h1>{product.name}</h1>

          <Separator className="mb-5" />

          <Row>
            <Colxx xxs="12" xl="8" className="col-left">
              <Card className="mb-4 card">
                <CardBody>
                  <GlideComponentThumbs
                    settingsImages={{
                      bound: true,
                      rewind: false,
                      focusAt: 0,
                      startAt: 0,
                      gap: 5,
                      perView: 1,
                      data: product.images,
                    }}
                    settingsThumbs={{
                      bound: true,
                      rewind: false,
                      focusAt: 0,
                      startAt: 0,
                      gap: 10,
                      perView: 5,
                      data: product.images,
                      breakpoints: {
                        576: {
                          perView: 4,
                        },
                        420: {
                          perView: 3,
                        },
                      },
                    }}
                  />
                </CardBody>
              </Card>
              <Card className="mb-4">
                <CardHeader>
                  <Nav tabs className="card-header-tabs ">
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: true,
                          "nav-link": true,
                        })}
                        to="#"
                      >
                        Details
                      </NavLink>
                    </NavItem>
                  </Nav>
                </CardHeader>

                <TabContent activeTab="1">
                  <TabPane tabId="1">
                    <Row>
                      <Colxx sm="12">
                        <CardBody>
                          <p className="font-weight-bold">Description</p>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: product.description,
                            }}
                          />

                          <br />
                          <p className="font-weight-bold">
                            Phasellus Efficitur
                          </p>
                          <p>
                            Tellus a sem condimentum, vitae convallis sapien
                            feugiat.Aenean non nibh nec nunc aliquam iaculis. Ut
                            quis suscipit nunc. Duis at lectusa est aliquam
                            venenatis vitae eget arcu. Sed egestas felis eget
                            convallismaximus. Curabitur maximus, ligula vel
                            sagittis iaculis, risus nisi tinciduntsem, ut
                            ultricies libero nulla eu ligula. Nam ultricies
                            mollis nulla, sedlaoreet leo convallis ac. Mauris
                            nisl risus, tincidunt ac diam aliquet,convallis
                            pellentesque nisi. Nam sit amet libero at odio
                            malesuada ultricies avitae dolor. Cras in viverra
                            felis, non consequat quam. Praesent a orci
                            enim.Vivamus porttitor nisi at nisl egestas iaculis.
                            Nullam commodo eget duisollicitudin sagittis. Duis
                            id nibh mollis, hendrerit metus
                            consectetur,ullamcorper risus. Morbi elementum
                            ultrices nunc, quis porta nisi ornare sitamet.
                            <br />
                            <br />
                            Etiam tincidunt orci in nisi aliquam placerat.
                            Aliquam finibus in sem utvehicula. Morbi eget
                            consectetur leo. Quisque consectetur lectus eros,
                            sedsodales libero ornare cursus. Etiam elementum ut
                            dolor eget hendrerit.Suspendisse eu lacus eu eros
                            lacinia feugiat sit amet non purus.
                            <br />
                            <br />
                            Pellentesque quis cursus mauris. Nam in ornare erat.
                            Vestibulum convallis enim ac massa dapibus
                            consectetur. Maecenas facilisis eros ac felis
                            mattis, eget auctor sapien varius.
                          </p>
                          <br />
                          <p className="font-weight-bold">Elementum Ultrices</p>
                          <Table borderless>
                            <thead>
                              <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                              </tr>
                              <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                              </tr>
                              <tr>
                                <th scope="row">3</th>
                                <td colSpan="2">Larry the Bird</td>
                                <td>@twitter</td>
                              </tr>
                            </tbody>
                          </Table>
                        </CardBody>
                      </Colxx>
                    </Row>
                  </TabPane>
                </TabContent>
              </Card>
            </Colxx>

            <Colxx xxs="12" xl="4" className="col-right">
              <Card className="mb-4">
                <CardBody>
                  <p className="mb-3">
                    Vivamus ultricies augue vitae commodo condimentum. Nullam
                    faucibus eros eu mauris feugiat, eget consectetur tortor
                    tempus.
                    <br />
                    <br />
                    Sed volutpat mollis dui eget fringilla. Vestibulum blandit
                    urna ut tellus lobortis tristique. Vestibulum ante ipsum
                    primis in faucibus orci luctus et ultrices posuere cubilia
                    Curae; Pellentesque quis cursus mauris.
                    <br />
                    <br />
                    Nulla non purus fermentum, pulvinar dui condimentum,
                    malesuada nibh. Sed viverra quam urna, at condimentum ante
                    viverra non. Mauris posuere erat sapien, a convallis libero
                    lobortis sit amet. Suspendisse in orci tellus.
                  </p>
                  <p className="text-muted text-small mb-2">categories</p>
                  <p className="mb-3">
                    <Badge color="outline-secondary" className="mb-1 mr-1" pill>
                      FRONTEND
                    </Badge>
                    <Badge color="outline-secondary" className="mb-1 mr-1" pill>
                      JAVASCRIPT
                    </Badge>
                    <Badge color="outline-secondary" className="mb-1 mr-1" pill>
                      SECURITY
                    </Badge>
                    <Badge color="outline-secondary" className="mb-1 mr-1" pill>
                      DESIGN
                    </Badge>
                  </p>
                </CardBody>
              </Card>
            </Colxx>
          </Row>
        </Colxx>
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    product: state.Product.detailProduct,
    token: state.Auth.Authorization,
  };
};

export default connect(mapStateToProps)(DetailProductPage);

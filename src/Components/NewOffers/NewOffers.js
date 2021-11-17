import React from 'react';
import { Container, Form, Image, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import offer from '../../images/offer.png';
import img14 from '../../images/14.png';
import img15 from '../../images/15.png';
import img16 from '../../images/16.png';
import img17 from '../../images/17.png';


const NewOffers = () => {
    return (
        <div className="newproducts-w3agile">
            <Container>
                <h3>New offers</h3>
                <div className="agile_top_brands_grids">
                    <Row>
                        <Col md={3} className="top_brand_left-1">
                            <div className="hover14 column">
                                <div className="agile_top_brand_left_grid">
                                    <div className="agile_top_brand_left_grid_pos">
                                        <Image
                                            fluid={true}
                                            src={offer}
                                            alt=" "
                                            className="img-responsive"
                                        />
                                    </div>
                                    <div className="agile_top_brand_left_grid1">
                                        <figure>
                                            <div className="snipcart-item block">
                                                <div className="snipcart-thumb">
                                                    <a href="products.html">
                                                        <Image
                                                            fluid={true}
                                                            title=" "
                                                            alt=" "
                                                            src={img14}
                                                        />
                                                    </a>
                                                    <p>Fried-gram</p>
                                                    <div className="stars">
                                                        <FontAwesomeIcon
                                                            icon={faStar}
                                                            color="blue"
                                                        />
                                                        <FontAwesomeIcon
                                                            icon={faStar}
                                                            color="blue"
                                                        />
                                                        <FontAwesomeIcon
                                                            icon={faStar}
                                                            color="blue"
                                                        />
                                                        <FontAwesomeIcon
                                                            icon={faStar}
                                                            color="blue"
                                                        />
                                                        <FontAwesomeIcon
                                                            icon={faStar}
                                                            color="gray"
                                                        />
                                                    </div>
                                                    <h4>
                                                        $35.99{' '}
                                                        <span>$55.00</span>
                                                    </h4>
                                                </div>
                                                <div className="snipcart-details top_brand_home_details">
                                                    <Form
                                                        action="#"
                                                        method="post"
                                                    >
                                                        <fieldset>
                                                            <Form.Control
                                                                type="hidden"
                                                                name="cmd"
                                                                value="_cart"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="add"
                                                                value="1"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="business"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="item_name"
                                                                value="Fortune Sunflower Oil"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="amount"
                                                                value="35.99"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="discount_amount"
                                                                value="1.00"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="currency_code"
                                                                value="USD"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="return"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="cancel_return"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="submit"
                                                                name="submit"
                                                                value="Add to cart"
                                                                className="button"
                                                            />
                                                        </fieldset>
                                                    </Form>
                                                </div>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="top_brand_left-1">
                            <div className="hover14 column">
                                <div className="agile_top_brand_left_grid">
                                    <div className="agile_top_brand_left_grid_pos">
                                        <Image
                                            fluid={true}
                                            src={offer}
                                            alt=" "
                                            className="img-responsive"
                                        />
                                    </div>
                                    <div className="agile_top_brand_left_grid1">
                                        <figure>
                                            <div className="snipcart-item block">
                                                <div className="snipcart-thumb">
                                                    <a href="products.html">
                                                        <Image
                                                            fluid={true}
                                                            title=" "
                                                            alt=" "
                                                            src={img15}
                                                        />
                                                    </a>
                                                    <p>Navaratan-dal</p>
                                                    <div className="stars">
                                                        <FontAwesomeIcon
                                                            icon={faStar}
                                                            color="blue"
                                                        />
                                                        <FontAwesomeIcon
                                                            icon={faStar}
                                                            color="blue"
                                                        />
                                                        <FontAwesomeIcon
                                                            icon={faStar}
                                                            color="blue"
                                                        />
                                                        <FontAwesomeIcon
                                                            icon={faStar}
                                                            color="blue"
                                                        />
                                                        <FontAwesomeIcon
                                                            icon={faStar}
                                                            color="gray"
                                                        />
                                                    </div>
                                                    <h4>
                                                        $30.99{' '}
                                                        <span>$45.00</span>
                                                    </h4>
                                                </div>
                                                <div className="snipcart-details top_brand_home_details">
                                                    <Form
                                                        action="#"
                                                        method="post"
                                                    >
                                                        <fieldset>
                                                            <Form.Control
                                                                type="hidden"
                                                                name="cmd"
                                                                value="_cart"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="add"
                                                                value="1"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="business"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="item_name"
                                                                value="basmati rise"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="amount"
                                                                value="30.99"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="discount_amount"
                                                                value="1.00"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="currency_code"
                                                                value="USD"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="return"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="cancel_return"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="submit"
                                                                name="submit"
                                                                value="Add to cart"
                                                                className="button"
                                                            />
                                                        </fieldset>
                                                    </Form>
                                                </div>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="top_brand_left-1">
                            <div className="hover14 column">
                                <div className="agile_top_brand_left_grid">
                                    <div className="agile_top_brand_left_grid_pos">
                                        <Image
                                            fluid={true}
                                            src={offer}
                                            alt=" "
                                            className="img-responsive"
                                        />
                                    </div>
                                    <div className="agile_top_brand_left_grid_pos">
                                        <Image
                                            fluid={true}
                                            src={offer}
                                            alt=" "
                                            className="img-responsive"
                                        />
                                    </div>
                                    <div className="agile_top_brand_left_grid1">
                                        <figure>
                                            <div className="snipcart-item block">
                                                <div className="snipcart-thumb">
                                                    <a href="products.html">
                                                        <Image
                                                            fluid={true}
                                                            src={img16}
                                                            alt=" "
                                                            className="img-responsive"
                                                        />
                                                    </a>
                                                    <p>White-peasmatar</p>
                                                    <div className="stars">
                                                        <FontAwesomeIcon
                                                            icon={faStar}
                                                            color="blue"
                                                        />
                                                        <FontAwesomeIcon
                                                            icon={faStar}
                                                            color="blue"
                                                        />
                                                        <FontAwesomeIcon
                                                            icon={faStar}
                                                            color="blue"
                                                        />
                                                        <FontAwesomeIcon
                                                            icon={faStar}
                                                            color="blue"
                                                        />
                                                        <FontAwesomeIcon
                                                            icon={faStar}
                                                            color="gray"
                                                        />
                                                    </div>
                                                    <h4>
                                                        $80.99{' '}
                                                        <span>$105.00</span>
                                                    </h4>
                                                </div>
                                                <div className="snipcart-details top_brand_home_details">
                                                    <Form
                                                        action="#"
                                                        method="post"
                                                    >
                                                        <fieldset>
                                                            <Form.Control
                                                                type="hidden"
                                                                name="cmd"
                                                                value="_cart"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="add"
                                                                value="1"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="business"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="item_name"
                                                                value="Pepsi soft drink"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="amount"
                                                                value="80.00"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="discount_amount"
                                                                value="1.00"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="currency_code"
                                                                value="USD"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="return"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="cancel_return"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="submit"
                                                                name="submit"
                                                                value="Add to cart"
                                                                className="button"
                                                            />
                                                        </fieldset>
                                                    </Form>
                                                </div>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="top_brand_left-1">
                            <div className="hover14 column">
                                <div className="agile_top_brand_left_grid">
                                    <div className="agile_top_brand_left_grid_pos">
                                        <Image
                                            fluid={true}
                                            src={offer}
                                            alt=" "
                                            className="img-responsive"
                                        />
                                    </div>
                                    <div className="agile_top_brand_left_grid1">
                                        <figure>
                                            <div className="snipcart-item block">
                                                <div className="snipcart-thumb">
                                                    <a href="products.html">
                                                        <Image
                                                            fluid={true}
                                                            title=" "
                                                            alt=" "
                                                            src={img17}
                                                        />
                                                    </a>
                                                    <p>Channa-dal</p>
                                                    <div className="stars">
                                                        <FontAwesomeIcon
                                                            icon={faStar}
                                                            color="blue"
                                                        />
                                                        <FontAwesomeIcon
                                                            icon={faStar}
                                                            color="blue"
                                                        />
                                                        <FontAwesomeIcon
                                                            icon={faStar}
                                                            color="blue"
                                                        />
                                                        <FontAwesomeIcon
                                                            icon={faStar}
                                                            color="blue"
                                                        />
                                                        <FontAwesomeIcon
                                                            icon={faStar}
                                                            color="gray"
                                                        />
                                                    </div>
                                                    <h4>
                                                        $35.99{' '}
                                                        <span>$55.00</span>
                                                    </h4>
                                                </div>
                                                <div className="snipcart-details top_brand_home_details">
                                                    <Form
                                                        action="#"
                                                        method="post"
                                                    >
                                                        <fieldset>
                                                            <Form.Control
                                                                type="hidden"
                                                                name="cmd"
                                                                value="_cart"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="add"
                                                                value="1"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="business"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="item_name"
                                                                value="Fortune Sunflower Oil"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="amount"
                                                                value="35.99"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="discount_amount"
                                                                value="1.00"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="currency_code"
                                                                value="USD"
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="return"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="hidden"
                                                                name="cancel_return"
                                                                value=" "
                                                            />
                                                            <Form.Control
                                                                type="submit"
                                                                name="submit"
                                                                value="Add to cart"
                                                                className="button"
                                                            />
                                                        </fieldset>
                                                    </Form>
                                                </div>
                                            </div>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <div className="clearfix"> </div>
                </div>
            </Container>
        </div>
    );
};

export default NewOffers;

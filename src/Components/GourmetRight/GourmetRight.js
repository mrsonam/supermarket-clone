import React from 'react';
import { Row, Col, Form, Image, Pagination } from 'react-bootstrap';
import offer from '../../images/offer.png';
import gu1 from '../../images/gu1.png';
import gu2 from '../../images/gu2.png';
import gu3 from '../../images/gu3.png';
import gu4 from '../../images/gu4.png';
import gu5 from '../../images/gu5.png';
import gu6 from '../../images/gu6.png';
import gu7 from '../../images/gu7.png';
import gu8 from '../../images/gu8.png';
import gu9 from '../../images/gu9.png';

const GourmetRight = () => {
    let active = 1;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }
    return (
        <Col md={8} className="products-right">
            <div className="products-right-grid">
                <div className="products-right-grids">
                    <div className="sorting">
                        <Form.Select className="frm-field required sect">
                            <option value="null">Default sorting</option>
                            <option value="null">Sort by popularity</option>
                            <option value="null">Sort by average rating</option>
                            <option value="null">Sort by price</option>
                        </Form.Select>
                    </div>
                    <div className="sorting-left">
                        <Form.Select className="frm-field required sect">
                            <option value="null">Item on page 9</option>
                            <option value="null">Item on page 18</option>
                            <option value="null">Item on page 32</option>
                            <option value="null">All</option>
                        </Form.Select>
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
            <div className="agile_top_brands_grids">
                <Row>
                    <Col md={4} className="top_brand_left">
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
                                                <a href="single.html">
                                                    <Image
                                                        fluid={true}
                                                        title=" "
                                                        alt=" "
                                                        src={gu1}
                                                    />
                                                </a>
                                                <p>Sampann-toor-dal</p>
                                                <h4>
                                                    $35.99 <span>$55.00</span>
                                                </h4>
                                            </div>
                                            <div className="snipcart-details top_brand_home_details">
                                                <Form action="#" method="post">
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
                                                            value="20.99"
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
                                                            type="button"
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
                    <Col md={4} className="top_brand_left">
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
                                                <a href="single.html">
                                                    <Image
                                                        fluid={true}
                                                        title=" "
                                                        alt=" "
                                                        src={gu2}
                                                    />
                                                </a>
                                                <p>Parryss-sugar</p>
                                                <h4>
                                                    $30.99 <span>$45.00</span>
                                                </h4>
                                            </div>
                                            <div className="snipcart-details top_brand_home_details">
                                                <Form action="#" method="post">
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
                                                            value="20.99"
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
                                                            type="button"
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
                    <Col md={4} className="top_brand_left">
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
                                                <a href="single.html">
                                                    <Image
                                                        fluid={true}
                                                        src={gu3}
                                                        alt=" "
                                                        className="img-responsive"
                                                    />
                                                </a>
                                                <p>Saffola-gold</p>
                                                <h4>
                                                    $80.99 <span>$105.00</span>
                                                </h4>
                                            </div>
                                            <div className="snipcart-details top_brand_home_details">
                                                <Form action="#" method="post">
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
                                                            value="20.99"
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
                                                            type="button"
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
            <div className="agile_top_brands_grids">
                <Row>
                    <Col md={4} className="top_brand_left">
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
                                                <a href="single.html">
                                                    <Image
                                                        fluid={true}
                                                        title=" "
                                                        alt=" "
                                                        src={gu4}
                                                    />
                                                </a>
                                                <p>Sampann-toor-dal</p>
                                                <h4>
                                                    $35.99 <span>$55.00</span>
                                                </h4>
                                            </div>
                                            <div className="snipcart-details top_brand_home_details">
                                                <Form action="#" method="post">
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
                                                            value="20.99"
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
                                                            type="button"
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
                    <Col md={4} className="top_brand_left">
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
                                                <a href="single.html">
                                                    <Image
                                                        fluid={true}
                                                        title=" "
                                                        alt=" "
                                                        src={gu5}
                                                    />
                                                </a>
                                                <p>Parryss-sugar</p>
                                                <h4>
                                                    $30.99 <span>$45.00</span>
                                                </h4>
                                            </div>
                                            <div className="snipcart-details top_brand_home_details">
                                                <Form action="#" method="post">
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
                                                            value="20.99"
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
                                                            type="button"
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
                    <Col md={4} className="top_brand_left">
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
                                                <a href="single.html">
                                                    <Image
                                                        fluid={true}
                                                        src={gu6}
                                                        alt=" "
                                                        className="img-responsive"
                                                    />
                                                </a>
                                                <p>Saffola-gold</p>
                                                <h4>
                                                    $80.99 <span>$105.00</span>
                                                </h4>
                                            </div>
                                            <div className="snipcart-details top_brand_home_details">
                                                <Form action="#" method="post">
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
                                                            value="20.99"
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
                                                            type="button"
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
            <div className="agile_top_brands_grids">
                <Row>
                    <Col md={4} className="top_brand_left">
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
                                                <a href="single.html">
                                                    <Image
                                                        fluid={true}
                                                        title=" "
                                                        alt=" "
                                                        src={gu7}
                                                    />
                                                </a>
                                                <p>Sampann-toor-dal</p>
                                                <h4>
                                                    $35.99 <span>$55.00</span>
                                                </h4>
                                            </div>
                                            <div className="snipcart-details top_brand_home_details">
                                                <Form action="#" method="post">
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
                                                            value="20.99"
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
                                                            type="button"
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
                    <Col md={4} className="top_brand_left">
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
                                                <a href="single.html">
                                                    <Image
                                                        fluid={true}
                                                        title=" "
                                                        alt=" "
                                                        src={gu8}
                                                    />
                                                </a>
                                                <p>Parryss-sugar</p>
                                                <h4>
                                                    $30.99 <span>$45.00</span>
                                                </h4>
                                            </div>
                                            <div className="snipcart-details top_brand_home_details">
                                                <Form action="#" method="post">
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
                                                            value="20.99"
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
                                                            type="button"
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
                    <Col md={4} className="top_brand_left">
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
                                                <a href="single.html">
                                                    <Image
                                                        fluid={true}
                                                        src={gu9}
                                                        alt=" "
                                                        className="img-responsive"
                                                    />
                                                </a>
                                                <p>Saffola-gold</p>
                                                <h4>
                                                    $80.99 <span>$105.00</span>
                                                </h4>
                                            </div>
                                            <div className="snipcart-details top_brand_home_details">
                                                <Form action="#" method="post">
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
                                                            value="20.99"
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
                                                            type="button"
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
            <div className="numbering">
                <Pagination className="paging">
                    <Pagination.Prev />
                    {items}
                    <Pagination.Next />
                </Pagination>
            </div>
        </Col>
    );
};

export default GourmetRight;

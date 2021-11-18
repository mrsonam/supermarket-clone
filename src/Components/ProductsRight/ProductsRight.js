import React from 'react';
import { Row, Col, Form, Image, Pagination } from 'react-bootstrap';
import offer from '../../images/offer.png';
import pf4 from '../../images/pf4.png';
import bv3 from '../../images/bv3.png';
import img16 from '../../images/16.png';
import hh4 from '../../images/hh4.png';
import gu5 from '../../images/gu5.png';
import pc6 from '../../images/pc6.png';
import gu4 from '../../images/gu4.png';
import img5 from '../../images/5.png';
import img6 from '../../images/6.png';

const ProductsRight = () => {
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
                                                        src={pf4}
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
                                                        src={bv3}
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
                                                        src={img16}
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
                                                        src={hh4}
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
                                                        src={pc6}
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
                                                        src={img5}
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
                                                        src={img6}
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

export default ProductsRight;

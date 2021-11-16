import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Container, Tabs, Tab, Row, Col } from 'react-bootstrap';
import offer from '../../images/offer.png';
import img1 from '../../images/1.png';
import img2 from '../../images/2.png';
import img3 from '../../images/3.png';
import img4 from '../../images/4.png';
import img5 from '../../images/5.png';
import img6 from '../../images/6.png';
import img7 from '../../images/7.png';
import img8 from '../../images/8.png';
import img9 from '../../images/9.png';
import img10 from '../../images/10.png';
import img13 from '../../images/13.png';
import img12 from '../../images/12.png';

const TopOffers = () => {
    const [key, setKey] = useState('advertised');
    return (
        <div class="top-brands">
            <Container>
                <h2>Top selling offers</h2>
                <div class="grid_3 grid_5">
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                    >
                        <Tab eventKey="advertised" title="Advertised offers">
                            <Container>
                                <div class="agile-tp">
                                    <h5>Advertised this week</h5>
                                    <p class="w3l-ad">
                                        We've pulled together all our advertised
                                        offers into one place, so you won't miss
                                        out on a great deal.
                                    </p>
                                </div>
                                <Row class="agile_top_brands_grids d-flex">
                                    <Col class="top_brand_left">
                                        <div class="hover14 column">
                                            <div class="agile_top_brand_left_grid">
                                                <div class="agile_top_brand_left_grid_pos">
                                                    <img
                                                        src={offer}
                                                        alt=" "
                                                        class="img-responsive"
                                                    />
                                                </div>
                                                <div class="agile_top_brand_left_grid1">
                                                    <figure>
                                                        <div class="snipcart-item block">
                                                            <div class="snipcart-thumb">
                                                                <a href="products.html">
                                                                    <img
                                                                        title=" "
                                                                        alt=" "
                                                                        src={
                                                                            img1
                                                                        }
                                                                    />
                                                                </a>
                                                                <p>Tata-salt</p>
                                                                <div class="stars">
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="gray"
                                                                    />
                                                                </div>
                                                                <h4>
                                                                    $20.99{' '}
                                                                    <span>
                                                                        $35.00
                                                                    </span>
                                                                </h4>
                                                            </div>
                                                            <div class="snipcart-details top_brand_home_details">
                                                                <form
                                                                    action="#"
                                                                    method="post"
                                                                >
                                                                    <fieldset>
                                                                        <input
                                                                            type="hidden"
                                                                            name="cmd"
                                                                            value="_cart"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="add"
                                                                            value="1"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="business"
                                                                            value=" "
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="item_name"
                                                                            value="Fortune Sunflower Oil"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="amount"
                                                                            value="20.99"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="discount_amount"
                                                                            value="1.00"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="currency_code"
                                                                            value="USD"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="return"
                                                                            value=" "
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="cancel_return"
                                                                            value=" "
                                                                        />
                                                                        <input
                                                                            type="submit"
                                                                            name="submit"
                                                                            value="Add to cart"
                                                                            class="button"
                                                                        />
                                                                    </fieldset>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col class="top_brand_left">
                                        <div class="hover14 column">
                                            <div class="agile_top_brand_left_grid">
                                                <div class="agile_top_brand_left_grid_pos">
                                                    <img
                                                        src={offer}
                                                        alt=" "
                                                        class="img-responsive"
                                                    />
                                                </div>
                                                <div class="agile_top_brand_left_grid1">
                                                    <figure>
                                                        <div class="snipcart-item block">
                                                            <div class="snipcart-thumb">
                                                                <a href="products.html">
                                                                    <img
                                                                        title=" "
                                                                        alt=" "
                                                                        src={
                                                                            img2
                                                                        }
                                                                    />
                                                                </a>
                                                                <p>
                                                                    Fortune-sunflower
                                                                </p>
                                                                <div class="stars">
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="gray"
                                                                    />
                                                                </div>
                                                                <h4>
                                                                    $20.99{' '}
                                                                    <span>
                                                                        $35.00
                                                                    </span>
                                                                </h4>
                                                            </div>
                                                            <div class="snipcart-details top_brand_home_details">
                                                                <form
                                                                    action="#"
                                                                    method="post"
                                                                >
                                                                    <fieldset>
                                                                        <input
                                                                            type="hidden"
                                                                            name="cmd"
                                                                            value="_cart"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="add"
                                                                            value="1"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="business"
                                                                            value=" "
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="item_name"
                                                                            value="basmati rise"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="amount"
                                                                            value="20.99"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="discount_amount"
                                                                            value="1.00"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="currency_code"
                                                                            value="USD"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="return"
                                                                            value=" "
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="cancel_return"
                                                                            value=" "
                                                                        />
                                                                        <input
                                                                            type="submit"
                                                                            name="submit"
                                                                            value="Add to cart"
                                                                            class="button"
                                                                        />
                                                                    </fieldset>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col class="top_brand_left">
                                        <div class="hover14 column">
                                            <div class="agile_top_brand_left_grid">
                                                <div class="agile_top_brand_left_grid_pos">
                                                    <img
                                                        src={offer}
                                                        alt=" "
                                                        class="img-responsive"
                                                    />
                                                </div>
                                                <div class="agile_top_brand_left_grid1">
                                                    <figure>
                                                        <div class="snipcart-item block">
                                                            <div class="snipcart-thumb">
                                                                <a href="products.html">
                                                                    <img
                                                                        src={
                                                                            img3
                                                                        }
                                                                        alt=" "
                                                                        class="img-responsive"
                                                                    />
                                                                </a>
                                                                <p>
                                                                    Aashirvaad-atta
                                                                </p>
                                                                <div class="stars">
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="gray"
                                                                    />
                                                                </div>
                                                                <h4>
                                                                    $40.99{' '}
                                                                    <span>
                                                                        $65.00
                                                                    </span>
                                                                </h4>
                                                            </div>
                                                            <div class="snipcart-details top_brand_home_details">
                                                                <form
                                                                    action="#"
                                                                    method="post"
                                                                >
                                                                    <fieldset>
                                                                        <input
                                                                            type="hidden"
                                                                            name="cmd"
                                                                            value="_cart"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="add"
                                                                            value="1"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="business"
                                                                            value=" "
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="item_name"
                                                                            value="Pepsi soft drink"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="amount"
                                                                            value="40.00"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="discount_amount"
                                                                            value="1.00"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="currency_code"
                                                                            value="USD"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="return"
                                                                            value=" "
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="cancel_return"
                                                                            value=" "
                                                                        />
                                                                        <input
                                                                            type="submit"
                                                                            name="submit"
                                                                            value="Add to cart"
                                                                            class="button"
                                                                        />
                                                                    </fieldset>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <div class="clearfix"> </div>
                                </Row>
                                <Row class="agile_top_brands_grids d-flex">
                                    <Col class="top_brand_left">
                                        <div class="hover14 column">
                                            <div class="agile_top_brand_left_grid">
                                                <div class="agile_top_brand_left_grid_pos">
                                                    <img
                                                        src={offer}
                                                        alt=" "
                                                        class="img-responsive"
                                                    />
                                                </div>
                                                <div class="agile_top_brand_left_grid1">
                                                    <figure>
                                                        <div class="snipcart-item block">
                                                            <div class="snipcart-thumb">
                                                                <a href="products.html">
                                                                    <img
                                                                        title=" "
                                                                        alt=" "
                                                                        src={
                                                                            img4
                                                                        }
                                                                    />
                                                                </a>
                                                                <p>
                                                                    Sampann-toor-dal
                                                                </p>
                                                                <div class="stars">
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="gray"
                                                                    />
                                                                </div>
                                                                <h4>
                                                                    $35.99{' '}
                                                                    <span>
                                                                        $55.00
                                                                    </span>
                                                                </h4>
                                                            </div>
                                                            <div class="snipcart-details top_brand_home_details">
                                                                <form
                                                                    action="#"
                                                                    method="post"
                                                                >
                                                                    <fieldset>
                                                                        <input
                                                                            type="hidden"
                                                                            name="cmd"
                                                                            value="_cart"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="add"
                                                                            value="1"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="business"
                                                                            value=" "
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="item_name"
                                                                            value="Fortune Sunflower Oil"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="amount"
                                                                            value="35.99"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="discount_amount"
                                                                            value="1.00"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="currency_code"
                                                                            value="USD"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="return"
                                                                            value=" "
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="cancel_return"
                                                                            value=" "
                                                                        />
                                                                        <input
                                                                            type="submit"
                                                                            name="submit"
                                                                            value="Add to cart"
                                                                            class="button"
                                                                        />
                                                                    </fieldset>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col class="top_brand_left">
                                        <div class="hover14 column">
                                            <div class="agile_top_brand_left_grid">
                                                <div class="agile_top_brand_left_grid_pos">
                                                    <img
                                                        src={offer}
                                                        alt=" "
                                                        class="img-responsive"
                                                    />
                                                </div>
                                                <div class="agile_top_brand_left_grid1">
                                                    <figure>
                                                        <div class="snipcart-item block">
                                                            <div class="snipcart-thumb">
                                                                <a href="products.html">
                                                                    <img
                                                                        title=" "
                                                                        alt=" "
                                                                        src={
                                                                            img5
                                                                        }
                                                                    />
                                                                </a>
                                                                <p>
                                                                    Parryss-sugar
                                                                </p>
                                                                <div class="stars">
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="gray"
                                                                    />
                                                                </div>
                                                                <h4>
                                                                    $30.99{' '}
                                                                    <span>
                                                                        $45.00
                                                                    </span>
                                                                </h4>
                                                            </div>
                                                            <div class="snipcart-details top_brand_home_details">
                                                                <form
                                                                    action="#"
                                                                    method="post"
                                                                >
                                                                    <fieldset>
                                                                        <input
                                                                            type="hidden"
                                                                            name="cmd"
                                                                            value="_cart"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="add"
                                                                            value="1"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="business"
                                                                            value=" "
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="item_name"
                                                                            value="basmati rise"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="amount"
                                                                            value="30.99"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="discount_amount"
                                                                            value="1.00"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="currency_code"
                                                                            value="USD"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="return"
                                                                            value=" "
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="cancel_return"
                                                                            value=" "
                                                                        />
                                                                        <input
                                                                            type="submit"
                                                                            name="submit"
                                                                            value="Add to cart"
                                                                            class="button"
                                                                        />
                                                                    </fieldset>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col class="top_brand_left">
                                        <div class="hover14 column">
                                            <div class="agile_top_brand_left_grid">
                                                <div class="agile_top_brand_left_grid_pos">
                                                    <img
                                                        src={offer}
                                                        alt=" "
                                                        class="img-responsive"
                                                    />
                                                </div>
                                                <div class="agile_top_brand_left_grid_pos">
                                                    <img
                                                        src={offer}
                                                        alt=" "
                                                        class="img-responsive"
                                                    />
                                                </div>
                                                <div class="agile_top_brand_left_grid1">
                                                    <figure>
                                                        <div class="snipcart-item block">
                                                            <div class="snipcart-thumb">
                                                                <a href="products.html">
                                                                    <img
                                                                        src={
                                                                            img6
                                                                        }
                                                                        alt=" "
                                                                        class="img-responsive"
                                                                    />
                                                                </a>
                                                                <p>
                                                                    Saffola-gold
                                                                </p>
                                                                <div class="stars">
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="gray"
                                                                    />
                                                                </div>
                                                                <h4>
                                                                    $80.99{' '}
                                                                    <span>
                                                                        $105.00
                                                                    </span>
                                                                </h4>
                                                            </div>
                                                            <div class="snipcart-details top_brand_home_details">
                                                                <form
                                                                    action="#"
                                                                    method="post"
                                                                >
                                                                    <fieldset>
                                                                        <input
                                                                            type="hidden"
                                                                            name="cmd"
                                                                            value="_cart"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="add"
                                                                            value="1"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="business"
                                                                            value=" "
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="item_name"
                                                                            value="Pepsi soft drink"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="amount"
                                                                            value="80.00"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="discount_amount"
                                                                            value="1.00"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="currency_code"
                                                                            value="USD"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="return"
                                                                            value=" "
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="cancel_return"
                                                                            value=" "
                                                                        />
                                                                        <input
                                                                            type="submit"
                                                                            name="submit"
                                                                            value="Add to cart"
                                                                            class="button"
                                                                        />
                                                                    </fieldset>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <div class="clearfix"> </div>
                                </Row>
                            </Container>
                        </Tab>
                        <Tab eventKey="today" title="Today Offers">
                            <Container>
                                <div class="agile-tp">
                                    <h5>This week</h5>
                                    <p class="w3l-ad">
                                        We've pulled together all our advertised
                                        offers into one place, so you won't miss
                                        out on a great deal.
                                    </p>
                                </div>
                                <Row class="agile_top_brands_grids d-flex">
                                    <Col class="top_brand_left">
                                        <div class="hover14 column">
                                            <div class="agile_top_brand_left_grid">
                                                <div class="agile_top_brand_left_grid_pos">
                                                    <img
                                                        src={offer}
                                                        alt=" "
                                                        class="img-responsive"
                                                    />
                                                </div>
                                                <div class="agile_top_brand_left_grid1">
                                                    <figure>
                                                        <div class="snipcart-item block">
                                                            <div class="snipcart-thumb">
                                                                <a href="products.html">
                                                                    <img
                                                                        title=" "
                                                                        alt=" "
                                                                        src={
                                                                            img7
                                                                        }
                                                                    />
                                                                </a>
                                                                <p>
                                                                    Sona-masoori-rice
                                                                </p>
                                                                <div class="stars">
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="gray"
                                                                    />
                                                                </div>
                                                                <h4>
                                                                    $35.99{' '}
                                                                    <span>
                                                                        $55.00
                                                                    </span>
                                                                </h4>
                                                            </div>
                                                            <div class="snipcart-details top_brand_home_details">
                                                                <form
                                                                    action="#"
                                                                    method="post"
                                                                >
                                                                    <fieldset>
                                                                        <input
                                                                            type="hidden"
                                                                            name="cmd"
                                                                            value="_cart"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="add"
                                                                            value="1"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="business"
                                                                            value=" "
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="item_name"
                                                                            value="Fortune Sunflower Oil"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="amount"
                                                                            value="35.99"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="discount_amount"
                                                                            value="1.00"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="currency_code"
                                                                            value="USD"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="return"
                                                                            value=" "
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="cancel_return"
                                                                            value=" "
                                                                        />
                                                                        <input
                                                                            type="submit"
                                                                            name="submit"
                                                                            value="Add to cart"
                                                                            class="button"
                                                                        />
                                                                    </fieldset>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col class="top_brand_left">
                                        <div class="hover14 column">
                                            <div class="agile_top_brand_left_grid">
                                                <div class="agile_top_brand_left_grid_pos">
                                                    <img
                                                        src={offer}
                                                        alt=" "
                                                        class="img-responsive"
                                                    />
                                                </div>
                                                <div class="agile_top_brand_left_grid1">
                                                    <figure>
                                                        <div class="snipcart-item block">
                                                            <div class="snipcart-thumb">
                                                                <a href="products.html">
                                                                    <img
                                                                        title=" "
                                                                        alt=" "
                                                                        src={
                                                                            img8
                                                                        }
                                                                    />
                                                                </a>
                                                                <p>
                                                                    Milky-mist-paneer
                                                                </p>
                                                                <div class="stars">
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="gray"
                                                                    />
                                                                </div>
                                                                <h4>
                                                                    $30.99{' '}
                                                                    <span>
                                                                        $45.00
                                                                    </span>
                                                                </h4>
                                                            </div>
                                                            <div class="snipcart-details top_brand_home_details">
                                                                <form
                                                                    action="#"
                                                                    method="post"
                                                                >
                                                                    <fieldset>
                                                                        <input
                                                                            type="hidden"
                                                                            name="cmd"
                                                                            value="_cart"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="add"
                                                                            value="1"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="business"
                                                                            value=" "
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="item_name"
                                                                            value="basmati rise"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="amount"
                                                                            value="30.99"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="discount_amount"
                                                                            value="1.00"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="currency_code"
                                                                            value="USD"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="return"
                                                                            value=" "
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="cancel_return"
                                                                            value=" "
                                                                        />
                                                                        <input
                                                                            type="submit"
                                                                            name="submit"
                                                                            value="Add to cart"
                                                                            class="button"
                                                                        />
                                                                    </fieldset>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col class="top_brand_left">
                                        <div class="hover14 column">
                                            <div class="agile_top_brand_left_grid">
                                                <div class="agile_top_brand_left_grid_pos">
                                                    <img
                                                        src={offer}
                                                        alt=" "
                                                        class="img-responsive"
                                                    />
                                                </div>
                                                <div class="agile_top_brand_left_grid_pos">
                                                    <img
                                                        src={offer}
                                                        alt=" "
                                                        class="img-responsive"
                                                    />
                                                </div>
                                                <div class="agile_top_brand_left_grid1">
                                                    <figure>
                                                        <div class="snipcart-item block">
                                                            <div class="snipcart-thumb">
                                                                <a href="products.html">
                                                                    <img
                                                                        src={
                                                                            img9
                                                                        }
                                                                        alt=" "
                                                                        class="img-responsive"
                                                                    />
                                                                </a>
                                                                <p>
                                                                    Basmati-Rice
                                                                </p>
                                                                <div class="stars">
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="gray"
                                                                    />
                                                                </div>
                                                                <h4>
                                                                    $80.99{' '}
                                                                    <span>
                                                                        $105.00
                                                                    </span>
                                                                </h4>
                                                            </div>
                                                            <div class="snipcart-details top_brand_home_details">
                                                                <form
                                                                    action="#"
                                                                    method="post"
                                                                >
                                                                    <fieldset>
                                                                        <input
                                                                            type="hidden"
                                                                            name="cmd"
                                                                            value="_cart"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="add"
                                                                            value="1"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="business"
                                                                            value=" "
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="item_name"
                                                                            value="Pepsi soft drink"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="amount"
                                                                            value="80.00"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="discount_amount"
                                                                            value="1.00"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="currency_code"
                                                                            value="USD"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="return"
                                                                            value=" "
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="cancel_return"
                                                                            value=" "
                                                                        />
                                                                        <input
                                                                            type="submit"
                                                                            name="submit"
                                                                            value="Add to cart"
                                                                            class="button"
                                                                        />
                                                                    </fieldset>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <div class="clearfix"> </div>
                                </Row>
                                <Row class="agile_top_brands_grids d-flex mb-5">
                                    <Col class="top_brand_left">
                                        <div class="hover14 column">
                                            <div class="agile_top_brand_left_grid">
                                                <div class="agile_top_brand_left_grid_pos">
                                                    <img
                                                        src={offer}
                                                        alt=" "
                                                        class="img-responsive"
                                                    />
                                                </div>
                                                <div class="agile_top_brand_left_grid1">
                                                    <figure>
                                                        <div class="snipcart-item block">
                                                            <div class="snipcart-thumb">
                                                                <a href="products.html">
                                                                    <img
                                                                        title=" "
                                                                        alt=" "
                                                                        src={
                                                                            img10
                                                                        }
                                                                    />
                                                                </a>
                                                                <p>
                                                                    Fortune-sunflower
                                                                </p>
                                                                <div class="stars">
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="gray"
                                                                    />
                                                                </div>
                                                                <h4>
                                                                    $20.99{' '}
                                                                    <span>
                                                                        $35.00
                                                                    </span>
                                                                </h4>
                                                            </div>
                                                            <div class="snipcart-details top_brand_home_details">
                                                                <form
                                                                    action="#"
                                                                    method="post"
                                                                >
                                                                    <fieldset>
                                                                        <input
                                                                            type="hidden"
                                                                            name="cmd"
                                                                            value="_cart"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="add"
                                                                            value="1"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="business"
                                                                            value=" "
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="item_name"
                                                                            value="Fortune Sunflower Oil"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="amount"
                                                                            value="20.99"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="discount_amount"
                                                                            value="1.00"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="currency_code"
                                                                            value="USD"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="return"
                                                                            value=" "
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="cancel_return"
                                                                            value=" "
                                                                        />
                                                                        <input
                                                                            type="submit"
                                                                            name="submit"
                                                                            value="Add to cart"
                                                                            class="button"
                                                                        />
                                                                    </fieldset>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col class="top_brand_left">
                                        <div class="hover14 column">
                                            <div class="agile_top_brand_left_grid">
                                                <div class="agile_top_brand_left_grid_pos">
                                                    <img
                                                        src={offer}
                                                        alt=" "
                                                        class="img-responsive"
                                                    />
                                                </div>
                                                <div class="agile_top_brand_left_grid1">
                                                    <figure>
                                                        <div class="snipcart-item block">
                                                            <div class="snipcart-thumb">
                                                                <a href="products.html">
                                                                    <img
                                                                        title=" "
                                                                        alt=" "
                                                                        src={
                                                                            img12
                                                                        }
                                                                    />
                                                                </a>
                                                                <p>
                                                                    Nestle-a-slim
                                                                </p>
                                                                <div class="stars">
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="gray"
                                                                    />
                                                                </div>
                                                                <h4>
                                                                    $20.99{' '}
                                                                    <span>
                                                                        $35.00
                                                                    </span>
                                                                </h4>
                                                            </div>
                                                            <div class="snipcart-details top_brand_home_details">
                                                                <form
                                                                    action="#"
                                                                    method="post"
                                                                >
                                                                    <fieldset>
                                                                        <input
                                                                            type="hidden"
                                                                            name="cmd"
                                                                            value="_cart"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="add"
                                                                            value="1"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="business"
                                                                            value=" "
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="item_name"
                                                                            value="basmati rise"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="amount"
                                                                            value="20.99"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="discount_amount"
                                                                            value="1.00"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="currency_code"
                                                                            value="USD"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="return"
                                                                            value=" "
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="cancel_return"
                                                                            value=" "
                                                                        />
                                                                        <input
                                                                            type="submit"
                                                                            name="submit"
                                                                            value="Add to cart"
                                                                            class="button"
                                                                        />
                                                                    </fieldset>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col class="top_brand_left">
                                        <div class="hover14 column">
                                            <div class="agile_top_brand_left_grid">
                                                <div class="agile_top_brand_left_grid_pos">
                                                    <img
                                                        src={offer}
                                                        alt=" "
                                                        class="img-responsive"
                                                    />
                                                </div>
                                                <div class="agile_top_brand_left_grid1">
                                                    <figure>
                                                        <div class="snipcart-item block">
                                                            <div class="snipcart-thumb">
                                                                <a href="products.html">
                                                                    <img
                                                                        src={
                                                                            img13
                                                                        }
                                                                        alt=" "
                                                                        class="img-responsive"
                                                                    />
                                                                </a>
                                                                <p>
                                                                    Bread-sandwich
                                                                </p>
                                                                <div class="stars">
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="blue"
                                                                    />
                                                                    <FontAwesomeIcon
                                                                        icon={
                                                                            faStar
                                                                        }
                                                                        color="gray"
                                                                    />
                                                                </div>
                                                                <h4>
                                                                    $40.99{' '}
                                                                    <span>
                                                                        $65.00
                                                                    </span>
                                                                </h4>
                                                            </div>
                                                            <div class="snipcart-details top_brand_home_details">
                                                                <form
                                                                    action="#"
                                                                    method="post"
                                                                >
                                                                    <fieldset>
                                                                        <input
                                                                            type="hidden"
                                                                            name="cmd"
                                                                            value="_cart"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="add"
                                                                            value="1"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="business"
                                                                            value=" "
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="item_name"
                                                                            value="Pepsi soft drink"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="amount"
                                                                            value="40.00"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="discount_amount"
                                                                            value="1.00"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="currency_code"
                                                                            value="USD"
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="return"
                                                                            value=" "
                                                                        />
                                                                        <input
                                                                            type="hidden"
                                                                            name="cancel_return"
                                                                            value=" "
                                                                        />
                                                                        <input
                                                                            type="submit"
                                                                            name="submit"
                                                                            value="Add to cart"
                                                                            class="button"
                                                                        />
                                                                    </fieldset>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </figure>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <div class="clearfix"> </div>
                                </Row>
                            </Container>
                        </Tab>
                    </Tabs>
                </div>
            </Container>
        </div>
    );
};

export default TopOffers;

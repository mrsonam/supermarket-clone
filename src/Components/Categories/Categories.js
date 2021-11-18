import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

const Categories = () => {
    return (
        <Col md={4} className="products-left">
            <div className="categories">
                <h2>Categories</h2>
                <ul className="cate">
                    <li>
                        <Link to="/products">
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="faArrowRight"
                            />
                            Fruits And Vegetables
                        </Link>
                    </li>
                    <ul>
                        <li>
                            <Link to="/products">
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="faArrowRight"
                                />
                                Cuts & Sprouts
                            </Link>
                        </li>
                        <li>
                            <Link to="/products">
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="faArrowRight"
                                />
                                Flowers
                            </Link>
                        </li>
                        <li>
                            <Link to="/products">
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="faArrowRight"
                                />
                                Fresh Herbs & Seasonings
                            </Link>
                        </li>
                        <li>
                            <Link to="/products">
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="faArrowRight"
                                />
                                Fresh Vegetables
                            </Link>{' '}
                        </li>
                        <li>
                            <Link to="/products">
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="faArrowRight"
                                />
                                International Vegetables
                            </Link>{' '}
                        </li>
                        <li>
                            <Link to="/products">
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="faArrowRight"
                                />
                                Organic Fruits & Vegetables
                            </Link>
                        </li>
                    </ul>
                    <li>
                        <Link to="/products">
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="faArrowRight"
                            />
                            Grocery & Staples
                        </Link>
                    </li>
                    <ul>
                        <li>
                            <Link to="/products">
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="faArrowRight"
                                />
                                Dals & Pulses
                            </Link>{' '}
                        </li>
                        <li>
                            <Link to="/products">
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="faArrowRight"
                                />
                                Dry Fruits
                            </Link>{' '}
                        </li>
                        <li>
                            <Link to="/products">
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="faArrowRight"
                                />
                                Edible Oils & Ghee
                            </Link>{' '}
                        </li>
                        <li>
                            <Link to="/products">
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="faArrowRight"
                                />
                                Flours & Sooji
                            </Link>{' '}
                        </li>
                        <li>
                            <Link to="/products">
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="faArrowRight"
                                />
                                Masalas & Spices
                            </Link>{' '}
                        </li>
                        <li>
                            <Link to="/products">
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="faArrowRight"
                                />
                                Organic Staples
                            </Link>{' '}
                        </li>
                        <li>
                            <Link to="/products">
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="faArrowRight"
                                />
                                Rice & Rice Products
                            </Link>{' '}
                        </li>
                        <li>
                            <Link to="/products">
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="faArrowRight"
                                />
                                Salt, Sugar & Jaggery
                            </Link>
                        </li>
                    </ul>
                    <li>
                        <Link to="/products">
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className="faArrowRight"
                            />
                            PersonalCare
                        </Link>
                    </li>
                    <ul>
                        <li>
                            <Link to="/products">
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="faArrowRight"
                                />
                                Baby Care
                            </Link>{' '}
                        </li>
                        <li>
                            <Link to="/products">
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="faArrowRight"
                                />
                                Cosmetics
                            </Link>{' '}
                        </li>
                        <li>
                            <Link to="/products">
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="faArrowRight"
                                />
                                Deos & Perfumes
                            </Link>{' '}
                        </li>
                        <li>
                            <Link to="/products">
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="faArrowRight"
                                />
                                Skin Care
                            </Link>{' '}
                        </li>
                        <li>
                            <Link to="/products">
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="faArrowRight"
                                />
                                Sanitary Needs
                            </Link>{' '}
                        </li>
                        <li>
                            <Link to="/products">
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="faArrowRight"
                                />
                                Oral Care
                            </Link>{' '}
                        </li>
                        <li>
                            <Link to="/products">
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="faArrowRight"
                                />
                                Personal Hygiene
                            </Link>{' '}
                        </li>
                        <li>
                            <Link to="/products">
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    className="faArrowRight"
                                />
                                Shaving Needs
                            </Link>
                        </li>
                    </ul>
                </ul>
            </div>
        </Col>
    );
};

export default Categories;

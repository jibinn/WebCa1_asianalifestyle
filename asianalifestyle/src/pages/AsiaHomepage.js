import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";
import { toast } from 'react-toastify';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';
import asimg1 from "../images/asimg.jpg"; // Import image
import asimg2 from "../images/slider3.jpg"; // Import image
import asimg3 from "../images/slider4.jpg"; // Import image
import "./AsiaHomepage.css"; // Import custom CSS file

const AsiaHomepage = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart();
    const [categories, setCategories] = useState([]);
    const [checked, setChecked] = useState([]);
    const [radio, setRadio] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [sliderImages, setSliderImages] = useState([asimg3, asimg1, asimg2]);


    // Get all categories
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get("/api/v1/category/get-category");
            if (data?.success) {
                setCategories(data?.category);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllCategory();
        getTotal();
    }, []);

    // Get total count of products
    const getTotal = async () => {
        try {
            const { data } = await axios.get("/api/v1/product/product-count");
            setTotal(data?.total);
        } catch (error) {
            console.log(error);
        }
    };

    // Get products
    const getAllProducts = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
            setLoading(false);
            setProducts(data.products);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    useEffect(() => {
        getAllProducts();
    }, [page]);

    // Load more products
    const loadMore = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
            setLoading(false);
            setProducts([...products, ...data?.products]);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        if (page === 1) return;
        loadMore();
    }, [page, loadMore]);

    // Filter products by category and price
    useEffect(() => {
        if (!checked.length || !radio.length) getAllProducts();
    }, [checked.length, radio.length]);

    useEffect(() => {
        if (checked.length || radio.length) filterProduct();
    }, [checked, radio]);

    const handleFilter = (value, id) => {
        let all = [...checked];
        if (value) {
            all.push(id);
        } else {
            all = all.filter((c) => c !== id);
        }
        setChecked(all);
    };

    const filterProduct = async () => {
        try {
            const { data } = await axios.post("/api/v1/product/product-filters", {
                checked,
                radio,
            });
            setProducts(data?.products);
        } catch (error) {
            console.log(error);
        }
    };

    // Slider settings
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Set autoplay speed in milliseconds
        arrows: true, // Show arrows for navigation
        adaptiveHeight: true, // Adjust slide height based on content
        responsive: [
            {
                breakpoint: 768, // Adjust settings for smaller screens
                settings: {
                    arrows: false, // Hide arrows on smaller screens
                    adaptiveHeight: false, // Disable adaptive height
                    autoplay: false // Disable autoplay on smaller screens
                }
            }
        ]
    };

    return (
        <div className="container-fluid row mt-3">
            <div className="col-md-12">
            <Slider {...sliderSettings}>
    {sliderImages.map((image, index) => (
        <div key={index} style={{ width: "100%", height: "100%" }}>
            <img
                src={image}
                alt={`Slider Image ${index + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
        </div>
    ))}
</Slider>

            </div>
            <div className="col-md-2">
                <h4 className="text-center">Filter By Category</h4>
                <div className="d-flex flex-column">
                    {categories?.map((c) => (
                        <Checkbox
                            key={c._id}
                            onChange={(e) => handleFilter(e.target.checked, c._id)}
                        >
                            {c.name}
                        </Checkbox>
                    ))}
                </div>
                {/* Price filter */}
                <h4 className="text-center mt-4">Filter By Price</h4>
                <div className="d-flex flex-column">
                    <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                        {Prices?.map((p) => (
                            <div key={p._id}>
                                <Radio value={p.array}>{p.name}</Radio>
                            </div>
                        ))}
                    </Radio.Group>
                </div>
                <div className="d-flex flex-column">
                    <button
                        className="btn btn-danger"
                        onClick={() => window.location.reload()}
                    >
                        RESET FILTERS
                    </button>
                </div>
            </div>
            <div className="col-md-9">
                <h1 className="text-center">All Products</h1>
                <div className="d-flex flex-wrap">
                    {products?.map((p) => (
                        <div className="card m-2" style={{ width: "18rem" }} key={p._id}>
                            <img
                                src={`/api/v1/product/product-photo/${p._id}`}
                                className="card-img-top"
                                alt={p.name}
                                style={{ height: "250px", objectFit: "cover" }} // Adjusted styling for consistent image size
                            />
                            <div className="card-body">
                                <h5 className="card-title">{p.name}</h5>
                                <p className="card-text">
                                    {p.description.substring(0, 30)}...
                                </p>
                                <p className="card-text"> $ {p.price}</p>
                                <button
                                    className="btn btn-more-details ms-1" // Custom class for "More Details" button
                                    onClick={() => navigate(`/product/${p.slug}`)}
                                >
                                    More Details
                                </button>
                                <button
                                    className="btn btn-add-to-cart ms-1" // Custom class for "Add to Cart" button
                                    onClick={() => {
                                        setCart([...cart, p]);
                                        localStorage.setItem(
                                            "cart",
                                            JSON.stringify([...cart, p])
                                        );
                                        toast.success("Item Added to cart");
                                    }}
                                >
                                    ADD TO CART
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="m-2 p-3">
                    {products && products.length < total && (
                        <button
                            className="btn btn-warning"
                            onClick={(e) => {
                                e.preventDefault();
                                setPage(page + 1);
                            }}
                        >
                            {loading ? "Loading ..." : "Loadmore"}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AsiaHomepage;

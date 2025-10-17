import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const Installation = () => {
  const [sortorder, setSortorder] = useState("none");
  const [wishlist, setWishlist] = useState([]);
  const [isSearching, setIsSearching] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const savelist = JSON.parse(localStorage.getItem("wishlist"));
      if (savelist) setWishlist(savelist);
      setIsSearching(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);
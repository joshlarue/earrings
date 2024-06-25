"use client";

import { useState } from "react";
import { ItemPage } from "@/app/items/[item]/page";

export default function Page() {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [preview, setPreview] = useState(null);

  const [productImage, setProductImage] = useState(null);
  const [productTitle, setProductTitle] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      userName === process.env.NEXT_PUBLIC_ADMIN_USER &&
      pass === process.env.NEXT_PUBLIC_ADMIN_PASS
    ) {
      setLoggedIn(true);
    } else {
      console.log("error");
    }
  };

  const handleUserNameChange = (e) => setUserName(e.target.value);
  const handlePassChange = (e) => setPass(e.target.value);
  const handleFileChange = async (e) => {
    setProductImage(e.target.files[0]);
  };
  const handlePreview = () => {
    const imgBlobUrl = URL.createObjectURL(productImage);
    setPreview(
      <ItemPage
        photoSrc={imgBlobUrl}
        title={productTitle}
        desc={productDescription}
        price={productPrice}
      />,
    );
  };

  const handleProductTitleChange = (e) => setProductTitle(e.target.value);
  const handleProductDescriptionChange = (e) =>
    setProductDescription(e.target.value);
  const handleProductPriceChange = (e) => setProductPrice(e.target.value);

  const publishListing = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", productImage);
    formData.append("title", productTitle);
    formData.append("price", productPrice);
    formData.append("description", productDescription);

    await fetch("/api/createlisting", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        {!loggedIn ? (
          <div className="w-fit bg-primary p-10 shadow-md">
            <form className={"flex flex-col gap-1"} onSubmit={handleLogin}>
              <label htmlFor={"username"}>Username:</label>
              <input
                onChange={handleUserNameChange}
                className={"w-fit p-1 bg-primary-dark text-core-dark mb-5"}
                type={"text"}
                name={"username"}
                id={"username"}
                placeholder={"enter your username"}
              />
              <label htmlFor={"Password"}>Password:</label>
              <input
                onChange={handlePassChange}
                className={"w-fit p-1 bg-primary-dark text-core-dark mb-5"}
                type={"password"}
                name={"password"}
                id={"password"}
                placeholder={"enter your password"}
              />
              <button type={"submit"}>submit</button>
            </form>
          </div>
        ) : (
          <form
            className={
              "w-[90%] bg-primary shadow-md p-10 flex flex-col items-start"
            }
          >
            <label className={"mb-2"} htmlFor={"productTitle"}>
              Enter product title:
            </label>
            <input
              onChange={handleProductTitleChange}
              type={"text"}
              className={"mb-10 text-2xl bg-primary-dark p-1"}
              id={"productTitle"}
              name={"productTitle"}
            />
            <label htmlFor={"productDesc"} className={"text-core-dark mb-2"}>
              enter product description:
            </label>
            <textarea
              onChange={handleProductDescriptionChange}
              id={"productDesc"}
              name={"productDesc"}
              className={"w-full mb-10 bg-primary-dark p-1"}
              rows={5}
            ></textarea>
            <label className={"mb-2"} htmlFor={"productPrice"}>
              Enter product price:
            </label>
            <input
              onChange={handleProductPriceChange}
              className={"mb-10 text-2xl bg-primary-dark p-1"}
              type={"number"}
              id={"productPrice"}
              name={"productPrice"}
            />
            <p className={"text-core-dark mb-2"}>choose a listing photo:</p>
            <label
              className={
                "hover:cursor-pointer mb-20 w-fit hover:bg-accent bg-primary-dark p-5"
              }
              htmlFor={"fileInput"}
            >
              select a photo
            </label>
            <input
              onChange={handleFileChange}
              className={"hidden"}
              id={"fileInput"}
              name={"fileInput"}
              type={"file"}
            />
            <button
              onClick={handlePreview}
              className={"bg-secondary py-3 mb-5 w-48 hover:bg-accent"}
              type={"button"}
            >
              Preview Listing
            </button>
            <button
              onClick={publishListing}
              className={"bg-secondary py-3 w-48 hover:bg-accent"}
              type={"submit"}
            >
              Publish Listing
            </button>
          </form>
        )}
        <h3 className={"text-xl mt-20 bg-primary-dark w-[90%] p-5"}>
          Listing preview:
        </h3>
        {preview}
      </div>
    </>
  );
}

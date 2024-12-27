"use client";

import { useEffect, useState } from "react";
import "@/css/checkout.css";
import { IconLockFilled } from "@tabler/icons-react";
import productsData from "@/api/product-data";
import MzuniPay from "mzunipay-sdk";
import * as React from "react";

function formatPrice(price: number) {
  return price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function Page({ params }: { params: Promise<{ id: string }> }) {
  const productId = React.use(params).id;
  const [amount, setAmount] = useState(0);
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [isDetailsValid, setIsDetailsValid] = useState(false);

  const successfulTransaction = () => {
    setSuccess(true);
  };

  useEffect(() => {
    const product = productsData.find((p) => p?.id === productId);
    if (product) {
      setAmount(product.price);
      setDescription(`Order ${product.name} from Byte Store`);
    }
  }, [productId]);

  useEffect(() => {
    const mzuniPay = new MzuniPay(process.env.NEXT_PUBLIC_API_KEY || "");

    mzuniPay.renderForm({
      containerId: "payment-form",
      onError: () => {},
      onSuccess: successfulTransaction,
      styled: true,
      buttonText: `Make payment <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\"><path stroke=\"#e3e6ff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\" stroke-width=\"1.5\" d=\"M8.91 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.91 4.08\"></path></svg>`,
      customStyles: {
        button: {
          backgroundColor: "#4356ff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "3rem",
          borderRadius: "0.8rem",
        },
        input: {
          border: "0px",
          borderBottom: "1px solid var(--secondary)",
          borderRadius: "0",
          paddingLeft: "0",
        },
        form: {
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        },
      },
      defaultValues: {
        amount: amount,
        description: description,
      },
    });
  }, [amount, description]);

  useEffect(() => {
    // Validate customer details
    const isValid =
      customerDetails.name.trim().length > 0 &&
      /^[0-9]{9}$/.test(customerDetails.phone.trim()) && // Example: 9-digit phone validation
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customerDetails.email.trim()); // Email validation

    setIsDetailsValid(isValid);
  }, [customerDetails]);

  const handleInputChange = (field: string, value: string) => {
    setCustomerDetails((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div
      className={`fixed checkout-page h-screen w-screen top-0 left-0 flex items-center justify-center p-4 ${
        success ? "payment-successful" : ""
      }`}
    >
      <div
        className={`checkout-container ${
          isDetailsValid ? "filled-customer-details" : ""
        }`}
      >
        {success ? (
          <div className="flex w-full h-full flex-col gap-2 items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svg-success"
              viewBox="0 0 24 24"
            >
              <g
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-miterlimit="10"
              >
                <circle
                  className="success-circle-outline"
                  cx="12"
                  cy="12"
                  r="11.5"
                />
                <circle
                  className="success-circle-fill"
                  cx="12"
                  cy="12"
                  r="11.5"
                />
                <polyline
                  className="success-tick"
                  points="17,8.5 9.5,15.5 7,13"
                />
              </g>
            </svg>

            <h3 className="font-extrabold">Order was Successful</h3>
            <p>Delivery in 3 to 7 working days</p>
          </div>
        ) : (
          <>
            <div className="checkout-product-info flex justify-center flex-col gap-4 p-8">
              <div className="flex flex-col gap-1 items-center">
                <h3 className="font-bold">Total Amount</h3>
                <h1 className="font-extrabold text-2xl">
                  MWK {formatPrice(amount)}
                </h1>
                <span className="secure items-center flex gap-1">
                  <IconLockFilled />
                  <span className="opacity-50 font-bold">Secure Payment</span>
                </span>
              </div>
            </div>
            <div className="customer-details flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="opacity-70 font-bold">Customer information</h3>

                <div className="details">
                  <input
                    type="text"
                    placeholder="Full name"
                    value={customerDetails.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                  />
                  <div className="grid">
                    <div className="flex phone gap-1 items-center relative">
                      <span className="absolute left-0 font-medium">+265</span>
                      <input
                        type="text"
                        placeholder="Phone"
                        value={customerDetails.phone}
                        onChange={(e) =>
                          handleInputChange("phone", e.target.value)
                        }
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="Email"
                      value={customerDetails.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                    />
                  </div>

                  <input
                    style={{
                      borderBottom: "0px",
                    }}
                    id="physical"
                    type="text"
                    placeholder="Physical address"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="opacity-70 font-bold">Payment method</h3>
                <div className="methods grid gap-2">
                  <span className="font-bold selected">MzuniPay</span>
                  <span className="font-bold">Visa</span>
                </div>

                <div
                  id="payment-form"
                  className="payment-form flex flex-col"
                ></div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Page;

import React, { useState } from "react";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("orders");

  const orders = [
    { id: "#1234", date: "2025-03-10", total: "$120.00", status: "Delivered" },
    { id: "#1235", date: "2025-03-08", total: "$75.50", status: "Shipped" },
  ];

  const payments = [
    { id: "#9876", date: "2025-03-05", amount: "$120.00", method: "Credit Card" },
    { id: "#9877", date: "2025-02-28", amount: "$75.50", method: "PayPal" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        {/* User Info */}
        <div className="flex items-center space-x-4 pb-6 border-b">
          <img
            src="https://via.placeholder.com/80"
            alt="User Avatar"
            className="w-16 h-16 rounded-full border"
          />
          <div>
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-gray-600">johndoe@example.com</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-around mt-4 border-b">
          {["orders", "payments", "account"].map((tab) => (
            <button
              key={tab}
              className={`py-2 px-4 font-medium text-sm ${
                activeTab === tab ? "border-b-2 border-black text-black" : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "orders" ? "Order History" : tab === "payments" ? "Payment History" : "Account Details"}
            </button>
          ))}
        </div>

        {/* Order History */}
        {activeTab === "orders" && (
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-3">Your Orders</h4>
            {orders.length ? (
              <ul className="space-y-3">
                {orders.map((order) => (
                  <li key={order.id} className="p-3 bg-gray-50 rounded-md flex justify-between">
                    <div>
                      <p className="text-sm font-medium">Order {order.id}</p>
                      <p className="text-xs text-gray-500">{order.date}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">{order.total}</p>
                      <p className="text-xs text-gray-500">{order.status}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-sm">No orders found.</p>
            )}
          </div>
        )}

        {/* Payment History */}
        {activeTab === "payments" && (
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-3">Payment History</h4>
            {payments.length ? (
              <ul className="space-y-3">
                {payments.map((payment) => (
                  <li key={payment.id} className="p-3 bg-gray-50 rounded-md flex justify-between">
                    <div>
                      <p className="text-sm font-medium">Payment {payment.id}</p>
                      <p className="text-xs text-gray-500">{payment.date}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium">{payment.amount}</p>
                      <p className="text-xs text-gray-500">{payment.method}</p>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 text-sm">No payments found.</p>
            )}
          </div>
        )}

        {/* Account Details */}
        {activeTab === "account" && (
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-3">Account Details</h4>
            <form className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full p-2 border rounded-md"
                defaultValue="John Doe"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full p-2 border rounded-md"
                defaultValue="johndoe@example.com"
              />
              <input
                type="password"
                name="password"
                placeholder="New Password"
                className="w-full p-2 border rounded-md"
              />
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800"
              >
                Update Profile
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserProfile;

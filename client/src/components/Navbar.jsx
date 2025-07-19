// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";
import navlinks from "../data/navData";
import Button from "./Button"; // Import your reusable Button component

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo/Site Title */}
        <div className="flex items-center space-x-8">
          <Link
            to="/"
            className="text-3xl font-bold text-gray-900 tracking-tight"
          >
            shack'sNest
          </Link>
          {/* Search Bar - Unique & Modern */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-full bg-gray-100 border border-transparent focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
            />
            <svg
              className="absolute left-3 text-gray-500 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>

        {/* Navigation Links and Actions */}
        <div className="flex items-center space-x-6">
          <SignedIn>
            {" "}
            {/* Renders only if the user is signed in */}
            <ul className="hidden md:flex items-center space-x-6">
              {navlinks.map((navlink) => (
                <li key={navlink.path}>
                  {/* Regular navigation links */}
                  {navlink.label !== "Write" && (
                    <Link
                      to={navlink.path}
                      className="text-gray-700 hover:text-purple-600 font-medium transition duration-200 ease-in-out"
                    >
                      {navlink.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            {/* "Write" Button - now using the reusable Button component */}
            {/* We wrap the Button in a Link to maintain navigation */}
            <Link to="/write">
              <Button variant="primary" size="medium">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  ></path>
                </svg>
                Write
              </Button>
            </Link>
            {/* Notification Icon - now using the reusable Button component */}
            <Button variant="ghost" size="medium" className="p-2">
              {" "}
              {/* Added p-2 for better icon button sizing */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                ></path>
              </svg>
            </Button>
            {/* Clerk's UserButton handles user profile, sign out, etc. */}
            {/* This remains as Clerk's component, not our custom Button */}
            <UserButton afterSignOutUrl="/" />
          </SignedIn>

          <SignedOut>
            {" "}
            {/* Renders only if the user is signed out */}
            <div className="flex items-center space-x-4">
              {/* Clerk's SignInButton - pass our Button component as a child for styling */}
              <SignInButton mode="modal">
                <Button
                  variant="ghost"
                  size="medium"
                  className="text-gray-700 hover:text-purple-600"
                >
                  Sign In
                </Button>
              </SignInButton>

              {/* Clerk's SignUpButton - pass our Button component as a child for styling */}
              <SignUpButton mode="modal">
                <Button
                  variant="primary"
                  size="medium"
                  className="bg-gray-800 hover:bg-gray-900 text-white"
                >
                  Get started
                </Button>
              </SignUpButton>
            </div>
          </SignedOut>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

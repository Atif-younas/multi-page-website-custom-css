"use client";
import '../../app/styles/button.css';
export default function Button() {
  return (
    <button
      onClick={() => (window.location.href = "/")}
      className="custom-button"
    >
      Go Back To Your Home Page
    </button>
  );
}


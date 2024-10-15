// Product.tsx (Make sure this file exists)
"use client";  // Ensure client-side rendering in Next.js 13+

export default function Product({ price }: { price: number }) {
    console.log(price); // Logs the price prop to the console

    return (
        <button
            className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"
            onClick={() => alert("Product added to cart!")}
        >
            Add to Cart
        </button>
    );
}

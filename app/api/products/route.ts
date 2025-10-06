import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    { id: 1, name: "Wireless Mouse", price: 499, imageUrl: "/images/mouse.jpg" },
    { id: 2, name: "Mechanical Keyboard", price: 2999, imageUrl: "/images/keyboard.jpg" },
    { id: 3, name: "HD Monitor", price: 8999, imageUrl: "/images/monitor.jpg" },
    { id: 4, name: "USB-C Charger", price: 1499, imageUrl: "/images/charger.jpg" },
    { id: 5, name: "Bluetooth Headphones", price: 1999, imageUrl: "/images/headphones.jpg" },
  ];

  return NextResponse.json(products);
}

import { NextResponse } from "next/server";

type CartItem = {
  id: number;
  quantity: number;
};

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { cart }: { cart: CartItem[] } = body;

    if (!cart || !Array.isArray(cart)) {
      return NextResponse.json(
        { message: "Invalid cart data" },
        { status: 400 }
      );
    }

    console.log("🛒 Checkout received:", cart);

    return NextResponse.json({
      success: true,
      message: "Order placed successfully!",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

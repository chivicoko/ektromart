
import { NextRequest, NextResponse } from 'next/server';

let products: any[] = [];

export async function GET() {
  return NextResponse.json(products, { status: 200 });
}

export async function POST(req: NextRequest) {
  const newProducts = await req.json();

  if (Array.isArray(newProducts)) {
    products = newProducts;
    return NextResponse.json({ message: 'Products initialized' }, { status: 201 });
  } else {
    products.push(newProducts);
    return NextResponse.json(newProducts, { status: 201 });
  }
}

export async function PUT(req: NextRequest) {
  const updatedProduct = await req.json();
  products = products.map((product) =>
    product.id === updatedProduct.id ? updatedProduct : product
  );
  return NextResponse.json(updatedProduct, { status: 200 });
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  products = products.filter((product) => product.id !== id);
  return NextResponse.json({}, { status: 204 });
}

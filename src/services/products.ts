export async function getProducts() {
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/products?category[in]=6439d58a0049ad0b52b9003f");
    const data = await res.json();
    return data.data;
} 
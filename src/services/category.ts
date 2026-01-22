export async function getCategory() {
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/categories/6439d58a0049ad0b52b9003f");
    const data = await res.json();
    console.log(data.data )
    return data.data;
}
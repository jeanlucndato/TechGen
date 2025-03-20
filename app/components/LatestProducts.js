import Image from 'next/image'; // Importez le composant Image de Next.js

export default function LatestProducts() {
  const products = [
    {
      title: "Triangle Roof",
      category: "MANAGEMENT",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolor magna ut consequat siad esqudiat dolor",
      imageUrl: "/images/product1.jpg", // Remplacez par le chemin de votre image
    },
    {
      title: "Curved Corners",
      category: "DEVELOPMENT",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolor magna ut consequat siad esqudiat dolor",
      imageUrl: "/images/product2.jpg", // Remplacez par le chemin de votre image
    },
    {
      title: "Bird On Green",
      category: "DESIGN",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor incididunt ut laboret dolor magna ut consequat siad esqudiat dolor",
      imageUrl: "/images/product3.jpg", // Remplacez par le chemin de votre image
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">Latest Products</h2>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed tempor
          incididunt ut laboret dolore magna aliqua enim minim veniam
          exercitation
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <span className="text-sm text-gray-500">{product.category}</span>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <button className="text-blue-500 mt-4">READ MORE</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
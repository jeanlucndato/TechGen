export default function Services() {
    const services = [
      {
        title: "Art Of Coding",
        description: "Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor",
        icon: "", // Remplacez par une icône appropriée (par exemple, une icône de bibliothèque d'icônes)
      },
      {
        title: "Responsive Design",
        description: "Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor",
        icon: "", // Remplacez par une icône appropriée
      },
      {
        title: "Feature Reach",
        description: "Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor",
        icon: "✨", // Remplacez par une icône appropriée
      },
      {
        title: "Useful Documentation",
        description: "Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor",
        icon: "", // Remplacez par une icône appropriée
      },
      {
        title: "Fast Delivery",
        description: "Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor",
        icon: "", // Remplacez par une icône appropriée
      },
      {
        title: "Free Plugins",
        description: "Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor",
        icon: "", // Remplacez par une icône appropriée
      },
    ];
  
    return (
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
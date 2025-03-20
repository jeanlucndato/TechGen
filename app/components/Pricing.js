export default function Pricing() {
    const pricingPlans = [
      {
        title: "Starter Kit",
        price: "49",
        description: "Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor",
        features: ["Basic Features", "Up to 5 products", "50 Users Panels"],
        icon: "lightbulb", // Remplacez par une icône appropriée
      },
      {
        title: "Professional",
        price: "149",
        description: "Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor",
        features: ["Basic Features", "Up to 100 products", "100 Users Panels"],
        icon: "award", // Remplacez par une icône appropriée
      },
      {
        title: "Advanced",
        price: "249",
        description: "Lorem ipsum dolor amet consectetur ut consequat siad esqudiat dolor",
        features: ["Extended Features", "Unlimited products", "Unlimited Users Panels"],
        icon: "shield-check", // Remplacez par une icône appropriée
      },
    ];
  
    return (
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 text-center"
              >
                <div className="text-4xl text-gray-500 mb-4">
                  {/* Icône ici (par exemple, <i className={`fas fa-${plan.icon}`}></i>) */}
                </div>
                <h3 className="text-2xl font-semibold mb-2">{plan.title}</h3>
                <span className="text-3xl font-bold mb-4">${plan.price}</span>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <ul className="text-left mb-4">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="text-gray-700">
                      - {feature}
                    </li>
                  ))}
                </ul>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold">
                  CHOOSE
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
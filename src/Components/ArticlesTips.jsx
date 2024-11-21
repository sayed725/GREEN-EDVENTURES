import React from "react";

const articles = [
    {
      date: "JULY 10, 2024",
      title: "Sreemangal Tea plantation & Rainforest",
      subtitle: "Evergreen Tea Plantation",
      description:
        "Imagine once the Himalayas foothills downwards for trimming. A picturesque tea plantation stretching far and wide. Discover the serenity of dense rainforests and enjoy the rich biodiversity this region has to offer...",
        link: "#",
    },
    {
      date: "JUNE 30, 2024",
      title: "World Heritage sites of Bangladesh",
      subtitle: "Bangladesh affluent in cultural built heritage...",
      description:
        "Bangladesh is home to historical landmarks and generation-owned traditional architecture.From the majestic Sundarbans to the ancient mosque city of Bagerhat, there's much to explore...",
      link: "#",
    },
    {
      date: "JUNE 28, 2024",
      title: "History and Cultural Heritage of Bangladesh",
      subtitle: "History & cultural heritage of Bangladesh",
      description:
        "Dive into the stories of this vibrant country's historical and cultural evolution.Learn about the traditions, festivals, and milestones that shaped modern-day Bangladesh...",
     
      link: "#",
    },
  ];

const ArticlesTips = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-[#184E68] to-[#57CA85]">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <p className="mt-2 text-lg text-white text-center">
          Explore some of the best tips from around the world
        </p>
        <h2 className="text-3xl font-extrabold text-white text-center">
          Articles & Tips
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {articles.map((article, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 bg-[#0f2d3c] text-white shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-xs font-semibold  uppercase">
                {article.date}
              </p>
              <h3 className="mt-2 text-lg font-bold ">
                {article.title}
              </h3>
              <p className="mt-1 text-sm font-medium ">
                {article.subtitle}
              </p>
              <p className="mt-8 text-sm">{article.description}</p>
              <a
                href={article.link}
                className="mt-4 inline-block text-green-600 hover:underline text-sm font-semibold"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesTips;

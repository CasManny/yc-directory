import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1 , name: "casmanny"},
      _id: 1,
      image: "https://placehold.co/600x600",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, ratione.",
      category: "roborts",
      title: "We robot",
    },
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 2, name: "sabastine" },
      _id: 2,
      image: "https://placehold.co/600x600",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, ratione.",
      category: "cars",
      title: "cars",
    },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch you startup, <br />
          connect with entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, vote on pitches, and Get noticed in Virtual competitions
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Results for ${query}` : "All startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post, index) => <StartupCard key={post?._id} post={post}/>)
          ) : (
            <div className=""></div>
          )}
        </ul>
      </section>
    </>
  );
}

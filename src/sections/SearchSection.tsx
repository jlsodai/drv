import SearchBar from "@/components/SearchBar";
const SearchSection = ({ searched = false }: { searched?: boolean }) => {
  return (
    <section
      className={`bg-gray-100 ${
        searched || "min-h-[calc(100vh-62px)]"
      } flex items-center`}
    >
      <div className="container p-16">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 text-center">
          Search Driver&apos;s and Vehicle&apos;s Record
        </h1>
        <SearchBar />
      </div>
    </section>
  );
};
export default SearchSection;

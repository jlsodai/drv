import SearchResultsSection from "@/sections/SearchResultsSection";
import SearchSection from "@/sections/SearchSection";

const SearchPage = ({ searchParams }: { searchParams: any }) => {
  return (
    <>
      <SearchSection searched={searchParams.q ? true : false} />
      {searchParams.q && (
        <>
          <SearchResultsSection />
        </>
      )}
    </>
  );
};
export default SearchPage;
